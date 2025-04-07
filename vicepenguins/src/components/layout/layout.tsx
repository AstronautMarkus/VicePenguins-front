import type React from "react"
import Header from "./header"
import Footer from "./footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#3f4738] text-gray-200">
      <Header />
      <main className="min-h-[calc(100vh-160px)]">{children}</main>
      <Footer />
    </div>
  )
}

