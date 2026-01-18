import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground/95 text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            {/* <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-sans font-bold">N</span>
              </div>
              <span className="font-sans font-bold text-lg">Nibirapon</span>
            </div> */}
            <Image src="/logo2.png" alt="Nibirapon" width={150} height={120} />
            <p className="font-serif text-background/80 text-sm">
              Celebrating Indian culture and tradition through curated, premium ethnic wear.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans font-semibold text-secondary mb-4">Explore</h3>
            <ul className="space-y-2 font-serif text-sm text-background/80">
              <li>
                <Link href="/" className="hover:text-background transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/retail" className="hover:text-background transition">
                  Shop Retail
                </Link>
              </li>
              <li>
                <Link href="/collections/sarees" className="hover:text-background transition">
                  Sarees
                </Link>
              </li>
              <li>
                <Link href="/collections/suit-pieces" className="hover:text-background transition">
                  Suit Pieces
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans font-semibold text-secondary mb-4">Services</h3>
            <ul className="space-y-2 font-serif text-sm text-background/80">
              <li>
                <Link href="/wholesale" className="hover:text-background transition">
                  Wholesale Program
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-background transition">
                  About Nibirapon
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-background transition">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Enhanced contact section with more prominent styling */}
          <div>
            <h3 className="font-sans font-semibold text-secondary mb-4">Contact</h3>
            <ul className="space-y-3 font-serif text-sm text-background/80">
              <li className="flex gap-2 items-start">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-background font-semibold">+91 8920666949</p>
                  <p className="text-xs text-background/70">Mon - Sat | 10:30 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-background font-semibold">nibiraponcollections@gmail.com</p>
                  <p className="text-xs text-background/70">We reply within 24 hours</p>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-background font-semibold">Kolkata, India</p>
                  <p className="text-xs text-background/70">Direct from Manufacturer</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-serif text-background/70 text-sm">© 2026 Nibirapon. All rights reserved.</p>
            <div className="flex gap-6 font-serif text-background/70 text-sm">
              <Link href="/privacy" className="hover:text-background transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-background transition">
                Terms & Conditions
              </Link>
              <Link href="/shipping" className="hover:text-background transition">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
