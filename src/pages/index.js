import Link from "next/link"
import { useEffect, useState } from "react"

const buttonStyle = {
  backgroundColor: "#BC9B7F",
  color: "white",
  fontWeight: "bold",
  borderRadius: "5px",
  padding: "10px 20px",
  marginLeft: "1rem",
  marginRight: "1rem",
}

export default function Home() {
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
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">souqDZ</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {category.map((cat, index) => (
              <li key={index}>
                <a href={`/categories/${cat}`}>{cat}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-4 text-brown-text-brown">
          Single product links
        </h1>
        <Link href={`/products/1`}>
          <button style={buttonStyle}>01</button>
        </Link>
        <Link href={`/products/2`}>
          <button style={buttonStyle}>02</button>
        </Link>
        <Link href={`/products/3`}>
          <button style={buttonStyle}>03</button>
        </Link>
      </div>
    </>
  )
}
