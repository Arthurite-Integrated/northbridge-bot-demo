import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LexChatbot from "./LexChatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Northbridge Energy Limited",
  description: "Leading energy company operating in the oil and gas sector",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      <LexChatbot />
    </html>
  )
}
