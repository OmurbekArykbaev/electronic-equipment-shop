import React from "react"
import styles from "./Button.module.css"

const Button = ({ logo = null, title = "Empty button" }) => {
  return (
    <button className={styles.btn}>
      {logo && logo}
      <span>{title}</span>
    </button>
  )
}

export default Button
