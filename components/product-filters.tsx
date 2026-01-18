"use client"

import { useMemo, useState } from "react"
import { ChevronDown } from "lucide-react"
import { allProducts } from "@/app/utils/products"

interface ProductFiltersProps {
  filters: {
    category: string
    subCategory: string
    priceRange: [number, number]
    color: string
  }
  setFilters: (filters: any) => void
}

export default function ProductFilters({
  filters,
  setFilters,
}: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState(["category", "price"])

  const categoryMap = useMemo(() => {
    const map: Record<string, string[]> = {}
  
    allProducts.forEach((product) => {
      if (!map[product.category]) {
        map[product.category] = []
      }
  
      if (!map[product.category].includes(product.subCategory)) {
        map[product.category].push(product.subCategory)
      }
    })
  
    return map
  }, [])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    )
  }

  return (
    <div className="space-y-4">
      {/* CATEGORY + SUBCATEGORY */}
      <div className="border rounded overflow-hidden">
        <button
          onClick={() => toggleSection("category")}
          className="w-full px-4 py-3 flex justify-between font-semibold"
        >
          Category
          <ChevronDown
            className={`transition ${
              expandedSections.includes("category") ? "rotate-180" : ""
            }`}
          />
        </button>

        {expandedSections.includes("category") && (
          <div className="px-4 py-4 bg-gray-50 space-y-4">
            {Object.entries(categoryMap).map(([category, subs]) => (
              <div key={category}>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={filters.category === category}
                    onChange={() =>
                      setFilters({
                        ...filters,
                        category:
                          filters.category === category ? "" : category,
                        subCategory: "",
                      })
                    }
                  />
                  <span className="capitalize">{category}</span>
                </label>

                {filters.category === category && (
                  <div className="ml-6 mt-2 space-y-2">
                    {subs.map((sub) => (
                      <label key={sub} className="flex items-center gap-3 text-sm">
                        <input
                          type="checkbox"
                          checked={filters.subCategory === sub}
                          onChange={() =>
                            setFilters({
                              ...filters,
                              subCategory:
                                filters.subCategory === sub ? "" : sub,
                            })
                          }
                        />
                        <span className="capitalize">{sub}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CLEAR */}
      {(filters.category || filters.subCategory) && (
        <button
          onClick={() =>
            setFilters({
              category: "",
              subCategory: "",
              priceRange: [0, 10000],
              color: "",
            })
          }
          className="w-full py-2 bg-gray-200 rounded"
        >
          Clear Filters
        </button>
      )}
    </div>
  )
}