import React from "react"
import { Link } from "react-router-dom"
import styles from "./Banner.module.css"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Link to={"/"}>
        <img
          src="https://images.unsplash.com/photo-1649972904366-7309c5e13abd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          alt=""
        />
      </Link>
      <Link to={"/"}>
        <img
          src="https://images.unsplash.com/photo-1653007939376-7ab3d9e95f8b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500"
          alt=""
        />
      </Link>
    </div>
  )
}

export default Banner
