import React from "react"
import styles from "./CardinCart.module.css"
import { BsTrash, BsPlus } from "react-icons/bs"
import { BiMinus } from "react-icons/bi"
import {
  deleteProduct,
  addQuantityToItem,
  substractQuantityFromItem,
} from "../../../Store/cartSlice"
import { useDispatch } from "react-redux"

const CardInCart = ({ id, name, image, price, qty }) => {
  const dispatch = useDispatch()
  const total = qty * price

  return (
    <li className={styles.card}>
      <div className={styles.wrapper}>
        <img src={image} alt={name} className={styles.image} />

        <h1 className={styles.name}>{name}</h1>

        <div className={styles.btns}>
          <BiMinus onClick={() => dispatch(substractQuantityFromItem(id))} />
          <span className={styles.quan}>{qty}</span>
          <BsPlus onClick={() => dispatch(addQuantityToItem(id))} />
        </div>

        <span className={styles.price}>{total}</span>
        <div className={styles.remove}>
          <BsTrash onClick={() => dispatch(deleteProduct(id))} />
        </div>
      </div>
    </li>
  )
}

export default CardInCart
