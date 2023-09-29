import React, { useState, useEffect } from "react"
import CartItem from "./CartItem"

// fetched API here to try and work on an example while figuring out how to work with firebase
const fetchCartData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products")
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }
    const data = await response.json()
    // Added a quantity field to each item in the data
    return data.map((item) => ({ ...item, quantity: 1 }))
  } catch (error) {
    console.error("Error fetching data:", error)
    return []
  }
}

function CartPage() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCartData()
      setCartItems(data)
    }

    fetchData()
  }, [])
  // added a function to remove item from cart page
  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId)
    setCartItems(updatedCart)
  }
  // added a function to increase number of items
  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
    )
    setCartItems(updatedCart)
  }
  // added a function to decrease number of items
  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    )
    setCartItems(updatedCart)
  }
  // order summary section in the end of the page
  const totalPayment = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  // Calculate shipping and order total
  const shipping = 100 // a suggested shipping cost
  const orderTotal = totalPayment + shipping

  // all elements here styled with tailwind

  return (
    <div className="container mx-auto p-4 bg-gold-g">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemoveFromCart}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
        ))}
      </div>
      <div className="mt-4 w-1/4 mx-auto">
        <div className="bg-pale-thing p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold text-text-brown mb-2">
            Order Summary
          </h3>
          <div className="flex justify-between">
            <span className="text-text-brown">Subtotal:</span>
            <span className="text-text-brown">${totalPayment.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-brown">Shipping:</span>
            <span className="text-text-brown">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-text-brown">Total:</span>
            <span className="text-xl font-semibold text-text-brown">
              ${orderTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
