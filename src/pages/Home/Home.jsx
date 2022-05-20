import React from "react"
import { Banner } from "../../components"
import Card from "../../components/ui/Card/Card"
import styles from "./Home.module.css"

const HomePage = () => {
  return (
    <section className={styles.homepage}>
      <Banner />
      <div className={styles.wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default HomePage
