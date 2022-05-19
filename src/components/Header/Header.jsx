import React from "react"
import LinkTo from "../Link/Link"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <ul className={styles.items}>
          <LinkTo title="home" />
          <LinkTo title="about" />
          <LinkTo path="/cart" title="cart" />
        </ul>
      </div>
    </header>
  )
}

export default Header
