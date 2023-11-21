import React, { useState, useEffect } from "react"
import CartItem from "./CartItem"
import { db } from "@/util/firebase"
import { collection, getDocs } from "firebase/firestore"

//return data.map((item) => ({ ...item, quantity: 1 }))

function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const itemsCollectionRef = collection(db, "items")

  const getListofProducts = async () => {
    const data = await getDocs(itemsCollectionRef)
    const products = data.docs.map((product) => ({
      ...product.data(),
      id: product.id,
    }))
    //console.log(products[0].id)
    setCartItems(products)
  }

  getListofProducts()
  useEffect(() => {
    getListofProducts()
  }, [])

  {
    /* useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCartData()
      setCartItems(data)
    } 

    fetchData()
  }, [])*/
  }
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

      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center h-60">
          <p className="text-white text-xl italic text-center">
            No items added to cart
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              id={item.id}
              onRemove={handleRemoveFromCart}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
          ))}
        </div>
      )}

      <div className="mt-4 w-1/4 mx-auto">
        <div className="bg-pale-thing p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold text-text-brown mb-2">
            Order Summary
          </h3>
          <div className="flex justify-between">
            <span className="text-text-brown">Subtotal:</span>
            <span className="text-text-brown">${totalPayment}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-brown">Shipping:</span>
            <span className="text-text-brown">${shipping}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-text-brown">Total:</span>
            <span className="text-xl font-semibold text-text-brown">
              ${orderTotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
