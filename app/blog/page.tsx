import Link from "next/link"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"
import { ArrowLeft } from "lucide-react"
import { getAllPosts } from "@/lib/posts"

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-4 px-8 md:px-16 max-w-5xl mx-auto">
        <Link href="/" className="text-black/50 inline-flex items-center gap-2 hover:bg-black/10 rounded-md px-2 py-1 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to home
        </Link>

        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <FadeIn delay={50} direction="up">
          <div className="space-y-0">
            {posts.map((post: any, i: number) => (
              <article key={`${post.slug}-${i}`} className="border-t border-b border-gray-200 py-6">
                <div className="grid items-start md:grid-cols-2">
                  <div className="pr-4">
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <p className="font-bold text-black/90 md:mb-1 inline-flex group-hover:bg-black/10 rounded-md px-2 py-1 transition-colors">{post.title}</p>
                    </Link>
                    <p className="pl-2 text-sm text-gray-500">Last modified: {post.date}</p>
                  </div>
                  <div className="pl-2 md:pl-0 mt-3 md:mt-0">
                    <p className="text-black/75 text-md">{post.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  )
}