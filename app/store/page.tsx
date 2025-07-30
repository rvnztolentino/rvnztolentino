"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import PageTransition from "@/components/page-transition"
import { ShoppingCart, ArrowLeft } from "lucide-react"
import FadeIn from "@/components/fade-in"
import { CategoryCombobox } from "@/components/ui/category-combobox"

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

  // Extract unique categories
  const categories = ["All Products", ...Array.from(new Set(products.map(p => p.category)))]

  const [selectedCategory, setSelectedCategory] = useState("All Products")
  const [activeProduct, setActiveProduct] = useState<number | null>(null)
  const handleToggle = (id: number) => {
    if (activeProduct === id) {
      setActiveProduct(null)
    } else {
      setActiveProduct(id)
    }
  }

  // Filter products
  const filteredProducts = selectedCategory === "All Products"
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-4 px-8 md:px-16 max-w-6xl mx-auto">
        <Link href="/" className="text-black/50 flex items-center gap-2 hover:underline mb-6">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-4">Store</h1>
        <FadeIn delay={50} direction="up">
          <p className="text-black/60 mb-8">Showcasing my products, offerings, and digital creations.</p>
        </FadeIn>

        {/* Category Selector */}
        <FadeIn delay={75} direction="up">
          <div className="mb-8">

            {/* Mobile: shadcn/ui Combobox (shown on small screens only) */}
            <div className="block md:hidden">
              <CategoryCombobox
                options={categories.map(c => ({ label: c, value: c }))}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Select category"
                className="w-full max-w-xs"
              />
            </div>

            {/* Desktop: category buttons (hidden on small screens) */}
            <div className="hidden md:flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1 rounded-full border transition-colors
                    ${selectedCategory === category
                      ? "bg-black/90 text-white border-black"
                      : "bg-white text-black/90 border-gray-300 hover:bg-black/10"}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>
        </FadeIn>
        <FadeIn delay={100} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden group">
                {/* Product Image with Hover Button */}
                <div className="h-48 bg-gray-100 relative"
                  onClick={() => handleToggle(product.id)}>
                  <div className="flex items-center justify-center h-full">
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