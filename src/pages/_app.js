import Navbar from "@/components/Navbar/Navbar"
import "@/styles/globals.css"
import "../styles/font.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
