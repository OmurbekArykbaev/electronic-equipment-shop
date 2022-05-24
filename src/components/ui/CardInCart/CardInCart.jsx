import React, { useEffect } from "react"
import styles from "./CardinCart.module.css"
import { BsTrash, BsPlus } from "react-icons/bs"
import { BiMinus } from "react-icons/bi"
import {
  deleteProduct,
  addQuantityToItem,
  substractQuantityFromItem,
  countTotalPrice,
  addTotalPrice,
  substractTotalPrice,
  removeTotalPrice,
} from "../../../Store/cartSlice"
import { useDispatch } from "react-redux"

const CardInCart = ({ id, name, image, price, qty }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const total = qty * +price
    dispatch(countTotalPrice(total))
  }, [])

  const addQuanHandler = (id) => {
    dispatch(addQuantityToItem(id))
    dispatch(addTotalPrice(+price))
  }
  const substractQuanHandler = (id) => {
    dispatch(substractQuantityFromItem(id))
    dispatch(substractTotalPrice(+price))
  }

  const removeProductHandler = (id) => {
    const total = qty * +price
    dispatch(deleteProduct(id))
    dispatch(removeTotalPrice(total))
  }

  // console.log()

  return (
    <li className={styles.card}>
      <div className={styles.wrapper}>
        <img src={image} alt={name} className={styles.image} />

        <h1 className={styles.name}>{name}</h1>

        <div className={styles.btns}>
          <BiMinus onClick={() => substractQuanHandler(id)} />
          <span className={styles.quan}>{qty}</span>
          <BsPlus onClick={() => addQuanHandler(id)} />
        </div>

        <span className={styles.price}>{qty * price}</span>
        <div className={styles.remove}>
          <BsTrash onClick={() => removeProductHandler(id)} />
        </div>
      </div>
    </li>
  )
}

export default CardInCart
