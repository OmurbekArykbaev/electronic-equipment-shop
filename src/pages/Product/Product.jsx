import React from "react"
import styles from "./Product.module.css"
import { BsCartPlus, BsBookmarkPlus } from "react-icons/bs"
import { Button, Typography } from "../../components/ui"

const Product = () => {
  return (
    <section className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.imgBlock}>
          <img src="https://items.s1.citilink.ru/1740219_v01_b.jpg" alt="" />
        </div>
        <div className={styles.description}>
          <Typography
            text={"Смартфон Xiaomi Poco F4 GT 12/256Gb, черный"}
            type={"h1"}
            size={"36px"}
            weight={"300"}
          />
          <Typography text={"$700"} type={"h3"} size={"32px"} />
          <Button fill logo={<BsCartPlus />} title="В корзину" />
        </div>
      </div>
    </section>
  )
}

export default Product
