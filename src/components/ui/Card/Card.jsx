import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import { addProduct } from "../../../Store/cartSlice"
import { BsCartPlus, BsBookmarkPlus } from "react-icons/bs"

const Card = ({ id, name, image, price, product }) => {
  // const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  // const addCartHandler = (name) => {
  //   dispatch(addProduct(name))
  // }

  return (
    <div className={styles.card}>
      <Link to={`/product/${id}`}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <img src={image} alt={name} />
            <p>{name}</p>
          </div>

          <div className={styles.control}>
            <span>{price} сом</span>
            <div className={styles.btns}>
              <button>
                <BsBookmarkPlus />
              </button>
              <button onClick={() => dispatch(addProduct(product))}>
                <BsCartPlus />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
