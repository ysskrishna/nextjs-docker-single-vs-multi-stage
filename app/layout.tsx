import "@/styles/globals.css"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

import { siteConfig } from "@/common/site"
import Footer from "@/components/footer/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  ...siteConfig,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <main className="mx-auto min-h-[calc(100dvh-84px)] max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>

          <Separator />
          <Footer />
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  )
}
