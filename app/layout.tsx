import type { Metadata } from 'next'
import { AuthProvider } from "./Providers";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Classi',
  description: 'Class Review for Students',
}

export default function RootLayout({ children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          <AuthProvider>{children}</AuthProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
