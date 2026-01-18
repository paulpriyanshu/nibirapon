"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  category: string
  subCategory: string
}

export default function NewCollectionCarousel({
  collectionItems = [],
}: {
  collectionItems: Product[]
}) {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const total = collectionItems.length
  const thumbRef = useRef<HTMLDivElement>(null)

const scrollThumbnails = (direction: "left" | "right") => {
  if (!thumbRef.current) return
  const scrollAmount = 200
  thumbRef.current.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  })
}

  /* ---------------- AUTOPLAY ---------------- */

  useEffect(() => {
    if (!isAutoPlay || total === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, total])

  /* ---------------- NAVIGATION ---------------- */

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
    setIsAutoPlay(false)
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % total)
    setIsAutoPlay(false)
  }

  const handleSlideClick = (item: Product) => {
    router.push(
      `/shop?category=${item.category}&subCategory=${item.subCategory}`
    )
  }

  if (total === 0) return null

  /* ---------------- UI ---------------- */

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg bg-amber-50">
        {collectionItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleSlideClick(item)}
            className={`absolute inset-0 cursor-pointer transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={item.images[0]}
              alt={item.name}
              fill
              priority={index === 0}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                {item.name}
              </h3>
              <p className="text-lg text-amber-100 mb-2">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
              <p className="text-sm text-amber-200 capitalize">
                {item.category} • {item.subCategory}
              </p>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-amber-900" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-amber-900" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {collectionItems.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(index)
                setIsAutoPlay(false)
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
     {/* Thumbnails Carousel */}
<div className="relative mt-8">
  {/* Left Arrow */}
  <button
    onClick={() => scrollThumbnails("left")}
    className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
  >
    <ChevronLeft className="w-5 h-5 text-amber-900" />
  </button>

  {/* Thumbnails Track */}
  <div
    ref={thumbRef}
    className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-6"
  >
    {collectionItems.map((item, index) => (
      <button
        key={item.id}
        onClick={() => {
          setCurrentIndex(index)
          setIsAutoPlay(false)
        }}
        className={`relative shrink-0 w-32 h-24 rounded-lg overflow-hidden transition-all ${
          index === currentIndex
            ? "ring-2 ring-amber-800 scale-105"
            : "opacity-70 hover:opacity-100"
        }`}
      >
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          className="object-cover"
        />
      </button>
    ))}
  </div>

  {/* Right Arrow */}
  <button
    onClick={() => scrollThumbnails("right")}
    className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
  >
    <ChevronRight className="w-5 h-5 text-amber-900" />
  </button>
</div>
    </div>
  )
}