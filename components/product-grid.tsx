"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"


interface Product {
  id: string
  name: string
  price: number
  wholesalePrice: number
  minWholesale: number
  images:string[] 
  rating: number
  reviews: number
  category: string
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [wishlist, setWishlist] = useState<string[]>([])

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative bg-card rounded-lg border border-border overflow-hidden hover:border-secondary/50 transition-colors">
            {/* Image */}
            <div className="relative h-64 bg-muted overflow-hidden">
            <Image
                src={product.images?.[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
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
  )
}
