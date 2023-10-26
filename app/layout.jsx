import {Montserrat} from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const montserrat = Montserrat({weights: ['400', '700'],
 subsets: ['latin'] })

export const metadata = {
  title: 'MyMovies App',
  description: 'An application that allows to browse trending movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-slate-900 h-screen w-full` }>
        <Navbar></Navbar>
        <main className='min-h-3/4 my-8'>{children}</main>
        <Footer></Footer>
        </body>
    </html>
  )
}
