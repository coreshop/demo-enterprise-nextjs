import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './shop.css'
import {Suspense} from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Loader from "@/components/loader";

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
          <Suspense fallback={<div className="text-center"><Loader /></div>}>
              <div className="main-container container">
                  {children}
              </div>
          </Suspense>
          <Footer />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="/js/vendor/jquery-1.11.1.min.js" />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="/js/vendor/popper.min.js" />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="/js/vendor/bootstrap.min.js" />
      </body>
    </html>
  )
}
