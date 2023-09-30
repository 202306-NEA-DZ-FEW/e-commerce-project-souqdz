import React from "react"

function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  const handleIncrease = () => {
    onIncrease(item.id)
  }

  const handleDecrease = () => {
    onDecrease(item.id)
  }

  return (
    <div className="border p-4 mb-4 flex items-center justify-between rounded-3xl shadow-md bg-pale-thing">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="w-20 h-20 mr-4" />
        <div>
          <h3 className="text-lg font-semibold text-text-brown">
            {item.title}
          </h3>
          <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
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
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem
