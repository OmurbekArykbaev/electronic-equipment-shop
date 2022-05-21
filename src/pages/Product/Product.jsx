import React from "react"
import CardInfo from "../../components/CardInfo/CardInfo"
import Some from "../../components/SomeProductBlock/Some"
import styles from "./Product.module.css"

const Product = () => {
  return (
    <section className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.imgBlock}>
          <img src="https://items.s1.citilink.ru/1740219_v01_b.jpg" alt="" />
        </div>
        <CardInfo />
      </div>
      <Some />
    </section>
  )
}

export default Product
