import React from "react"
import { Link } from "react-router-dom"
import styles from "./Link.module.css"

const LinkTo = ({ title, path = "/" }) => {
  return (
    <li className={styles.link}>
      <Link to={path}>{title}</Link>
    </li>
  )
}

export default LinkTo
