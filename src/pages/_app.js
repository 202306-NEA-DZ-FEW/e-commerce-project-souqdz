import Navbar from "@/components/Navbar/Navbar"
import "@/styles/globals.css"
import "../styles/font.css"
import Footer from "@/components/Footer/Footer"
import { CartProvider } from "@/util/context"

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  )
}
