import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer.jsx"
import Header from "../Header/Header"
import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
