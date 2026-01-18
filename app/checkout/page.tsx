"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

type CheckoutStep = "shipping" | "payment" | "confirmation"

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("shipping")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("confirmation")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-border">
        <div className="flex items-center gap-2 text-sm font-serif">
          <Link href="/" className="text-secondary hover:underline">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/cart" className="text-secondary hover:underline">
            Cart
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">Checkout</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="flex gap-4 mb-12">
          <div className="flex-1">
            <div
              className={`p-4 rounded-lg border-2 transition ${currentStep === "shipping" || currentStep === "payment" || currentStep === "confirmation" ? "border-primary bg-primary/5" : "border-border"}`}
            >
              <p className="text-sm font-sans font-semibold text-primary">1. Shipping Details</p>
            </div>
          </div>
          <div className="flex-1">
            <div
              className={`p-4 rounded-lg border-2 transition ${currentStep === "payment" || currentStep === "confirmation" ? "border-primary bg-primary/5" : "border-border"}`}
            >
              <p className="text-sm font-sans font-semibold text-primary">2. Payment</p>
            </div>
          </div>
          <div className="flex-1">
            <div
              className={`p-4 rounded-lg border-2 transition ${currentStep === "confirmation" ? "border-primary bg-primary/5" : "border-border"}`}
            >
              <p className="text-sm font-sans font-semibold text-primary">3. Confirmation</p>
            </div>
          </div>
        </div>

        {currentStep === "shipping" && (
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-sans font-bold text-primary mb-6">Shipping Address</h2>
            <form onSubmit={handleShippingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                />
              </div>

              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <Link href="/cart" className="flex-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-muted bg-transparent"
                  >
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Cart
                  </Button>
                </Link>
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Continue to Payment
                </Button>
              </div>
            </form>
          </div>
        )}

        {currentStep === "payment" && (
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-sans font-bold text-primary mb-6">Payment Details</h2>
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <input
                type="text"
                name="cardName"
                placeholder="Cardholder Name"
                value={formData.cardName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
              />

              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                maxLength={16}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
              />

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  maxLength={3}
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                />
              </div>

              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground font-serif mb-2">This is a demo checkout page.</p>
                <p className="text-sm text-muted-foreground font-serif">Use any test card details to proceed.</p>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep("shipping")}
                  className="flex-1 py-3 px-4 border-2 border-border text-foreground hover:bg-muted rounded-lg transition font-sans font-semibold"
                >
                  <ArrowLeft size={18} className="inline mr-2" />
                  Back
                </button>
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Complete Order
                </Button>
              </div>
            </form>
          </div>
        )}

        {currentStep === "confirmation" && (
          <div className="bg-card border border-border rounded-lg p-8 text-center space-y-8">
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>

            <div>
              <h2 className="text-3xl font-sans font-bold text-primary mb-2">Order Confirmed!</h2>
              <p className="text-lg text-foreground/70 font-serif mb-4">
                Thank you for your purchase. Your order has been received.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3 text-left">
              <div className="flex justify-between">
                <p className="text-foreground/70 font-serif">Order ID:</p>
                <p className="font-sans font-semibold text-primary">#NIBIRAPON-20260101-1234</p>
              </div>
              <div className="flex justify-between">
                <p className="text-foreground/70 font-serif">Email Confirmation:</p>
                <p className="font-sans font-semibold text-foreground">{formData.email || "your@email.com"}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-foreground/70 font-serif">Estimated Delivery:</p>
                <p className="font-sans font-semibold text-foreground">5-7 business days</p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-foreground/70 font-serif text-sm">
                You'll receive a shipping notification email once your order is dispatched.
              </p>
              <p className="text-foreground/70 font-serif text-sm">
                For any inquiries, contact us at support@nibirapon.com
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/shop" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Back to Home</Button>
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
