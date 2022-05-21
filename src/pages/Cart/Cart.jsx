import React from "react"
import styles from "./Cart.module.css"
import { useSelector } from "react-redux"
import { Button, Typography } from "../../components/ui"
import CardInCart from "../../components/ui/CardInCart/CardInCart"

const Cart = () => {
  const productInCart = useSelector((state) => state.cart.cartItems)
  return (
    <section style={styles.cart}>
      <div style={styles.wrapper}>
        <div style={styles.control}>
          <Button fill title={"Продолжить покупку"} />
          <Typography
            text={`Количество ${productInCart?.length} товаров, на сумму 00.`}
            type="h1"
            size="34px"
            color="var(--color-prim)"
            weight="300"
          />
        </div>
        <ul className={styles.list}>
          {productInCart?.map((product) => (
            <CardInCart
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              name={product.name}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Cart
