import Link from "next/link"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"
import { ArrowLeft } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 better ways to create a React app",
      date: "June 15, 2023",
      excerpt:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
      slug: "5-better-ways-to-create-a-react-app",
    },
    {
      id: 2,
      title: "7 apps + websites for productivity and students 💻",
      date: "May 28, 2023",
      excerpt: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
      slug: "7-apps-websites-for-productivity-and-students",
    },
    {
      id: 3,
      title: "becoming 20 years old.",
      date: "Jan. 2, 2025",
      excerpt: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
      slug: "becoming-20-years-old",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-4 px-8 md:px-16 max-w-5xl mx-auto">
        <Link href="/" className="text-black/50 flex items-center gap-2 hover:underline mb-6">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="w-8 h-1 bg-black mb-6"></div>
        <FadeIn delay={50} direction="up">
          <p className="text-gray-600 mb-8">Sharing my knowledge, insights, and personal stories through detailed guides, step-by-step tutorials, and more.</p>
        </FadeIn>

        <FadeIn delay={100} direction="up">
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-8">
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-500 mb-4">{post.date}</p>
                  <p className="text-gray-600">{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  )
}
