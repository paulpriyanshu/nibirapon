"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WholesalePage() {
  const pricingTiers = [
    {
      quantity: "5-9 pieces",
      discount: "15%",
      sareePrice: 1650,
      suitPrice: 2550,
    },
    {
      quantity: "10-24 pieces",
      discount: "25%",
      sareePrice: 1462,
      suitPrice: 2250,
    },
    {
      quantity: "25-49 pieces",
      discount: "35%",
      sareePrice: 1267,
      suitPrice: 1950,
    },
    {
      quantity: "50+ pieces",
      discount: "40%",
      sareePrice: 1170,
      suitPrice: 1800,
    },
  ]

  const benefits = [
    {
      icon: "✦",
      title: "Bulk Discounts",
      description: "Up to 40% off on larger orders",
    },
    {
      icon: "✦",
      title: "Mix & Match",
      description: "Combine different designs and colors freely",
    },
    {
      icon: "✦",
      title: "Quick Dispatch",
      description: "24-hour processing for wholesale orders",
    },
    {
      icon: "✦",
      title: "Custom Orders",
      description: "Special collections for bulk requests",
    },
    {
      icon: "✦",
      title: "Dedicated Support",
      description: "Personal account manager for your needs",
    },
    {
      icon: "✦",
      title: "Quality Assured",
      description: "Same premium standards as retail",
    },
  ]

  const sareeCategories = [
    { name: "Pure Silk", desc: "Luxurious and elegant" },
    { name: "Tussar Silk", desc: "Rich texture and natural sheen" },
    { name: "Pure Organza", desc: "Crisp and lightweight" },
    { name: "Kota Tussar", desc: "Traditional artisan weave" },
    { name: "Pure Chiffon", desc: "Soft and draping fabric" },
    { name: "Tissue Silk", desc: "Delicate premium quality" },
    { name: "Jamdani Cotton", desc: "Handwoven artistry" },
    { name: "Pure Dupion", desc: "Textured and elegant" },
  ]

  const suitCategories = [
    { name: "Pure Organza Suits", desc: "Crisp and elegant unstitched" },
    { name: "Pure Tussar Suits", desc: "Rich silk texture" },
    { name: "Kota Tussar Suits", desc: "Traditional weave unstitched" },
    { name: "Tussar Ajrakh", desc: "Block printed artisan" },
    { name: "Organza Peeta", desc: "Embroidered details" },
    { name: "Chikankari Suits", desc: "Fine embroidery work" },
    { name: "Tussar Peeta", desc: "Dyed and woven" },
    { name: "Silk Blend Suits", desc: "Mixed fiber elegance" },
  ]

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="border-b border-gray-200 px-4 md:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-sans text-4xl font-light text-amber-900 mb-2">Wholesale Program</h1>
            <p className="font-serif text-gray-600">
              Premium sarees and suits direct from manufacturer for boutiques, shops, and resellers
            </p>
          </div>
        </section>

        {/* Why Wholesale */}
        <section className="bg-amber-50 px-4 md:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans text-3xl font-light text-amber-900 mb-4">Why Choose Nibirapon Wholesale?</h2>
            <p className="font-serif text-gray-700 leading-relaxed">
              With over 15 years of experience manufacturing premium sarees and suit pieces, we provide boutique owners
              and retailers with authentic, high-quality products at competitive wholesale rates. Partner with us to
              elevate your collection and delight your customers.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl text-amber-800 mb-4">{benefit.icon}</div>
                <h3 className="font-sans font-semibold text-amber-900 mb-2">{benefit.title}</h3>
                <p className="font-serif text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fabric Collections */}
        <section className="bg-amber-50 px-4 md:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-sans text-3xl font-light text-amber-900 mb-12 text-center">Our Saree Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sareeCategories.map((category, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-sans text-lg font-semibold text-amber-900 mb-2">{category.name}</h3>
                  <p className="font-serif text-sm text-gray-600">{category.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suit Collections */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h2 className="font-sans text-3xl font-light text-amber-900 mb-12 text-center">
            Unstitched Suit Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suitCategories.map((category, i) => (
              <div key={i} className="bg-amber-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-sans text-lg font-semibold text-amber-900 mb-2">{category.name}</h3>
                <p className="font-serif text-sm text-gray-600">{category.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section id="pricing" className="bg-amber-50 border-y border-gray-200 px-4 md:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-sans text-3xl font-light text-amber-900 mb-12 text-center">Pricing by Volume</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded p-6 hover:shadow-md transition">
                  <p className="font-sans text-sm text-amber-800 font-semibold mb-2">{tier.quantity}</p>
                  <p className="font-sans text-3xl font-light text-amber-900 mb-6">{tier.discount} Off</p>

                  <div className="space-y-4 border-t border-gray-200 pt-4">
                    <div>
                      <p className="font-sans text-xs text-gray-600 uppercase tracking-wider mb-1">Per Saree</p>
                      <p className="font-sans text-lg font-semibold text-amber-900">₹{tier.sareePrice}</p>
                    </div>
                    <div>
                      <p className="font-sans text-xs text-gray-600 uppercase tracking-wider mb-1">Per Suit Piece</p>
                      <p className="font-sans text-lg font-semibold text-amber-900">₹{tier.suitPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h2 className="font-sans text-3xl font-light text-amber-900 mb-12 text-center">How to Order</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", desc: "Reach out for catalog" },
              { step: "2", title: "Browse", desc: "Explore collections" },
              { step: "3", title: "Order", desc: "Minimum 5 pieces" },
              { step: "4", title: "Receive", desc: "Fast 24-hour dispatch" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center text-lg font-sans font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-sans font-semibold text-amber-900 mb-2">{item.title}</h3>
                <p className="font-serif text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-amber-50 px-4 md:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans text-3xl font-light text-amber-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the minimum order quantity?",
                  a: "The minimum order is 5 pieces. You can mix and match designs, colors, and categories as per your preference.",
                },
                {
                  q: "Can we customize designs for our boutique?",
                  a: "Yes, we offer custom design services for bulk orders. Please contact our team to discuss your requirements.",
                },
                {
                  q: "What is the delivery time for wholesale orders?",
                  a: "We dispatch orders within 24 hours of confirmation. Delivery takes 3-7 days depending on your location.",
                },
                {
                  q: "Do you provide video consultations?",
                  a: "Yes, we offer personalized video call facility to help you select the best pieces for your customers.",
                },
                {
                  q: "Are wholesale prices negotiable for very large orders?",
                  a: "We offer competitive pricing based on order volume. Contact us directly for special rates on bulk orders.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg">
                  <h3 className="font-sans font-semibold text-amber-900 mb-3">{item.q}</h3>
                  <p className="font-serif text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h2 className="font-sans text-3xl font-light text-amber-900 mb-12 text-center">Browse Our Products</h2>
          <div className="text-center mb-12">
            <p className="font-serif text-gray-700 mb-8">
              Explore our complete catalog of premium sarees and unstitched suits available for wholesale purchase
            </p>
            <Link href="/retail">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white font-sans px-8 py-3">
                View All Products
              </Button>
            </Link>
          </div>
        </section>

        {/* Enquiry Section */}
        <section className="bg-amber-50 px-4 md:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans text-3xl font-light text-amber-900 mb-12 text-center">Make an Enquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">Business Name</label>
                  <input
                    type="text"
                    placeholder="Your boutique/store name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-sm font-semibold text-amber-900 mb-2">Enquiry Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements, product interests, and order quantity..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800 font-serif"
                ></textarea>
              </div>
              <div className="text-center">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white font-sans px-8 py-3">Send Enquiry</Button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-amber-900 text-white px-4 md:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans text-3xl font-light mb-4">Ready to Partner?</h2>
            <p className="font-serif mb-8 text-amber-50">
              Get in touch with our wholesale team for bulk orders, custom requests, and exclusive partnerships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="mailto:nibiraponcollections@gmail.com">
                <Button className="bg-white text-amber-900 hover:bg-gray-100 font-sans">Email Us</Button>
              </a>
              <a href="tel:+918920666949">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-amber-800 font-sans bg-transparent"
                >
                  Call Us
                </Button>
              </a>
            </div>
            <div className="border-t border-amber-800 pt-6">
              <p className="font-serif text-amber-100 mb-2">nibiraponcollections@gmail.com</p>
              <p className="font-serif text-amber-100">+91 8920666949</p>
              <p className="font-serif text-amber-100 text-sm mt-2">Monday - Saturday | 10:30 AM - 8:00 PM IST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
