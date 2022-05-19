import React from "react"
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.wrapper}>
        <ul className={styles.items}>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
