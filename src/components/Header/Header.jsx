import React from "react"
import styles from "./Header.module.css"
import { Input, LinkTo, LogoLink } from "../ui"
import { BsCart3 } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { useSelector } from "react-redux"

const Header = () => {
  const cartCount = useSelector((state) => state.cart.cartItems)
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <div>
            <h1>LOGO</h1>
          </div>
        </div>

        <div className={styles.navbar}>
          <div className={styles.phone}>
            <p>+996(707)(550)(777)-360-640</p>
          </div>

          <ul className={styles.items}>
            <LinkTo title="Главная" />
            <LinkTo title="Акции" />
            <LinkTo title="Доставка" />
            <LinkTo title="Обратная связь" />
          </ul>
        </div>
      </div>
      {/* 2nd floor navbar */}

      <div className={styles.wrapper}>
        {/* <div className={styles.category}>
          <Button logo={<AiOutlineUnorderedList />} title="Каталог товаров" />
        </div> */}

        <div className={styles.navbarTools}>
          <div className={styles.search}>
            <BiSearch />
            <Input />
          </div>

          <ul className={styles.links}>
            {/* <LogoLink logo={<BiUser />} title="Войти" /> */}
            {/* <LogoLink logo={<BiBookmark />} title="Избранное" /> */}
            <LogoLink
              path="/cart"
              logo={<BsCart3 />}
              title="Корзина"
              count={cartCount.length}
            />
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
