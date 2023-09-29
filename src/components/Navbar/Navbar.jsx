import React, { useState } from "react"
import SearchBar from "./SearchBar"
import { BiSearch } from "react-icons/bi"
import { CiShoppingCart } from "react-icons/ci"
import { BsChevronCompactUp } from "react-icons/bs"
import Link from "next/link"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="px-5 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semi-bold text-2xl">
            <a href="/">SOUQDZ</a>{" "}
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text[15px]">
              <li>
                <a href="/" className="py-3 inline-block w-full">
                  Shop
                </a>
              </li>
              <li>
                <a href="/" className="py-3 inline-block w-full">
                  Filters
                </a>
              </li>
              <li>
                <a href="/" className="py-3 inline-block w-full">
                  My products
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4 ">
          <SearchBar />
          <Link href="../components/ShoppingCart/shoppingcart">
            <div className="p-2 bg-gray-100 rounded-full ">
              <CiShoppingCart size={20} />
            </div>
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
        <ul className="flex  flex-col text-[15px] opacity-75 px-2">
          <li>
            {" "}
            <a href="/shop" className="py-3 inline-block w-full"></a>Shop
          </li>
          <li>
            {" "}
            <a href="/" className="py-3 inline-block w-full"></a>Filters
          </li>
          <li>
            {" "}
            <a href="/" className="py-3 inline-block w-full"></a>My products
          </li>
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
