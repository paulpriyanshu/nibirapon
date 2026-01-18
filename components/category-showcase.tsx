"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CategoryShowcase() {
  const categories = [
    {
      name: "Sarees",
      description: "From classic silk to contemporary fusion",
      image: "/traditional-silk-saree.jpg",
      href: "/collections/sarees",
    },
    {
      name: "Suit Pieces",
      description: "Elegant ethnic suits and salwar kameez",
      image: "/punjabi-suit-piece.jpg",
      href: "/collections/suit-pieces",
    },
    {
      name: "Blouses & Dupattas",
      description: "Complementary pieces to complete your look",
      image: "/embroidered-blouse-dupatta.jpg",
      href: "/collections/blouses",
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-serif text-sm tracking-widest uppercase mb-2">✦ Collections ✦</p>
          <h2 className="text-4xl font-sans font-bold text-primary">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-secondary transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
                </div>

                <div className="p-6 bg-card">
                  <h3 className="font-sans font-bold text-xl text-primary mb-2">{category.name}</h3>
                  <p className="text-sm text-foreground/70 font-serif mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-secondary font-sans font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
