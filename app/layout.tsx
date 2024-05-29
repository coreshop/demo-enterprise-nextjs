import type { Metadata } from 'next'
import 'bootstrap/scss/bootstrap.scss';
import '../stories/assets/scss/fonts.scss';
import '../stories/assets/scss/variables.scss';
import '../stories/assets/scss/mixins.scss';
import '../stories/assets/scss/grid.scss';
import '../stories/assets/scss/headlines.scss';
import '../stories/assets/scss/form.scss';
import '../stories/assets/scss/list.scss';
import '../stories/assets/scss/typography.scss';
import '../stories/assets/scss/table.scss';
import '../stories/assets/scss/main.scss';
import {Suspense} from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Loader from "@/components/loader";


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
      <body>
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
