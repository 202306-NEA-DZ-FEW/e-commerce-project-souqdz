import React from "react"
import { BiSearch } from "react-icons/bi"
import { useState, useEffect } from "react"
import ShoppingCard from "../ShoppingCard/ShoppingCard"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [result, setresult] = useState("")

  function fetchingProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setresult(data))
      .catch((error) => console.error("Error fetching data:", error))
  }
  useEffect(() => {
    fetchingProducts()
  }, [searchQuery])
  const handleSearch = async (e) => {
    e.preventDefault()
    fetchingProducts()
    // setSearchQuery("")
  }
  const itemsToDisplay = [...result].filter((item) => {
    if (item.title) {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return false
  })
  console.log(itemsToDisplay)

  return (
    <div>
      <div className="flex items-center bg-gray-100 p-2 rounded-full max-md:hidden">
        <button onClick={handleSearch}>
          <BiSearch size={20} className="opacity-50" />
        </button>
        <input
          type="text"
          className="outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light  placeholder:text-gray-600 text-[15px]"
          placeholder="Search"
          autoComplete="false"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* <div className="flex flex-wrap">
        {itemsToDisplay.map((item) => (
          <ShoppingCard key={item.id} product={item} />
        ))}
      </div> */}
    </div>
  )
}

export default SearchBar
