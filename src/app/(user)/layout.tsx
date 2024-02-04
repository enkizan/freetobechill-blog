import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import HomeHeader from './Header'
import Navbar from './Navbar'
import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {token} from '../../lib/sanity.fetch'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '@/components/Footer'
// import StudioNavbarTest from '@/components/StudioNavbarTEST'

const inter = Inter({ subsets: ['latin'] })
const PreviewProvider = dynamic(() => import('../../components/PreviewProvider'))

export const metadata: Metadata = {
  title: 'Freetobechill',
  description: 'Created by Flat-6 Greoup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className=" pt-0 item-center justify-center max-w-6xl mx-auto min-h-full ">
        <HomeHeader/>
        <Navbar/>
        <hr className=' mb-10 mx-10' />
        {/* <StudioNavbarTest/> */}
          {/* {children} */}
          {draftMode().isEnabled ? (
            <PreviewProvider token={token}>{children}</PreviewProvider>
          ) : (
            children
          )}
          <hr className=' mb-10 mx-10' />
          <Footer />
          </body>
    </html>
  )
}
