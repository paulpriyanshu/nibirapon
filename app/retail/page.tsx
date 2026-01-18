"use client"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductFilters from "@/components/product-filters"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Karvaah Rose Pink Cotton Jamdani Saree",
    price: 1949,
    image: "/pink-saree.jpg",
    category: "sarees",
    color: "Pink",
    rating: 4.5,
    reviews: 7,
  },
  {
    id: 2,
    name: "Karvaah White Cotton Jamdani Saree",
    price: 1949,
    image: "/white-saree.jpg",
    category: "sarees",
    color: "White",
    rating: 4.6,
    reviews: 8,
  },
  {
    id: 3,
    name: "Petals & Weaves Teal Viscose Stitched Suit Set",
    price: 2999,
    image: "/teal-suit.jpg",
    category: "suits",
    color: "Teal",
    rating: 4.4,
    reviews: 12,
  },
  {
    id: 4,
    name: "Ruhani Simply Off-White Cotton Jamdani Saree",
    price: 1999,
    image: "/offwhite-saree.jpg",
    category: "sarees",
    color: "Off-White",
    rating: 4.5,
    reviews: 5,
  },
  {
    id: 5,
    name: "Nandika Wine Muga Cotton Pichwai Saree",
    price: 2299,
    image: "/wine-saree.jpg",
    category: "sarees",
    color: "Wine",
    rating: 4.3,
    reviews: 3,
  },
  {
    id: 6,
    name: "Indu Beige & Pink Muga Cotton Saree",
    price: 2499,
    image: "/beige-pink-saree.jpg",
    category: "sarees",
    color: "Beige & Pink",
    rating: 4.7,
    reviews: 9,
  },
  {
    id: 7,
    name: "Takshila Blue Muga Cotton Saree",
    price: 2499,
    image: "/blue-saree.jpg",
    category: "sarees",
    color: "Blue",
    rating: 4.4,
    reviews: 6,
  },
  {
    id: 8,
    name: "Petals & Weaves Beige Viscose Stitched Suit",
    price: 2999,
    image: "/beige-suit.jpg",
    category: "suits",
    color: "Beige",
    rating: 4.5,
    reviews: 8,
  },
]

export default function RetailShop() {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 5000],
    color: "",
  })
  const [sort, setSort] = useState("featured")

  const filteredProducts = SAMPLE_PRODUCTS.filter((p) => {
    if (filters.category && p.category !== filters.category) return false
    if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) return false
    if (filters.color && p.color !== filters.color) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-low") return a.price - b.price
    if (sort === "price-high") return b.price - a.price
    if (sort === "rating") return b.rating - a.rating
    return 0
  })

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="border-b border-gray-200 px-4 md:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-sans text-4xl font-light text-amber-900 mb-2">Shop</h1>
            <p className="font-serif text-gray-600">Discover our curated collection of sarees and suit pieces</p>
          </div>
        </section>

        {/* Shop Section */}
        <div className="flex gap-8 max-w-7xl mx-auto px-4 md:px-8 py-12">
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <ProductFilters filters={filters} setFilters={setFilters} />
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="mb-6 flex justify-between items-center border-b border-gray-200 pb-4">
              <p className="font-serif text-gray-600">Showing {sortedProducts.length} products</p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="font-serif border border-gray-200 rounded px-3 py-2 bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative bg-gray-100 aspect-[3/4] mb-4 overflow-hidden rounded">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-sans font-medium text-amber-900">{product.name}</p>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-serif text-lg font-semibold text-amber-900">₹{product.price}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-amber-800">★ {product.rating}</span>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-amber-800 hover:bg-amber-900 text-white font-sans">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="font-serif text-gray-600 mb-4">Browse our full sarees collection</p>
              <Link href="/collections/sarees">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white font-sans">View All Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
