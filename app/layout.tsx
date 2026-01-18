import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Nibirapon | Premium Indian Saree Exporter & Textile Supplier",
  description:
    "Nibirapon is a trusted Indian saree exporter offering cotton, silk and handloom sarees for Nepal and global markets. Export-ready quality & reliable delivery.",
  keywords:
    "sarees, suit pieces, Indian ethnic wear, traditional clothing, wholesale, saree exporter, textile supplier",
  icons: {
    icon: "/icon.png"

  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} font-serif antialiased`}>
        {children}
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  )
}
