"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus, Package, Truck, Shield } from "lucide-react"
import Link from "next/link"

interface CartItem {
  id: string
  name: string
  image: string
  price: number
  quantity: number
  color: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Handwoven Banarasi Silk Saree",
      image: "/banarasi-silk-saree.jpg",
      price: 8999,
      quantity: 1,
      color: "Maroon",
    },
    {
      id: "3",
      name: "Embroidered Suit Piece Set",
      image: "/embroidered-suit-salwar-kameez.jpg",
      price: 4999,
      quantity: 2,
      color: "Purple",
    },
  ])

  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 100
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + tax + shipping - discount

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "WELCOME15") {
      setDiscount(Math.round(subtotal * 0.15))
    } else if (coupon.toUpperCase() === "BULK20") {
      setDiscount(Math.round(subtotal * 0.2))
    } else {
      alert("Invalid coupon code")
    }
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
          <span className="text-foreground">Cart</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-sans font-bold text-primary mb-8">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-card border border-border rounded-lg p-6 flex gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0 w-32 h-32 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-sans font-semibold text-foreground mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground font-serif mb-3">Color: {item.color}</p>
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-sans font-bold text-primary">₹{item.price.toLocaleString()}</p>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-foreground hover:bg-muted transition"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-1 font-sans font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-foreground hover:bg-muted transition"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-foreground hover:bg-red-100 hover:text-red-600 transition rounded-lg"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="flex-shrink-0 text-right">
                    <p className="text-sm text-muted-foreground font-serif mb-1">Subtotal</p>
                    <p className="text-2xl font-sans font-bold text-primary">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-muted/50 border border-border rounded-lg p-6 h-fit space-y-6">
              <h2 className="text-xl font-sans font-bold text-primary">Order Summary</h2>

              {/* Coupon Code */}
              <div className="space-y-2">
                <label className="text-sm font-sans font-semibold text-foreground">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                    className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground font-serif focus:outline-none focus:border-secondary"
                  />
                  <Button
                    onClick={applyCoupon}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans"
                  >
                    Apply
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground font-serif">Try: WELCOME15 or BULK20</p>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 py-4 border-t border-b border-border">
                <div className="flex justify-between font-serif">
                  <span className="text-foreground/70">Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between font-serif text-green-600">
                    <span>Discount</span>
                    <span className="font-semibold">−₹{discount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between font-serif">
                  <span className="text-foreground/70">Tax (18%)</span>
                  <span className="font-semibold">₹{tax.toLocaleString()}</span>
                </div>

                <div className="flex justify-between font-serif">
                  <span className="text-foreground/70">Shipping</span>
                  <span className="font-semibold">{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>

                {shipping === 0 && <p className="text-xs text-green-600 font-serif">Free shipping applied</p>}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <p className="font-sans font-semibold text-foreground">Total</p>
                <p className="text-3xl font-sans font-bold text-primary">₹{total.toLocaleString()}</p>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base">
                  Proceed to Checkout
                </Button>
              </Link>

              <button className="w-full py-2 text-secondary hover:underline font-serif text-sm">
                Continue Shopping
              </button>

              {/* Trust Badges */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex gap-2 text-xs font-serif text-muted-foreground">
                  <Shield size={16} className="flex-shrink-0 text-secondary" />
                  <span>Secure payments with SSL encryption</span>
                </div>
                <div className="flex gap-2 text-xs font-serif text-muted-foreground">
                  <Truck size={16} className="flex-shrink-0 text-secondary" />
                  <span>Fast shipping across India</span>
                </div>
                <div className="flex gap-2 text-xs font-serif text-muted-foreground">
                  <Package size={16} className="flex-shrink-0 text-secondary" />
                  <span>30-day hassle-free returns</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-sans font-bold text-foreground mb-4">Your cart is empty</p>
            <p className="text-foreground/70 font-serif mb-8">
              Start shopping and add some beautiful pieces to your cart
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
