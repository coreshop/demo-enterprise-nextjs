import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './shop.css'
import {Suspense} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoreShop Demo NextJS',
  description: 'CoreShop Demo with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <Suspense>
              <div className="main-container container">
                  {children}
              </div>
          </Suspense>
          <Footer />
          <script src="/js/vendor/jquery-1.11.1.min.js" />
          <script src="/js/vendor/popper.min.js" />
          <script src="/js/vendor/bootstrap.min.js" />
      </body>
    </html>
  )
}
