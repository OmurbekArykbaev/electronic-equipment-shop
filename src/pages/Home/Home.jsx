import React from "react"
import { Banner } from "../../components"
import { Card } from "../../components/ui"
import { useSelector } from "react-redux"
import styles from "./Home.module.css"

const HomePage = () => {
  const allProductsBySearch = useSelector((state) => state.search.searchItems)
  return (
    <section className={styles.homepage}>
      <Banner />
      <div className={styles.wrapper}>
        {allProductsBySearch.map((p) => (
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
