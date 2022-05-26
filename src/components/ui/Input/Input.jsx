import React, { useState, useRef, useEffect } from "react"
import styles from "./Input.module.css"
import data from "../../../assets/data"
import { addSearchProducts } from "../../../Store/searchResultSlice"
import { useDispatch } from "react-redux"

const Input = () => {
  const [value, setValue] = useState("")
  const inputRef = useRef(null)

  const dispatch = useDispatch()

  useEffect(() => {}, [])
  const onSearchItemsHandler = (value) => {
    setValue(value)
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    dispatch(addSearchProducts(result))
  }

  return (
    <input
      value={value}
      onChange={(e) => onSearchItemsHandler(e.target.value)}
      className={styles.input}
      type={"text"}
      placeholder={"Поиск по товарам"}
    />
  )
}

export default Input
