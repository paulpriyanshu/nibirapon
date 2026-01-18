"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary-foreground/80 font-serif text-sm tracking-widest uppercase mb-2">✦ Stay Updated ✦</p>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4">New Collections & Exclusive Offers</h2>
        <p className="font-serif text-primary-foreground/90 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for early access to new collections, styling tips, and special wholesale
          discounts.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-3 text-primary-foreground/50" size={20} />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans font-semibold"
          >
            {subscribed ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  )
}
