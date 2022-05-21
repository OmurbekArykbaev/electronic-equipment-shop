import React from "react"

import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import { BsCartPlus, BsBookmarkPlus } from "react-icons/bs"

const Card = ({ id, name, image, price }) => {
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
              <button>
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
