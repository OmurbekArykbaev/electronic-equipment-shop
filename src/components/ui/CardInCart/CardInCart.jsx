import React from "react"
import Button from "../Button/Button"
import styles from "./CardinCart.module.css"

const CardInCart = ({ id, name, image, price }) => {
  return (
    <li className={styles.card}>
      <div className={styles.wrapper}>
        <img src={image} alt={name} className={styles.image} />
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.btns}>
          <Button title={"--"} />
          <span>0</span>
          <Button title={"+"} />
        </div>
        <span className={styles.price}>{price}</span>
      </div>
    </li>
  )
}

export default CardInCart
