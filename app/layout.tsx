import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import { ToastProvider } from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'

import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { LampDemo } from '@/components/ui/lamp'
import { TopInfo } from '@/components/ui/top-info'
import { DevInfo } from '@/components/ui/dev-info'
import { GridBackground } from '@/components/main/background'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ai-tools',
  description: 'AI-TOOLS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <ToastProvider />
            <Navbar />
            {/* <TopInfo/> */}
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}