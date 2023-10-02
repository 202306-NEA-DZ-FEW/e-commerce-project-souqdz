import React from "react"
import { doc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "@/util/firebase"
import { useCart } from "@/util/context"
import Image from "next/image"

function CartItem({ id,item, onRemove, onIncrease, onDecrease }) {
  
  const itemDocRef = doc(db, "items", id)

  const handleIncrease = async () => {
    onIncrease(
      await updateDoc(itemDocRef, {
        quantity: item.quantity + 1,
      }),
    )
  }

  const handleDecrease = async () => {
    if (item.quantity <= 1) return
    onDecrease(
      await updateDoc(itemDocRef, {
        quantity: item.quantity - 1,
      }),
    )
  }

  const handleRemove = async () => {
    onRemove(await deleteDoc(doc(db, "items", id)))
  }

  return (
    <div className="border p-4 mb-4 flex items-center justify-between rounded-3xl shadow-md bg-pale-thing">
      <div className="flex items-center">
        <Image
          height={200}
          width={200}
          src={item.image}
          alt={item.name}
          className="w-20 h-20 mr-4"
        />
        <div>
          <h3 className="text-base font-semibold text-text-brown">
            {item.name}
          </h3>
          <p className="text-gray-600">Price: ${item.price}</p>
          <div className="flex items-center">
            <button
              onClick={handleDecrease}
              className="bg-buttongold text-white px-2 py-1 rounded-l cursor-pointer"
            >
              -
            </button>
            <p className="text-gray-600 px-2">{item.quantity}</p>
            <button
              onClick={handleIncrease}
              className="bg-buttongold text-white px-2 py-1 rounded-r cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        className="bg-buttongold text-white px-4 py-2 rounded cursor-pointer"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem
