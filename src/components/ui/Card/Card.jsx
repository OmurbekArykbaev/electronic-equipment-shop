import React from "react"
import data from "../../../assets/data"
import styles from "./Card.module.css"

const Card = () => {
  const product = data[0]
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src="https://3dnews.ru/assets/external/illustrations/2021/10/18/1051521/MacBook_Pro16_01.jpg"
          alt="Mac"
        />
        <h3>{product.name}</h3>
        <div>
          <span>{product.price}</span>
          <button>add cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card
