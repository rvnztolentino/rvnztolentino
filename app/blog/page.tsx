import Link from "next/link"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Evolution of Sustainable Fashion",
      date: "June 15, 2023",
      excerpt:
        "Exploring how sustainable practices are reshaping the fashion industry and what it means for consumers and designers alike.",
      slug: "evolution-of-sustainable-fashion",
    },
    {
      id: 2,
      title: "Fashion Week Highlights: New York 2023",
      date: "May 28, 2023",
      excerpt: "A recap of the most innovative and inspiring collections from this year's New York Fashion Week.",
      slug: "fashion-week-highlights-new-york-2023",
    },
    {
      id: 3,
      title: "The Art of Minimalism in Modern Wardrobes",
      date: "April 10, 2023",
      excerpt: "How the minimalist approach to fashion can create timeless style while reducing environmental impact.",
      slug: "art-of-minimalism-in-modern-wardrobes",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-4 px-8 md:px-16 max-w-5xl mx-auto">
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
