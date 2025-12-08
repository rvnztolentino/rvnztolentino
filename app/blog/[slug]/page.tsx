import { notFound } from "next/navigation"
import { getPostBySlug } from "@/lib/posts"
import Link from "next/link"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"
import { ArrowLeft } from "lucide-react"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Post not found.</p>
      </div>
    )
  }

  // Load post using shared loader, if missing show not-found page
  let post 
  try {
    post = await getPostBySlug(slug)
  } catch (e) {
    return notFound()
  }
  if (!post) return notFound()
  
  const { content, ...data } = post as { content: string } & Record<string, any>
  const title = data.title ?? slug.replace(/-/g, " ") // Minimal fallback title: frontmatter `title` or humanized slug
  const rawDate = data.date ?? null // Format date from frontmatter
  const formattedDate = rawDate 
    ? new Date(rawDate).toLocaleDateString(undefined, { 
      year: "numeric", 
      month: "short", 
      day: "numeric" })
    : null

  // For HTML rendering, consider adding `react-markdown` or restoring `remark` processing.
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-8 px-8 md:px-16 max-w-5xl mx-auto">
        <Link href="/blog" className="text-black/50 inline-flex items-center gap-2 hover:bg-black/10 rounded-md px-2 py-1 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back
        </Link>
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {formattedDate && <p className="text-sm text-gray-500 mb-6">Last updated: {formattedDate}</p>}
        <FadeIn delay={50} direction="up">
          {data.cover && (
            <img 
              src={data.cover} 
              alt={data.title ?? ""} 
              className="rounded-md mb-4 mx-auto grayscale border border-gray-200" 
            />
          )}
          <article className="prose max-w-none dark:prose-invert">
            <div className="whitespace-pre-wrap">{content}</div>
          </article>
        </FadeIn>
      </div>
    </PageTransition>
  )
}