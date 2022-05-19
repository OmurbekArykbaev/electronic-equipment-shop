import React from "react"
import Card from "../../components/ui/Card/Card"
import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <section className={styles.homepage}>
      <div className={styles.wrapper}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default HomePage
