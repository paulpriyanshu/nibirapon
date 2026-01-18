"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<string[]>([])

  const products = [
    {
      id: "1",
      name: "Handwoven Banarasi Silk Saree",
      category: "Saree",
      price: 8999,
      wholesalePrice: 6500,
      minWholesale: 5,
      image: "/banarasi-silk-saree.jpg",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: "2",
      name: "Tussar Silk Saree with Gold Zari",
      category: "Saree",
      price: 6499,
      wholesalePrice: 4800,
      minWholesale: 5,
      image: "/tussar-silk-saree-gold.jpg",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: "3",
      name: "Embroidered Suit Piece Set",
      category: "Suit Piece",
      price: 4999,
      wholesalePrice: 3200,
      minWholesale: 3,
      image: "/embroidered-suit-salwar-kameez.jpg",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: "4",
      name: "Kanjivaram Silk Saree - Maroon",
      category: "Saree",
      price: 7999,
      wholesalePrice: 5800,
      minWholesale: 5,
      image: "/kanjivaram-silk-saree-maroon.jpg",
      rating: 4.9,
      reviews: 201,
    },
  ]

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-serif text-sm tracking-widest uppercase mb-2">✦ Featured ✦</p>
          <h2 className="text-4xl font-sans font-bold text-primary mb-4">Bestselling Collections</h2>
          <p className="text-foreground/70 font-serif max-w-2xl mx-auto">
            Discover our most-loved pieces, handpicked for their exceptional craftsmanship and timeless elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative bg-card rounded-lg border border-border overflow-hidden hover:border-secondary/50 transition-colors">
                {/* Image */}
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Heart size={18} className={wishlist.includes(product.id) ? "fill-current" : ""} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <p className="text-xs text-secondary uppercase tracking-widest font-sans font-semibold">
                    {product.category}
                  </p>

                  <h3 className="font-sans font-semibold text-foreground leading-tight line-clamp-2">{product.name}</h3>

                  {/* Ratings */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-sans font-bold">⭐ {product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Prices */}
                  <div className="space-y-2 pt-2 border-t border-border">
                    <p className="text-lg font-sans font-bold text-primary">₹{product.price.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground font-serif">
                      <span className="text-secondary font-semibold">Wholesale:</span> ₹
                      {product.wholesalePrice.toLocaleString()}
                      <br className="sm:hidden" /> (min {product.minWholesale} pcs)
                    </p>
                  </div>

                  {/* Button */}
                  <Link href={`/products/${product.id}`} className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ShoppingCart size={16} className="mr-2" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
