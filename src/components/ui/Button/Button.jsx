import React from "react"
import styles from "./Button.module.css"

const Button = ({ logo = null, title = null, fill = false }) => {
  return (
    <button className={fill ? `${styles.btn} ${styles.fill}` : styles.btn}>
      <span> {logo && logo}</span>

      <span>{title && title}</span>
    </button>
  )
}

export default Button
