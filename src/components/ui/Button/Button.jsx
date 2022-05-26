import React from "react"
import styles from "./Button.module.css"

const Button = ({
  logo = null,
  title = null,
  fill = false,
  circle = false,
  size = "14px",
  height = "",
  onClick = null,
  bcColor = "",
  color = "",
}) => {
  const fillBtn = () => {
    if (fill) {
      return `${styles.btn} ${styles.fill}`
    } else {
      return `${styles.btn}`
    }
  }

  const circleBtn = () => {
    if (circle) {
      return `${styles.btn} ${styles.fill} ${styles.circle}`
    } else {
      return ``
    }
  }

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bcColor,
        fontSize: size,
        height: height,
        color: color,
      }}
      className={`${fillBtn()} ${circleBtn()}`}
    >
      <span> {logo && logo}</span>

      <span>{title && title}</span>
    </button>
  )
}

export default Button
