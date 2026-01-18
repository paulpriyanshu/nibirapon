"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Truck, RefreshCw, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { allProducts } from "@/app/utils/products"

export default function ProductPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  /* ---------------- FIND PRODUCT ---------------- */

  const productDetails = allProducts.find(
    (product) => product.id === id
  )

  /* ---------------- NOT FOUND GUARD ---------------- */

  if (!productDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-sans font-semibold">Product not found</p>
      </div>
    )
  }

  /* ---------------- STATE (UNCHANGED UI LOGIC) ---------------- */

  const [mainImage, setMainImage] = useState(
    productDetails.images[0] || ""
  )
  const [quantity, setQuantity] = useState(1)
  const [isPurchaseType, setIsPurchaseType] =
    useState<"retail" | "wholesale">("retail")
  const [wishlist, setWishlist] = useState(false)

  const displayPrice =
    isPurchaseType === "retail"
      ? productDetails.price
      : productDetails.wholesalePrice

  const minQty =
    isPurchaseType === "retail" ? 1 : productDetails.minWholesale

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-border">
        <div className="flex items-center gap-2 text-sm font-serif">
          <Link href="/" className="text-secondary hover:underline">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/shop" className="text-secondary hover:underline">
            Shop
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{productDetails.name}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative bg-muted rounded-lg overflow-hidden border border-border h-96 md:h-full min-h-96">
              <img
                src={mainImage || "/placeholder.svg"}
                alt={productDetails.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {productDetails.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(image)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                    mainImage === image
                      ? "border-primary"
                      : "border-border hover:border-secondary"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <p className="text-sm text-secondary uppercase tracking-widest font-sans font-semibold mb-2">
                {productDetails.category}
              </p>
              <h1 className="text-4xl font-sans font-bold text-primary mb-4">
                {productDetails.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                 { productDetails?.rating ?
                   (<span className="text-2xl font-sans font-bold">
                   ⭐ {productDetails?.rating}
                 </span>):null
                 }
                  { productDetails?.reviews ?
                    (<span className="text-muted-foreground font-serif">
                    ({productDetails?.reviews} reviews)
                  </span>):null
                  }
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-sans ${
                    productDetails.inStock
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {productDetails.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Purchase Type Selection */}
            <div className="space-y-3">
              <label className="text-sm font-sans font-semibold text-foreground">
                Purchase Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setIsPurchaseType("retail")
                    setQuantity(1)
                  }}
                  className={`py-3 px-4 rounded-lg border-2 transition font-sans font-semibold ${
                    isPurchaseType === "retail"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-foreground hover:border-secondary"
                  }`}
                >
                  Retail Purchase
                </button>
                <button
                  onClick={() => {
                    setIsPurchaseType("wholesale")
                    setQuantity(productDetails.minWholesale)
                  }}
                  className={`py-3 px-4 rounded-lg border-2 transition font-sans font-semibold ${
                    isPurchaseType === "wholesale"
                      ? "border-secondary bg-secondary/5 text-secondary"
                      : "border-border text-foreground hover:border-secondary"
                  }`}
                >
                  Wholesale Order
                </button>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2 py-4 border-t border-b border-border">
              <p className="text-sm text-muted-foreground font-serif">
                {isPurchaseType === "retail"
                  ? "Regular Price"
                  : "Wholesale Price"}
              </p>
              <p className="text-4xl font-sans font-bold text-primary">
                ₹{displayPrice.toLocaleString()}
              </p>
              {isPurchaseType === "wholesale" && (
                <p className="text-sm text-muted-foreground font-serif">
                  Save ₹
                  {(
                    (productDetails.price -
                      productDetails.wholesalePrice) *
                    quantity
                  ).toLocaleString()}{" "}
                  on this order
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-sans font-semibold text-foreground">
                Quantity{" "}
                {isPurchaseType === "wholesale" &&
                  `(Minimum: ${productDetails.minWholesale})`}
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() =>
                      setQuantity(Math.max(minQty, quantity - 1))
                    }
                    className="px-4 py-2 text-foreground hover:bg-muted transition"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-sans font-semibold min-w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-foreground hover:bg-muted transition"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm text-muted-foreground font-serif">
                  Total: ₹{(displayPrice * quantity).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base"
                onClick={() => router.push("/enquiry")}
              >
                Enquire Now
              </Button>
              <div className="flex gap-3">
                <button
                  onClick={() => setWishlist(!wishlist)}
                  className="flex-1 py-3 border-2 border-secondary text-secondary hover:bg-secondary/5 rounded-lg transition font-sans font-semibold flex items-center justify-center gap-2"
                >
                  <Heart size={20} className={wishlist ? "fill-current" : ""} />
                  {wishlist ? "Saved" : "Save"}
                </button>
                <button className="flex-1 py-3 border-2 border-border text-foreground hover:bg-muted rounded-lg transition font-sans font-semibold flex items-center justify-center gap-2">
                  <Share2 size={20} />
                  Share
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex gap-4">
                <Truck className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    Free Shipping
                  </p>
                  <p className="text-sm text-muted-foreground font-serif">
                    On orders above ₹500
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <RefreshCw
                  className="text-secondary flex-shrink-0"
                  size={24}
                />
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    30-Day Returns
                  </p>
                  <p className="text-sm text-muted-foreground font-serif">
                    Hassle-free returns available
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield
                  className="text-secondary flex-shrink-0"
                  size={24}
                />
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    Authentic & Certified
                  </p>
                  <p className="text-sm text-muted-foreground font-serif">
                    Certificate included with every purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description & Features */}
          <div className="lg:col-span-2 space-y-8 mt-10">
            <div>
              <h2 className="text-2xl font-sans font-bold text-primary mb-4">
                About This Piece
              </h2>
              <p className="text-foreground/80 font-serif leading-relaxed mb-4">
                {productDetails.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-sans font-bold text-primary mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {productDetails.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 font-serif text-foreground/80"
                  >
                    <span className="text-secondary font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-muted/50 p-6 rounded-lg border border-border">
            <h3 className="text-xl font-sans font-bold text-primary mb-6">
              Specifications
            </h3>
            <div className="space-y-4">
              {Object.entries(productDetails.specifications).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <p className="text-sm text-muted-foreground font-sans uppercase tracking-widest mb-1">
                      {key}
                    </p>
                    <p className="font-serif text-foreground font-semibold">
                      {value}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}