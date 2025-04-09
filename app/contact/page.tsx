import PageTransition from "@/components/page-transition"
import Link from "next/link"
import FadeIn from "@/components/fade-in"

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-36 px-8 md:px-24 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <div className="w-8 h-1 bg-black mb-6"></div>
        <FadeIn delay={50} direction="up">
        <p className="text-gray-600 mb-8">
          I&apos;ll only respond to those proposals that are a good match for my schedule and interests. Thank you!
        </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={100} direction="up">
            <div>
              <h2 className="text-2xl font-bold mb-4">Send a message</h2>
              {/* Tally Form Embed */}
              <iframe
                src="https://tally.so/embed/mRbVWK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
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
                <p className="text-gray-600">
                  Quezon City, Metro Manila, Philippines
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-gray-600">rvnztolentino@outlook.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-gray-600">+63 906 069 6544</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                <Link href="https://linkedin.com/in/rvnztolentino" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition-colors duration-200">
                  https://linkedin.com/in/rvnztolentino
                </Link>
              </div>

              {/*<div>
                <h3 className="text-lg font-medium mb-1">Hours</h3>
                <p className="text-gray-600">
                  N/A
                </p>
              </div> */}
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  )
}
