import PageTransition from "@/components/page-transition"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import FadeIn from "@/components/fade-in"

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 md:pt-36 px-8 md:px-24 max-w-5xl mx-auto">
        <Link href="/" className="text-black/50 flex items-center gap-2 hover:underline mb-6">
            <ArrowLeft size={16} /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <FadeIn delay={50} direction="up">
        <p className="text-black/60 mb-8">
          I&apos;ll only respond to those proposals that are a good match for my schedule and interests. Thank you!
        </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={100} direction="up">
            <div>
              <h2 className="text-2xl font-bold mb-4">Send a message</h2>
              {/* Tally Form Embed */}
              <iframe
                src="https://tally.so/embed/wz44pg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="280"
                frameBorder="0"
                title="Contact Form"
                className=""
              ></iframe>
            </div>
          </FadeIn>

          <FadeIn delay={150} direction="up">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-black/60">
                  Quezon City, Metro Manila, Philippines
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-black/60">rvnztolentino@outlook.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-black/60">+63 906 069 6544</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                <Link href="https://linkedin.com/in/rvnztolentino" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition-colors duration-200">
                  https://linkedin.com/in/rvnztolentino
                </Link>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  )
}
