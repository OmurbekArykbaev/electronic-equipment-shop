import React from "react"
import styles from "./LogoLink.module.css"
import { Link } from "react-router-dom"

const LogoLink = ({
  logo = null,
  title = "Empty",
  path = "/",
  count = null,
}) => {
  return (
    <li className={styles.logo}>
      <Link to={path}>
        {logo && logo}
        <p>{title}</p>
        {count ? <span>{count}</span> : <></>}
      </Link>
    </li>
  )
}

export default LogoLink
