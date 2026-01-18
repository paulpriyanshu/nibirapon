import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package, TrendingUp, Users } from "lucide-react"

export default function WholesalePromo() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-secondary font-serif text-sm tracking-widest uppercase mb-2">✦ B2B Solutions ✦</p>
              <h2 className="text-4xl font-sans font-bold text-primary mb-4">Wholesale at Scale</h2>
              <p className="text-foreground/80 font-serif text-lg leading-relaxed">
                Special pricing for bulk orders. Whether you're a retailer, boutique owner, or event organizer, our
                wholesale program offers exceptional value with premium quality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Package className="text-secondary w-6 h-6 mt-1" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-primary mb-1">Bulk Discounts</h3>
                  <p className="text-sm text-foreground/70 font-serif">Up to 40% off on orders of 10+ pieces</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <TrendingUp className="text-secondary w-6 h-6 mt-1" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-primary mb-1">Custom Orders</h3>
                  <p className="text-sm text-foreground/70 font-serif">Mix and match collections for your store</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="text-secondary w-6 h-6 mt-1" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-primary mb-1">Dedicated Support</h3>
                  <p className="text-sm text-foreground/70 font-serif">Personal account manager for your needs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="text-secondary w-6 h-6 mt-1 font-sans font-bold">✓</div>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-primary mb-1">Fast Shipping</h3>
                  <p className="text-sm text-foreground/70 font-serif">Nationwide delivery with tracking</p>
                </div>
              </div>
            </div>

            <Link href="/wholesale">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Wholesale Pricing
              </Button>
            </Link>
          </div>

          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-bl from-secondary/30 to-accent/20 rounded-2xl"></div>
            <div className="absolute inset-6 bg-muted rounded-2xl flex items-center justify-center border border-border">
              <img
                src="/retail-store-with-sarees-display.jpg"
                alt="Wholesale operations"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
