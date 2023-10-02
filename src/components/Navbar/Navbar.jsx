import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import { BiSearch } from "react-icons/bi"
import { CiShoppingCart } from "react-icons/ci"
import { BsChevronCompactUp } from "react-icons/bs"
import Link from "next/link"
import { useCart } from "@/util/context"

const Navbar = () => {
  const { itemCount } = useCart()
  const [showNav, setShowNav] = useState(false)

  const [category, setCategory] = useState([])

  async function fetchCategory() {
    const url = "https://fakestoreapi.com/products/categories"
    const options = {
      headers: {
        accept: "application/json",
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    return data
  }

  useEffect(() => {
    fetchCategory().then((data) => {
      setCategory(data)
    })
  }, [])

  return (
    <div className="px-5 max-w-[1200px] mx-auto bg-grey-900">
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-bold text-[#5A5042] text-2xl font-sans ">
            <Link href="/">
              <span className="text-3xl text-[#a59174]">S</span>
              <span className="text-3xl text-[#5A5042]">O</span>
              <span className="text-3xl text-[#a59174]">U</span>
              <span className="text-3xl text-[#5A5042]">Q</span>
              <span className="text-3xl text-[#a59174]">D</span>
              <span className="text-3xl text-[#5A5042]">Z</span>
            </Link>
          </div>
          <nav className="max-md:hidden px-10">
            <ul className="flex items-center lg:space-x-10 text-[#57462e] font-semibold space-x-7 opacity-70 text[15px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              {category.map((cat, index) => (
                <li key={index}>
                  <Link
                    href={`/categories/${cat}`}
                    className="py-2 inline-block w-full hover:text-[#a59174]"
                  >
                    {cat.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4 ">
          <SearchBar />
          <Link href="/cart">
            <div className="relative">
              <CiShoppingCart size={30} />
              {itemCount > 0 && (
                <div className="absolute bottom-4 left-4 bg-red-500 text-white rounded-full w-5 h-5 text-center text-xs">
                  {itemCount}
                </div>
              )}
            </div>
            {/* <div className="p-2 bg-gray-100 rounded-full ">
              <CiShoppingCart size={20} />
            </div> */}
          </Link>
          <span
            onClick={() => setShowNav(!showNav)}
            className="p-[9px] bg-gray-100 rounded-full md:hidden"
          >
            <BsChevronCompactUp
              className={`transition-ease-in duration-150 ${
                showNav ? "rotate-100" : "0"
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex  text-[#5A5042] flex-col text-[15px] opacity-75 px-2">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          {category.map((cat, index) => (
            <li key={index}>
              <Link
                href={`/categories/${cat}`}
                className="py-3 inline-block w-full"
              >
                {cat.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center bg-gray-100 p-2 rounded-lg py-3 my-4 ">
          <input
            type="text"
            className="outline-none bg-transparent ml-2 w-full caret-blue-500 placeholder:font-light  placeholder:text-gray-600 text-[15px]"
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className="opacity-50" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
