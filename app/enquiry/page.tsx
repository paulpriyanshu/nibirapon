"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { allProducts } from "../utils/products"

const countries = [
  "India",
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "UAE",
  "Singapore",
  "Malaysia",
  "Other",
]

const indianCities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Other",
]

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "India",
    productCategory: "Sarees",
    product: "",
    quantity: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const selectedProducts = allProducts.find((p) => p.category === formData.productCategory)|| []

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Reset product selection when category changes
    if (name === "productCategory") {
      setFormData((prev) => ({ ...prev, product: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "India",
        productCategory: "Sarees",
        product: "",
        quantity: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="border-b border-gray-200 px-4 md:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-sans text-4xl font-light text-amber-900 mb-2">Product Enquiry</h1>
            <p className="font-serif text-gray-600">
              Get in touch with us for bulk orders, custom requests, or product information
            </p>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section className="px-4 md:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <h2 className="font-sans text-2xl font-semibold text-green-800 mb-4">Thank You!</h2>
                <p className="font-serif text-green-700 mb-4">
                  Your enquiry has been submitted successfully. Our team will get back to you within 24 hours.
                </p>
                <p className="font-serif text-green-600 text-sm">Check your email for confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                    />
                  </div>
                </div>

                {/* Phone & Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Street address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                    />
                  </div>
                </div>

                {/* City & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                    >
                      <option value="">Select a city</option>
                      {formData.country === "India" ? (
                        indianCities.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))
                      ) : (
                        <option value={formData.city}>{formData.city}</option>
                      )}
                    </select>
                  </div>
                </div>

                {/* Product Category & Product */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">
                    Quantity (Pieces) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="Number of pieces"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                  />
                </div>
                  <div>
                    <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">
                      Select Product <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                    >
                      <option value="">Choose a product</option>
                      {allProducts.map((p) => (
                        <option key={Math.random()} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Quantity */}
               

                {/* Message */}
                <div>
                  <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us more about your requirements, customization needs, or any other details..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <Button type="submit" className="bg-amber-800 hover:bg-amber-900 text-white font-sans px-8 py-3">
                    Send Enquiry
                  </Button>
                </div>

                <p className="font-serif text-xs text-gray-500 text-center">
                  <span className="text-red-500">*</span> Required fields
                </p>
              </form>
            )}
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="bg-amber-50 px-4 md:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans text-3xl font-light text-amber-900 mb-8">Need Immediate Assistance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-sans font-semibold text-amber-900 mb-2">Email</p>
                <a
                  href="mailto:nibiraponcollections@gmail.com"
                  className="font-serif text-amber-800 hover:text-amber-900"
                >
                  nibiraponcollections@gmail.com
                </a>
              </div>
              <div>
                <p className="font-sans font-semibold text-amber-900 mb-2">Phone</p>
                <a href="tel:+918920666949" className="font-serif text-amber-800 hover:text-amber-900">
                  +91 8920666949
                </a>
              </div>
            </div>
            <p className="font-serif text-gray-600 mt-6 text-sm">Monday - Saturday | 10:30 AM - 8:00 PM IST</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
