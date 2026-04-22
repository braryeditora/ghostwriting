import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ghostwriter | Transforme seu conhecimento em livro',
  description:
    'Serviço de ghostwriting premium para empresários, mentores e especialistas. Você tem o conhecimento. Eu estruturo e escrevo por você.',
  openGraph: {
    title: 'Ghostwriter | Transforme seu conhecimento em livro',
    description: 'Você acumulou anos de experiência. Já passou da hora de transformar isso em um livro.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}