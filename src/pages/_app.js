import Navbar from "@/components/Navbar/Navbar"
import "@/styles/globals.css"
import "../styles/font.css"
import Footer from "@/components/Footer/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
