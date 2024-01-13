import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import './globals.css'
import Navbars from './components/menu/navbars'
import Footers from './components/menu/footers'
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from './components/BootstrapClient'
import { AppWrapper } from './components/qtyContext'


const prompt = Prompt({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'สินค้า Online',
  description: 'แอพขานสินค้า Online',
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode;

}) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <AppWrapper>
          <Navbars />
          {children}
          <BootstrapClient />
          <Footers />
        </AppWrapper>
      </body>
    </html>
  )
}
