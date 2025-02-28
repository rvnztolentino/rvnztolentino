import Link from "next/link"

function BlogCard({ post }) {
  return (
    <Link href={post.href}>
      <div
        className="group relative aspect-square w-full max-w-xs rounded-xl bg-cover bg-center outline-2 outline-offset-2 hover:outline hover:outline-gray-200"
        style={{ backgroundImage: `url(${post.imageUrl})` }}
      >
        <div className="absolute bottom-0 w-full bg-white p-4 rounded-b-xl backdrop-blur-sm transition-colors group-hover:bg-light-gray-2">
          <p className="text-md font-medium text-dark-gray">{post.title}</p>
          <p className="text-sm text-light-gray pt-2">{post.date}</p>
        </div>
      </div>
    </Link>
  )
}

// Blog data
const blogPosts = [
  {
    title: "How I track and achieve my goals in 2025 (apps I use, journal setups)",
    date: "November 29, 2024",
    imageUrl: "/jdm.jpg",
    href: "/blog/goals-2025",
  },
  {
    title: "My favorite productivity tools for developers",
    date: "November 25, 2024",
    imageUrl: "/sprite-zero-ad-sample.jpg",
    href: "/blog/productivity-tools",
  },
  {
    title: "Building a consistent writing habit",
    date: "November 20, 2024",
    imageUrl: "/sprite-zero-ad-sample.jpg",
    href: "/blog/writing-habit",
  },
]

export default function BlogContainer() {
  return (
    <div className="flex flex-row flex-nowrap gap-6 overflow-x-auto pb-4">
      {blogPosts.map((post) => (
        <BlogCard key={post.href} post={post} />
      ))}
    </div>
  )
}

