"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import { ChevronDown } from "lucide-react"
import { allProducts } from "@/app/utils/products"

export default function ShopClient() {
  const searchParams = useSearchParams()

  const normalize = (value: string | null) =>
    value ? value.toLowerCase().replace(/\s+/g, "-") : ""

  const rawCategory = searchParams.get("category")
  const rawSubCategory = searchParams.get("subCategory")

  const [filters, setFilters] = useState({
    category: "",
    subCategory: "",
    priceRange: [0, 10000] as [number, number],
    color: "",
  })

  const [sortBy, setSortBy] = useState("featured")

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: normalize(rawCategory),
      subCategory: normalize(rawSubCategory),
    }))
  }, [rawCategory, rawSubCategory])

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      return (
        (!filters.category || product.category === filters.category) &&
        (!filters.subCategory || product.subCategory === filters.subCategory) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1] &&
        (!filters.color || product.color === filters.color)
      )
    })

    if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price)
    if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price)
    if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating)

    return filtered
  }, [filters, sortBy])

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Shop
          {filters.category && ` / ${filters.category}`}
          {filters.subCategory && ` / ${filters.subCategory}`}
        </h1>

        <div className="relative w-48">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full border px-3 py-2 rounded appearance-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ProductFilters filters={filters} setFilters={setFilters} />
        </aside>

        <div className="lg:col-span-3">
          {filteredProducts.length ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </>
  )
}