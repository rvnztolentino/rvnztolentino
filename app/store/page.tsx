"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import PageTransition from "@/components/page-transition"
import { ShoppingCart, ArrowLeft } from "lucide-react"
import FadeIn from "@/components/fade-in"

export default function Store() {
  const products = [
    {
      id: 1,
      name: "Student Life Dashboard",
      price: "FREE",
      category: "Notion Template",
      buyLink: "#",
    },
    {
      id: 2,
      name: "私のマンファ & マンガライブラリ",
      price: "$2.99",
      category: "Notion Template",
      buyLink: "#",
    },
  ]

  const [activeProduct, setActiveProduct] = useState<number | null>(null)
  const handleToggle = (id: number) => {
    if (activeProduct === id) {
      setActiveProduct(null) // close if same card tapped again
    } else {
      setActiveProduct(id)
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-4 px-8 md:px-16 max-w-6xl mx-auto">
        <Link href="/" className="text-black/50 flex items-center gap-2 hover:underline mb-6">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Store</h1>
        <div className="w-8 h-1 bg-black mb-6"></div>
        <FadeIn delay={50} direction="up">
          <p className="text-gray-600 mb-8">Showcasing my products, offerings, and digital creations.</p>
        </FadeIn>

        <FadeIn delay={100} direction="up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden group">
              {/* Product Image with Hover Button */}
              <div className="h-48 bg-gray-100 relative"
              onClick={() => handleToggle(product.id)}>
                <div className="flex items-center justify-center h-full">
                  {/* <span className="text-gray-400">Product Image</span> */}
                  <Image
                    src={`/store/product_${product.id}.jpg`}
                    alt={product.name}
                    width={432}
                    height={432}
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Hover Buy Button */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${activeProduct === product.id ? 'opacity-100' : 'opacity-0'} 
                    md:opacity-0 md:group-hover:opacity-100`}
                >
                  <a
                    href={product.buyLink}
                    className="px-4 py-2 bg-white text-black rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Buy Now
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.category}</p>
                <p className="text-lg font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        </FadeIn>
      </div>
    </PageTransition>
  )
}
