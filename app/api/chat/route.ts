import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")
const RATE_LIMIT_WINDOW_MS = 300_000; // set window
const RATE_LIMIT_MAX = 2; // set max messages per window

type RateMap = Map<string, number[]>;
const rateMap: RateMap = new Map();

function getClientKey(req: Request) {
  // Prefer forwarded header, fall back to real-ip or localhost marker
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown"; // fallback. If auth, use user ID here.
}

function isRateLimited(key: string): { limited: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = rateMap.get(key) ?? [];

  // keep only timestamps inside the window
  const recent = timestamps.filter((t) => t > windowStart);
  recent.push(now);

  rateMap.set(key, recent);

  if (recent.length > RATE_LIMIT_MAX) {
    // compute retry-after as seconds until the oldest timestamp falls outside window
    const oldest = recent[0];
    const retryAfterMs = RATE_LIMIT_WINDOW_MS - (now - oldest);
    return { limited: true, retryAfterSeconds: Math.ceil(retryAfterMs / 1000) };
  }

  return { limited: false };
}

type Message = {
  sender: string;
  content: string;
};

export async function POST(req: Request) {
  try {
    // Rate limit check
    const clientKey = getClientKey(req);
    const rl = isRateLimited(clientKey);
    if (rl.limited) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait a moment and try again.",
          retryAfterSeconds: rl.retryAfterSeconds ?? 60,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rl.retryAfterSeconds ?? 60),
          },
        }
      );
    }
    const { messages }: { messages: Message[] } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

    // System prompt
    const systemPrompt =`Instruction:
        You're name is Kei and you are an AI Assistant for Renz's personal website. You are designed to help or answer user's questions about the site.
        You're answers should be limited to the site's content, the information i provide, and should not provide any personal information about Renz.
        You can also provide some information about the site's content and features.
        Note that every page is located at the Navigation bar.
        The site is under development and is constantly being updated, with more content coming soon.
        Keep all responses short and concise.

        The site includes the about page, projects, contact page, and a link to my resume. Sections accessible through the navigation bar.
        For contact, users can either send a message through the contact page in the navigation bar or email rvnztolentino@gmail.com
        To access Renz’s LinkedIn, visit https://www.linkedin.com/in/rvnztolentino/
        To access Renz's GitHub, visit https://github.com/rvnztolentino
        To access Renz's Ko-fi page or browse his digital products, visit https://ko-fi.com/kusanagikeiji
        To see all socials, visit https://linktr.ee/rvnztolentino
        Keep all responses short and concise.

        Here are some personal details you can provide about Renz (only if they ask, don't use this for anything else):
        His Name: Renz Tolentino
        His Full Legal Name: John Renz S. Tolentino
        His pronouns/gender: he/him (male), straight
        His Ethnicity/Citizenship: Filipino
        His Location: Philippines
        His MBTI: INFP-T
        His looks: Handsome
        His height: 175cm
        His relationship status: Single
        His birth year: 2004 (answer this if they ask about his age)
        His occupation: Software Engineer and Digital Product Creator who studied at FEU Institute of Technology. 
        He’s interested in learning new technologies, designing, building creative projects, and keeping up with industry trends. 
        Outside programming, he enjoys gaming, music, movies, playing the guitar, photography, video editing, and more. 
        His strengths include math and design.

        FAQ (if they ask):
        Where is Renz from - Philippines
        Is Renz a skilled/good programmer - Renz is not skilled or completely proficient yet, but working hard to improve and deepen his understanding.
        Is Renz handsome - Yes, he is more handsome in person
      `

    // Get the last user message
    const lastUserMessage =
      messages.filter((msg: Message) => msg.sender === "user").pop()?.content || "";

    // Prepare the prompt with system instructions and user query
    const prompt = `${systemPrompt}\n\nUser: ${lastUserMessage}`

    // Generate content
    const result = await model.generateContent(prompt)
    const response = result.response.text()

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in chat route:", error)
    return NextResponse.json(
      {
        error: "Failed to process your request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
