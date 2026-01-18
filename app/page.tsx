"use client"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import NewCollectionCarousel from "@/components/new-collection-carousel"
// import FeaturedCategories from "@/components/featured-categories"
import CustomerTestimonials from "@/components/customer-testimonials"
import WhyChooseNibirapon from "@/components/why-choose-nibirapon"
import Image from "next/image"
import { allProducts } from "./utils/products"
export default function Home() {

//   const heroImages = allProducts
//   .filter(p => p.images?.length)
//   .slice(0, 5)
//   .map(p => p.images[0])

// const newCollectionProducts = allProducts.slice(0, 10)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/elegant-saree-pattern.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl px-4 md:px-8">
            {/* <h1 className="font-sans text-5xl md:text-7xl font-light text-amber-900 mb-6 tracking-wide">Nibirapon</h1> */}
            <Image src="/logo5.png" className="w-full flex items-center justify-center" alt="Nibirapon" width={120} height={120} />
            <p className="font-serif text-xl md:text-2xl text-amber-700 mb-4 italic">ঘনিষ্ঠ বন্ধন | Deeply Bonded</p>
            <p className="font-serif text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Curated with care. Crafted with tradition. Celebrating the timeless elegance of Indian ethnic wear.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Link href="/shop" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto h-14 px-12 bg-amber-800 hover:bg-amber-900 text-white font-sans text-lg"
                >
                  Shop Retail
                </Button>
              </Link>
              <Link href="/wholesale" className="w-full md:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full md:w-auto h-14 px-12 border-amber-800 text-amber-800 hover:bg-amber-50 font-sans text-lg bg-transparent"
                >
                  Wholesale Program
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-sans text-4xl md:text-5xl font-light text-amber-900 mb-2 text-center">
              New Collection
            </h2>
            <p className="text-center text-gray-600 font-serif mb-12">
              Explore our latest arrivals and trending pieces
            </p>
            <NewCollectionCarousel collectionItems={allProducts} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-8 bg-amber-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { icon: "✦", title: "24-Hour Dispatch", desc: "Quick turnaround" },
                { icon: "✦", title: "Easy Returns", desc: "30-day guarantee" },
                { icon: "✦", title: "Free Shipping", desc: "On orders above ₹500" },
                { icon: "✦", title: "Assured Quality", desc: "Premium fabrics" },
                { icon: "✦", title: "Secure Payment", desc: "Safe transactions" },
              ].map((feature, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl text-amber-800 mb-3">{feature.icon}</div>
                  <h3 className="font-sans font-semibold text-amber-900 mb-2">{feature.title}</h3>
                  <p className="font-serif text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-20 px-4 md:px-8 bg-white">
          <FeaturedCategories />
        </section> */}

        <section className="py-20 px-4 md:px-8 bg-amber-50">
          <WhyChooseNibirapon />
        </section>

        {/* Brand Story */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans text-4xl md:text-5xl font-light text-amber-900 mb-6">About Nibirapon</h2>
            <p className="font-serif text-lg text-gray-700 leading-relaxed mb-6">
              Nibirapon (নিবিড় পছন্দ) means "deep selection" in Bengali. With over 15 years of experience in curating
              premium sarees and ethnic wear, we believe every piece tells a story of artisanal craftsmanship and
              cultural heritage.
            </p>
            <p className="font-serif text-lg text-gray-700 leading-relaxed mb-8">
              We partner directly with master weavers and artisans across India who have perfected their craft over
              generations. Each piece is a testament to tradition, quality, and timeless elegance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-amber-200">
              <div>
                <div className="text-4xl font-light text-amber-800 mb-2">15+</div>
                <p className="font-serif text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <div className="text-4xl font-light text-amber-800 mb-2">500+</div>
                <p className="font-serif text-gray-600">Happy Boutique Owners</p>
              </div>
              <div>
                <div className="text-4xl font-light text-amber-800 mb-2">100%</div>
                <p className="font-serif text-gray-600">Authentic Products</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-8 bg-amber-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-sans text-4xl md:text-5xl font-light text-amber-900 mb-2 text-center">
              Our Fabric Collections
            </h2>
            <p className="text-center text-gray-600 font-serif mb-12">
              Premium materials sourced from master weavers across India
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Pure Silk", desc: "Luxurious and elegant" },
                { name: "Tussar Silk", desc: "Rich texture and sheen" },
                { name: "Organza", desc: "Lightweight and crisp" },
                { name: "Kota Cotton", desc: "Traditional and breathable" },
                { name: "Chiffon", desc: "Soft and draping" },
                { name: "Tissue Silk", desc: "Delicate and premium" },
                { name: "Jamdani", desc: "Handwoven artistry" },
                { name: "Dupion", desc: "Textured elegance" },
              ].map((fabric, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-sans text-lg font-semibold text-amber-900 mb-2">{fabric.name}</h3>
                  <p className="font-serif text-sm text-gray-600">{fabric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-8 bg-white">
          <CustomerTestimonials />
        </section>

        {/* Trusted Saree Exporter Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl md:text-5xl font-light text-amber-900 mb-4">
                Trusted Saree Exporter from India
              </h2>
              <p className="font-serif text-lg text-gray-700 leading-relaxed">
                As a dedicated Indian saree exporter, Nibirapon works closely with skilled weavers and manufacturers to
                ensure consistent quality, authentic designs, and export-ready finishing.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 bg-amber-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-amber-800 flex-shrink-0">✔</span>
                <span className="font-serif text-gray-700">Premium fabrics</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-amber-800 flex-shrink-0">✔</span>
                <span className="font-serif text-gray-700">Reliable sourcing</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-amber-800 flex-shrink-0">✔</span>
                <span className="font-serif text-gray-700">Competitive export pricing</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-amber-800 flex-shrink-0">✔</span>
                <span className="font-serif text-gray-700">Professional documentation</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-amber-800 flex-shrink-0">✔</span>
                <span className="font-serif text-gray-700">On-time delivery</span>
              </div>
            </div>

            <p className="font-serif text-gray-700 leading-relaxed mb-16 text-center">
              We serve buyers across Nepal and international markets, supporting both small and bulk export orders.
            </p>

            {/* Saree Collections */}
            <div className="mb-16">
              <h3 className="font-sans text-2xl md:text-3xl font-light text-amber-900 mb-8 text-center">
                Our Saree Collections
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-amber-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-sans text-xl font-semibold text-amber-900 mb-3">Cotton Sarees</h4>
                  <p className="font-serif text-gray-600 leading-relaxed">
                    Breathable, elegant, and versatile — ideal for daily wear and casual elegance.
                  </p>
                </div>
                <div className="border border-amber-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-sans text-xl font-semibold text-amber-900 mb-3">Cotton Silk Sarees</h4>
                  <p className="font-serif text-gray-600 leading-relaxed">
                    A perfect blend of comfort and richness, suitable for festive and semi-formal occasions.
                  </p>
                </div>
                <div className="border border-amber-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-sans text-xl font-semibold text-amber-900 mb-3">Silk & Tussar Sarees</h4>
                  <p className="font-serif text-gray-600 leading-relaxed">
                    Premium handcrafted sarees with refined textures and traditional artistry.
                  </p>
                </div>
              </div>
              <p className="font-serif text-gray-600 text-center mt-8 text-sm">
                All products are export-packed and compliant with international trade standards.
              </p>
            </div>

            {/* Export & Logistics */}
            <div className="bg-amber-50 p-8 rounded-lg mb-16">
              <h3 className="font-sans text-2xl font-light text-amber-900 mb-4">Export & Logistics Expertise</h3>
              <p className="font-serif text-gray-700 leading-relaxed">
                We support exports via road and courier, offering CIF / FOB pricing, secure packaging, and smooth
                documentation. Our team ensures hassle-free coordination from India to destination.
              </p>
            </div>

            {/* Partner CTA */}
            <div className="text-center">
              <h3 className="font-sans text-2xl font-light text-amber-900 mb-4">Partner with Nibirapon</h3>
              <p className="font-serif text-gray-700 mb-6 leading-relaxed">
                If you are looking for a reliable saree exporter from India, Nibirapon is your trusted partner for
                quality, consistency, and long-term collaboration.
              </p>
              <p className="font-serif text-amber-800 font-semibold">
                📩 Request our catalog or send an export inquiry today.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action - Dual Path */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-sans text-4xl md:text-5xl font-light text-amber-900 mb-2 text-center">
              How Can We Help?
            </h2>
            <p className="text-center text-gray-600 font-serif mb-12">
              Choose your path - whether you're looking for personal wear or building your boutique inventory
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-amber-200 p-12 rounded-lg">
                <h3 className="font-sans text-2xl font-semibold text-amber-900 mb-4">Shop Retail</h3>
                <p className="font-serif text-gray-600 mb-6 leading-relaxed">
                  Browse our curated collection of premium sarees and suit pieces for personal wear. Shop individual
                  pieces with fast shipping and easy returns.
                </p>
                <Link href="/retail">
                  <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">
                    Explore Retail Collection
                  </Button>
                </Link>
              </div>
              <div className="bg-amber-900 text-white p-12 rounded-lg">
                <h3 className="font-sans text-2xl font-semibold mb-4">Wholesale Program</h3>
                <p className="font-serif text-amber-50 mb-6 leading-relaxed">
                  For boutique owners and retailers: Exclusive bulk pricing, personalized video call facility, and
                  dedicated account support. Build your premium collection with us.
                </p>
                <Link href="/wholesale">
                  <Button className="w-full bg-white hover:bg-amber-50 text-amber-900">Explore Wholesale</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 md:px-8 bg-white border-t border-amber-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-sans text-lg font-semibold text-amber-900 mb-2">Call Us</h3>
                <p className="font-serif text-gray-600">Monday - Saturday</p>
                <p className="font-serif text-amber-800 text-lg font-semibold">+91 8920666949</p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-amber-900 mb-2">Email Us</h3>
                <p className="font-serif text-gray-600">For queries and orders</p>
                <p className="font-serif text-amber-800 text-lg font-semibold">nibiraponcollections@gmail.com</p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-amber-900 mb-2">Visit Us</h3>
                <p className="font-serif text-gray-600">Kolkata, West Bengal</p>
                <p className="font-serif text-amber-800 text-lg font-semibold">Direct from Manufacturer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-amber-800 to-amber-900">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-sans text-4xl md:text-5xl font-light mb-6">Ready to Discover Nibirapon?</h2>
            <p className="font-serif text-lg mb-8 text-amber-50">
              Experience authentic, premium Indian ethnic wear curated with care
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-white hover:bg-amber-50 text-amber-900 font-sans text-lg px-12 h-14">
                Start Exploring
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
