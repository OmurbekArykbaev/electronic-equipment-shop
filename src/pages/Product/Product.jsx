import React from "react"
import { CardInfo } from "../../components/"
import { useParams } from "react-router-dom"
import data from "../../assets/data"

import styles from "./Product.module.css"

const Product = () => {
  const params = useParams()
  const [productDetail] = data.filter((product) => product.id === params.id)

  return (
    <section className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.imgBlock}>
          <img src={productDetail.image} alt={productDetail.name} />
        </div>
        <CardInfo
          product={productDetail}
          id={productDetail.id}
          name={productDetail.name}
          brand={productDetail.brand}
          price={productDetail.price}
        />
      </div>
      <div className={styles.description}>
        <h1>Описание товара</h1>
        <p>{productDetail.description}</p>
      </div>
    </section>
  )
}

export default Product
