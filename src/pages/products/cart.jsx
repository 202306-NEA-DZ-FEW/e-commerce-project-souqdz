import React, { useState, useEffect } from "react"

export default function Cart() {
  const [todo, setTodo] = useState()
  const [todos, setTodos] = useState([])

  const getListOfTodos = async () => {}

  const addTodo = async (e) => {
    e.preventDefault()

    getListOfTodos()
  }

  useEffect(() => {
    getListOfTodos()
  }, [])

  return (
    <>
      <h1>Shopping Cart</h1>
      index
    </>
  )
}
