import React from "react"
import styles from "./Input.module.css"

const Input = () => {
  return (
    <input
      className={styles.input}
      type={"text"}
      placeholder={"Поиск по товарам"}
    />
  )
}

export default Input
