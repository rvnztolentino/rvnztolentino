import PageTransition from "@/components/page-transition"
import { ShoppingCart } from "lucide-react"
import FadeIn from "@/components/fade-in"

export default function Store() {
  const products = [
    {
      id: 1,
      name: "Minimalist Blazer",
      price: "$189",
      category: "Outerwear",
      buyLink: "#",
    },
    {
      id: 2,
      name: "Structured Shirt",
      price: "$95",
      category: "Tops",
      buyLink: "#",
    },
    {
      id: 3,
      name: "Tailored Trousers",
      price: "$120",
      category: "Bottoms",
      buyLink: "#",
    },
    {
      id: 4,
      name: "Oversized Coat",
      price: "$250",
      category: "Outerwear",
      buyLink: "#",
    },
    {
      id: 5,
      name: "Silk Scarf",
      price: "$75",
      category: "Accessories",
      buyLink: "#",
    },
    {
      id: 6,
      name: "Leather Tote",
      price: "$195",
      category: "Accessories",
      buyLink: "#",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 px-8 md:px-16 max-w-6xl mx-auto">
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
              <div className="h-48 bg-gray-100 relative">
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-400">Product Image</span>
                </div>

                {/* Hover Buy Button */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
