import React from "react"
import styles from "./CardInfo.module.css"
import { BsCartPlus, BsBookmarkPlus, BsTruck } from "react-icons/bs"
import { Button, Typography } from "../../components/ui"

const CardInfo = () => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.wrapper}>
        <div className={styles.bonus}>
          <span>Суперцена</span>
          <span>Скидка на компонент</span>
        </div>
        <Typography
          text={"Смартфон Xiaomi Poco F4 GT 12/256Gb, черный"}
          type={"h1"}
          size={"32px"}
          weight={"300"}
        />
        <div className={styles.prices}>
          <span>69 990 сом</span>
          <span>56 000 сом</span>
        </div>
        <div className={styles.btns}>
          <Button fill logo={<BsCartPlus />} title="В корзину" />
          <Button circle fill logo={<BsBookmarkPlus />} />
        </div>
        <h4>в расрочку от 3000 сом в месяц</h4>
        <div className={styles.shipping}>
          <p>
            <BsTruck /> Доставка от 1000 сом бесплатно.
          </p>
          <p>Самовызов из любого магазина</p>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
