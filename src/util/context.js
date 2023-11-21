import React, { createContext, useContext, useState } from "react"

// Create the Cart Context
const CartContext = createContext()

// Create a custom hook for using the Cart Context
export function useCart() {
  return useContext(CartContext)
}

// Create a Cart Provider component to wrap your application
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCart([...cart, item])
  }

  // Other functions to manage the cart (remove items, update quantities, etc.)
  const removeItemFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }
  // Calculate the count of items in the cart
  const itemCount = cart.length

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, itemCount, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
