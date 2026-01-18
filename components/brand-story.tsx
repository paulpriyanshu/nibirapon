import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl"></div>
            <div className="absolute inset-8 bg-card rounded-2xl flex items-center justify-center border border-border">
              <img
                src="/traditional-indian-weaving-artisan.jpg"
                alt="Artisan craftsmanship"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-secondary font-serif text-sm tracking-widest uppercase mb-2">✦ Our Heritage ✦</p>
              <h2 className="text-4xl font-sans font-bold text-primary mb-4">Nibirapon: A Deep Selection</h2>
              <p className="text-base text-foreground/70 font-serif leading-relaxed mb-4">
                In Bengali, Nibirapon (নিবিড় পছন্দ) means <span className="italic">"a deep, thoughtful choice"</span> –
                and that's at the heart of everything we do.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-secondary rounded-full"></div>
                <div>
                  <h3 className="font-sans font-semibold text-primary mb-2">Artisan Partnerships</h3>
                  <p className="text-sm text-foreground/70 font-serif">
                    We work directly with master weavers and artisans across India, preserving traditional techniques
                    passed down through generations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-secondary rounded-full"></div>
                <div>
                  <h3 className="font-sans font-semibold text-primary mb-2">Quality First</h3>
                  <p className="text-sm text-foreground/70 font-serif">
                    Every piece is hand-selected and inspected to ensure it meets our exacting standards for fabric,
                    weave, and craftsmanship.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-secondary rounded-full"></div>
                <div>
                  <h3 className="font-sans font-semibold text-primary mb-2">Sustainable Practices</h3>
                  <p className="text-sm text-foreground/70 font-serif">
                    We're committed to supporting eco-friendly weaving practices and fair wages for our artisan
                    partners.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
                Read Our Full Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
