import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Sarees",
      description: "Traditional and contemporary sarees",
      image: "/pink-saree.jpg",
    },
    {
      name: "Suit Pieces",
      description: "Elegant salwar kameez collections",
      image: "/teal-suit.jpg",
    },
    {
      name: "Blouses",
      description: "Designer blouses and embroidery",
      image: "/white-saree.jpg",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-sans text-4xl md:text-5xl font-light text-amber-900 mb-2 text-center">Featured Categories</h2>
      <p className="text-center text-gray-600 font-serif mb-12">Explore our most popular collections</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg h-80">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="font-sans text-3xl font-light text-white mb-2">{category.name}</h3>
              <p className="font-serif text-amber-100 mb-4">{category.description}</p>
              <Link href="/retail">
                <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">Explore</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
