import React from "react"
import Link from "next/link"
import Image from "next/image"
const Hero = () => {
  return (
    <div className="relative p-5% md:p-10% mb-8">
      <div className="w-full h-screen relative">
        <Image
          src="/banner-3.png"
          alt="banner"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-text-brown text-center">
          <h5
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "Jost, Mooli, sans-serif" }}
          >
            Winter Collection
          </h5>
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: " Mooli" }}
          >
            New Winter Collection
          </h1>
          <p className="text-lg">There &apos s Nothing like Trend</p>
          <Link href="/products">
            <button className="bg-buttongold hover:bg-buttongoldhov text-white font-bold py-2 px-4 rounded mt-4 inline-block">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
