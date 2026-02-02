// Social Links
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/rvnztolentino",
  youtube: "https://youtube.com/@rvnztolentino",
  linktree: "https://linktr.ee/rvnztolentino",
  linkedin: "https://linkedin.com/in/rvnztolentino",
  github: "https://github.com/rvnztolentino",
  email: "rvnztolentino@gmail.com"
};

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
}

// Project Constants
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: "NEURAL NETWORK VISUALIZER",
    description: "An interactive web application visualizing real-time neural network training processes.",
    image: "https://picsum.photos/800/600?random=1",
    tech: ["React", "D3.js", "Python"]
  },
  {
    id: 2,
    title: "ALGO TRADING BOT",
    description: "Automated high-frequency trading bot analyzing crypto market trends using ML.",
    image: "https://picsum.photos/800/600?random=2",
    tech: ["Python", "TensorFlow", "AWS"]
  },
  {
    id: 3,
    title: "IMMERSIVE 3D PORTFOLIO",
    description: "ThreeJS based portfolio offering a gamified experience for visitors.",
    image: "https://picsum.photos/800/600?random=3",
    tech: ["Three.js", "React", "WebGL"]
  },
  {
    id: 4,
    title: "SMART HOME HUB",
    description: "IoT dashboard for managing smart home devices with voice control integration.",
    image: "https://picsum.photos/800/600?random=4",
    tech: ["Vue", "Node.js", "MQTT"]
  }
];

// Portfolio Images
export const PORTFOLIO_IMAGES = [
  "https://picsum.photos/600/800?random=10",
  "https://picsum.photos/600/800?random=11",
  "https://picsum.photos/600/800?random=12"
];

// AI Chat Configuration
export const RATE_LIMIT_WINDOW_MS = 300_000;
export const RATE_LIMIT_MAX = 3;

export const AI_SYSTEM_PROMPT = `Instruction:
Output responses in all lowercase.
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
`;