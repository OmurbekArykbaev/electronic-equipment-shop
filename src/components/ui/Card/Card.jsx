import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import { addProduct } from "../../../Store/cartSlice"
import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs"

const Card = ({ id, name, image, price, product }) => {
  const [isClicked, setIsClicked] = useState(false)
  const cart = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    const hasInCart = cart.filter((product) => product.id === id)
    hasInCart.length > 0 ? setIsClicked(true) : setIsClicked(false)
  }, [cart])

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <Link to={`/product/${id}`}>
          <div className={styles.content}>
            <img src={image} alt={name} />

            <p>{name}</p>
          </div>
        </Link>
        <div className={styles.control}>
          <span>{price} сом</span>

          <div className={styles.btns}>
            {/* <button>
              <BsBookmarkPlus />
            </button> */}

            {isClicked ? (
              <button className={styles.active} onClick={() => false}>
                <BsFillCartCheckFill />
              </button>
            ) : (
              <button onClick={() => dispatch(addProduct(product))}>
                <BsCartPlus />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
