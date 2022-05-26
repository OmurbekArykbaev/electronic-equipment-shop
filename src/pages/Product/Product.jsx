import React, { useEffect } from "react"
import CardInfo from "../../components/CardInfo/CardInfo"
import Some from "../../components/SomeProductBlock/Some"
import styles from "./Product.module.css"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import data from "../../assets/data"

const Product = () => {
  const params = useParams()
  const [productDetail] = data.filter((product) => product.id === params.id)

  console.log(productDetail)

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
