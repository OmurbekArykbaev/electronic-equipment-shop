import React from "react"
import data from "../../../assets/data"
import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import { BsCartPlus, BsBookmarkPlus } from "react-icons/bs"

const Card = () => {
  const product = data[0]
  return (
    <div className={styles.card}>
      <Link to="/">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <img src="https://items.s1.citilink.ru/1740219_v01_b.jpg" alt="" />
            <p>Смартфон Xiaomi Poco F4 GT 12/256Gb, черный</p>
          </div>

          <div className={styles.control}>
            <span>$699</span>
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
