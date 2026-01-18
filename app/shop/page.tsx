import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ShopClient from "./shop-client"

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <Suspense fallback={<p>Loading products...</p>}>
          <ShopClient />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}