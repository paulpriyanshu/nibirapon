"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fashion Enthusiast",
    content:
      "The quality of sarees is exceptional. Every piece feels premium and the customer service is outstanding!",
    rating: 5,
    image: "👩",
  },
  {
    name: "Anjali Verma",
    role: "Saree Collector",
    content:
      "I've been a customer for 2 years. The designs are unique and the prices are fair, especially for wholesale orders.",
    rating: 5,
    image: "👩",
  },
  {
    name: "Neha Patel",
    role: "Wedding Coordinator",
    content:
      "Perfect for my clients! The variety and quality of their collections never disappoint. Highly recommended!",
    rating: 5,
    image: "👩",
  },
  {
    name: "Deepa Gupta",
    role: "Business Owner",
    content:
      "As a wholesale buyer, I found their pricing and quality unbeatable. Fast delivery and excellent support!",
    rating: 5,
    image: "👩",
  },
]

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(3) // SSR-safe default

  /* ✅ Runs ONLY on client */
  useEffect(() => {
    const updateItems = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3)
    }

    updateItems()
    window.addEventListener("resize", updateItems)
    return () => window.removeEventListener("resize", updateItems)
  }, [])

  const getVisibleTestimonials = () => {
    return Array.from({ length: itemsToShow }, (_, i) =>
      testimonials[(currentIndex + i) % testimonials.length]
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-sans text-4xl md:text-5xl font-light text-amber-900 mb-2 text-center">
        What Our Customers Say
      </h2>
      <p className="text-center text-gray-600 font-serif mb-12">
        Trusted by thousands of happy customers
      </p>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition border border-amber-100"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="font-serif text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-sans font-semibold text-amber-900">
                    {testimonial.name}
                  </p>
                  <p className="font-serif text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="p-2 rounded-full border border-amber-800 text-amber-800 hover:bg-amber-50 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % testimonials.length)
            }
            className="p-2 rounded-full border border-amber-800 text-amber-800 hover:bg-amber-50 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}