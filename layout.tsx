import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Raka Maulana Akbar - Full Stack Developer",
  description: "Computer Science student at BINUS@Malang specializing in Full Stack Development for web and mobile applications. Passionate about building scalable and user-friendly digital solutions.",
}

import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) { // Perbaikan: Tambahkan tipe untuk 'children'
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}