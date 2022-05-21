import React from "react"
import styles from "./Cart.module.css"

const Cart = () => {
  return (
    <section style={styles.cart}>
      <div style={styles.wrapper}>
        <div style={styles.control}>
          <button>Продолжить покупку</button>
        </div>
        <ul className={styles.list}></ul>
      </div>
    </section>
  )
}

export default Cart
