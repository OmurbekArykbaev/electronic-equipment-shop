import React from "react"
import styles from "./Cart.module.css"
import { useSelector } from "react-redux"

const Cart = () => {
  const productInCart = useSelector((state) => state.cart.cart)
  return (
    <section style={styles.cart}>
      <div style={styles.wrapper}>
        <div style={styles.control}>
          <button>Продолжить покупку</button>
          <h3>В корзине имеется {productInCart?.length} товара.</h3>
        </div>
        <ul className={styles.list}>
          {productInCart.map((product) => (
            <li key={product.id}>
              <h1>{product.name}</h1>
              <h3>{product.price}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Cart
