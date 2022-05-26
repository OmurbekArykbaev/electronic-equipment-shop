import React, { useState, useEffect } from "react"
import styles from "./CardInfo.module.css"
import { addProduct } from "../../Store/cartSlice"
import { useSelector, useDispatch } from "react-redux"
import {
  BsCartPlus,
  BsFillCartCheckFill,
  BsBookmarkPlus,
  BsTruck,
} from "react-icons/bs"
import { Button, Typography } from "../../components/ui"
import { useNavigate } from "react-router-dom"

const CardInfo = ({ id, name, price, brand, product }) => {
  const [isClicked, setIsClicked] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.cartItems)

  useEffect(() => {
    const hasInCart = cart.filter((product) => product.id === id)
    hasInCart.length > 0 ? setIsClicked(true) : setIsClicked(false)
    console.log(product)
  }, [cart])

  return (
    <div className={styles.cardInfo}>
      <div className={styles.wrapper}>
        <div className={styles.bonus}>
          <span>Суперцена</span>
          <span>Скидка на товар 10%</span>
        </div>
        <Typography text={name} type={"h1"} size={"32px"} weight={"300"} />
        <Typography text={`Бренд:   ${brand}`} type={"h3"} size={"16px"} />
        <div className={styles.prices}>
          <span>{+price + (price * 10) / 100} сом</span>
          <span>{price}сом</span>
        </div>
        <div className={styles.btns}>
          {isClicked ? (
            <Button
              onClick={() => navigate("/cart")}
              bcColor="var(--color-gray)"
              size="16px"
              color="var(--color-prim)"
              logo={<BsFillCartCheckFill />}
              title="Продолжить покупку"
            />
          ) : (
            <Button
              onClick={() => dispatch(addProduct(product))}
              fill
              size="16px"
              logo={<BsCartPlus />}
              title="В корзину"
            />
          )}
          <Button circle fill logo={<BsBookmarkPlus />} />
        </div>
        <h4>в расрочку от 3000 сом в месяц</h4>
        <div className={styles.shipping}>
          <p>
            <BsTruck /> Доставка от 1000 сом бесплатно.
          </p>
          <p>Самовызов из любого магазина</p>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
