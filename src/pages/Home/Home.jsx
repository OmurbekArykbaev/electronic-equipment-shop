import React from "react"
import { Banner } from "../../components"
import { Card } from "../../components/ui"
import data from "../../assets/data.js"

import styles from "./Home.module.css"

const HomePage = () => {
  return (
    <section className={styles.homepage}>
      <Banner />
      <div className={styles.wrapper}>
        {data.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
            product={p}
          />
        ))}
      </div>
    </section>
  )
}

export default HomePage
