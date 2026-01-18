import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-b from-muted to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-secondary font-serif text-sm tracking-widest uppercase">✦ Celebrating Heritage ✦</p>
              <h1 className="text-5xl md:text-6xl font-sans font-bold text-primary leading-tight">Curated with Care</h1>
              <p className="text-xl text-foreground/80 font-serif leading-relaxed">
                Discover the beauty of Indian traditions through meticulously selected sarees and suit pieces that tell
                stories of craftsmanship and elegance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Explore Collections
                </Button>
              </Link>
              <Link href="/wholesale">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 w-full sm:w-auto bg-transparent"
                >
                  Wholesale Pricing
                </Button>
              </Link>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-2xl font-sans font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground font-serif">Premium Collections</p>
              </div>
              <div>
                <p className="text-2xl font-sans font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground font-serif">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-sans font-bold text-primary">Pan India</p>
                <p className="text-sm text-muted-foreground font-serif">Shipping Available</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl"></div>
            <div className="absolute inset-8 bg-muted rounded-3xl flex items-center justify-center">
              <img
                src="/elegant-saree-display.jpg"
                alt="Featured saree collection"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
