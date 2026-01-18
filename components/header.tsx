"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Search } from "lucide-react"
import Image from "next/image"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-2 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
   <div className="w-full h-full rounded-lg flex items-center justify-center">
          <Image 
            src="/logo2.png" 
            alt="Nibirapon" 
            width={150} 
            height={120}
            className="w-28 lg:w-32 h-auto"
          />
        </div>
        {/* <span className="hidden sm:inline font-sans font-semibold text-xl text-primary">Nibirapon</span> */}
      </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-secondary transition font-serif">
              Home
            </Link>
            <Link href="/shop" className="text-foreground hover:text-secondary transition font-serif">
              Shop
            </Link>
            {/* <Link href="/collections/sarees" className="text-foreground hover:text-secondary transition font-serif">
              Sarees
            </Link> */}
            <Link href="/wholesale" className="text-foreground hover:text-secondary transition font-serif">
              Wholesale
            </Link>
            {/* <Link href="/about" className="text-foreground hover:text-secondary transition font-serif">
              Our Story
            </Link> */}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* <button className="p-2 hover:bg-muted rounded-lg transition">
              <Search size={20} className="text-foreground" />
            </button> */}
            {/* <button className="p-2 hover:bg-muted rounded-lg transition relative">
              <ShoppingCart size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-secondary rounded-full text-xs flex items-center justify-center text-secondary-foreground">
                0
              </span>
            </button> */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-muted rounded-lg font-serif">
              Home
            </Link>
            <Link href="/shop" className="block px-4 py-2 hover:bg-muted rounded-lg font-serif">
              Shop
            </Link>
            <Link href="/collections/sarees" className="block px-4 py-2 hover:bg-muted rounded-lg font-serif">
              Sarees
            </Link>
            <Link href="/wholesale" className="block px-4 py-2 hover:bg-muted rounded-lg font-serif">
              Wholesale
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-muted rounded-lg font-serif">
              Our Story
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
