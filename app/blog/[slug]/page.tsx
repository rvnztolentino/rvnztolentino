import Link from "next/link"
import { notFound } from "next/navigation"
import PageTransition from "@/components/page-transition"

// This would typically come from a database or CMS
const posts = [
  {
    id: 1,
    title: "The Evolution of Sustainable Fashion",
    date: "June 15, 2023",
    content: `
      <p>The fashion industry has long been associated with excess, waste, and environmental degradation. However, in recent years, there has been a significant shift towards sustainability. This evolution is not just a passing trend but a necessary transformation for the industry's future.</p>
      
      <h2>The Environmental Impact</h2>
      <p>Traditional fashion production methods consume vast amounts of water, energy, and raw materials. The industry is responsible for approximately 10% of global carbon emissions and is the second-largest consumer of water. Fast fashion, characterized by rapid production cycles and low-quality garments, has exacerbated these issues.</p>
      
      <h2>Consumer Awareness</h2>
      <p>Today's consumers are more informed and conscious about their purchasing decisions. They demand transparency from brands regarding their supply chains, manufacturing processes, and environmental footprints. This shift in consumer behavior has pushed fashion companies to adopt more sustainable practices.</p>
      
      <h2>Innovative Solutions</h2>
      <p>Designers and brands are exploring innovative materials and production methods to reduce their environmental impact. From recycled fabrics to biodegradable materials, the industry is embracing alternatives that minimize waste and pollution. Additionally, circular fashion models, which emphasize reuse and recycling, are gaining traction.</p>
      
      <h2>The Future of Sustainable Fashion</h2>
      <p>The journey towards a fully sustainable fashion industry is ongoing. While progress has been made, there is still much work to be done. Collaboration between brands, consumers, and policymakers is essential to drive meaningful change. By supporting sustainable brands and making conscious choices, consumers can play a crucial role in shaping the future of fashion.</p>
    `,
    slug: "evolution-of-sustainable-fashion",
  },
  {
    id: 2,
    title: "Fashion Week Highlights: New York 2023",
    date: "May 28, 2023",
    content: `
      <p>New York Fashion Week 2023 was a celebration of creativity, innovation, and diversity. The event showcased the latest collections from established designers and emerging talents, setting the tone for the upcoming fashion season.</p>
      
      <h2>Emerging Trends</h2>
      <p>Several key trends emerged during the week. Bold colors, oversized silhouettes, and statement accessories dominated the runways. Designers also embraced sustainable materials and ethical production methods, reflecting the industry's growing commitment to environmental responsibility.</p>
      
      <h2>Standout Collections</h2>
      <p>Among the standout collections was Designer X's exploration of modern minimalism. Their use of clean lines, neutral tones, and sustainable fabrics resonated with the audience. Designer Y's vibrant, pattern-rich collection was another highlight, blending cultural influences with contemporary design.</p>
      
      <h2>Diversity and Inclusion</h2>
      <p>This year's Fashion Week made significant strides in diversity and inclusion. Models of various backgrounds, body types, and ages graced the runways, challenging traditional beauty standards. Designers also showcased collections that catered to a broader range of consumers.</p>
      
      <h2>Digital Innovation</h2>
      <p>Technology played a crucial role in this year's event. Virtual reality experiences, digital showrooms, and live-streamed shows made Fashion Week more accessible to a global audience. These innovations not only expanded the event's reach but also reduced its environmental footprint.</p>
    `,
    slug: "fashion-week-highlights-new-york-2023",
  },
  {
    id: 3,
    title: "The Art of Minimalism in Modern Wardrobes",
    date: "April 10, 2023",
    content: `
      <p>Minimalism in fashion is more than just a style; it's a philosophy that emphasizes quality over quantity, simplicity over excess, and intentionality over impulse. In today's fast-paced world, adopting a minimalist approach to your wardrobe can bring clarity, reduce waste, and enhance your personal style.</p>
      
      <h2>The Capsule Wardrobe</h2>
      <p>A capsule wardrobe consists of a limited number of versatile, high-quality pieces that can be mixed and matched to create various outfits. This concept, popularized in the 1970s, has gained renewed interest as consumers seek to simplify their lives and reduce their environmental impact.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>Investing in well-made, durable garments is a cornerstone of minimalist fashion. While these pieces may have a higher upfront cost, their longevity and versatility make them more economical in the long run. Additionally, high-quality items often have a timeless appeal that transcends seasonal trends.</p>
      
      <h2>Sustainable Benefits</h2>
      <p>By purchasing fewer, better-quality items, minimalist fashion enthusiasts contribute to reducing the fashion industry's environmental footprint. This approach counters the fast fashion model, which encourages frequent purchases and rapid disposal of clothing.</p>
      
      <h2>Finding Your Personal Style</h2>
      <p>Embracing minimalism doesn't mean sacrificing personal expression. Instead, it encourages a deeper understanding of your preferences and lifestyle needs. By curating a wardrobe that truly reflects who you are, you can achieve a more authentic and confident style.</p>
    `,
    slug: "art-of-minimalism-in-modern-wardrobes",
  },
];

type BlogPostProps = {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 px-8 md:px-16 max-w-3xl mx-auto">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-black mb-8 inline-block">
          ← Back to all posts
        </Link>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </PageTransition>
  )
}
