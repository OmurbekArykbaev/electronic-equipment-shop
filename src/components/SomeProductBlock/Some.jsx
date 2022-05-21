import React from "react"
import { Card } from "../ui"
import styles from "./Some.module.css"

const Some = () => {
  return (
    <div className={styles.some}>
      <h1>Похожие товары</h1>
      <div className={styles.wrapper}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Some
