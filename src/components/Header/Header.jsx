import React from "react"
import styles from "./Header.module.css"
import { Button, Input, LinkTo, LogoLink } from "../ui"
import { BsCart3 } from "react-icons/bs"
import { BiUser, BiBookmark, BiSearch } from "react-icons/bi"
import { AiOutlineUnorderedList } from "react-icons/ai"

const Header = () => {
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
            <LinkTo path="/cart" title="Корзина" />
          </ul>
        </div>
      </div>
      {/* 2nd floor navbar */}

      <div className={styles.wrapper}>
        <div className={styles.category}>
          <Button logo={<AiOutlineUnorderedList />} title="Каталог товаров" />
        </div>

        <div className={styles.navbar}>
          <div className={styles.search}>
            <Input />
            <BiSearch />
          </div>

          <ul className={styles.links}>
            <LogoLink logo={<BsCart3 />} title="Корзина" />
            <LogoLink logo={<BiUser />} title="Войти" />
            <LogoLink logo={<BiBookmark />} title="Избранное" />
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
