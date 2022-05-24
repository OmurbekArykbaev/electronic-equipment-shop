import React, { useEffect } from "react"
import styles from "./Cart.module.css"
import { useSelector, useDispatch } from "react-redux"
import { Button, Typography } from "../../components/ui"
import CardInCart from "../../components/ui/CardInCart/CardInCart"
import { useNavigate } from "react-router-dom"
import { countTotalPrice } from "../../Store/cartSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const productInCart = useSelector((state) => state.cart.cartItems)
  const total = useSelector((state) => state.cart.cartTotalPrice)
  const cartQuanItems = useSelector((state) => state.cart.cartQuantityItems)

  const navigate = useNavigate()

  // useEffect(() => {
  //   const price = productInCart.reduce((acc, next) => acc + +next.price, 0)
  //   dispatch(countTotalPrice(price))
  //   console.log(price)
  // }, [])

  return (
    <section className={styles.cart}>
      <div className={styles.wrapper}>
        <div className={styles.control}>
          <Button title={"Вернуться к товарам"} onClick={() => navigate("/")} />
          <div>
            <Typography
              text={`Всего ${cartQuanItems} товаров на сумму ${total} сом`}
              type="h1"
              size="24px"
              color="var(--color-prim)"
              weight="300"
            />
            <Button fill title={"Продолжить покупку"} height="30px" />
          </div>
        </div>
        <ul className={styles.list}>
          {productInCart?.map((product) => (
            <CardInCart
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              name={product.name}
              qty={product.qty}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Cart
