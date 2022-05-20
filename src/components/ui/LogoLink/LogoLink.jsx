import React from "react"
import styles from "./LogoLink.module.css"
import { Link } from "react-router-dom"

const LogoLink = ({ logo = null, title = "Empty", path = "/" }) => {
  return (
    <li className={styles.logo}>
      <Link to={path}>
        {logo && logo}
        <p>{title}</p>
      </Link>
    </li>
  )
}

export default LogoLink
