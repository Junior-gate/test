import React from 'react'
import { useRouter } from 'next/router'
import s from './basket.module.scss'

type BasketProps = {
  itemCount: number
}
export const Basket = ({ itemCount }: BasketProps) => {
  const router = useRouter()

  return (
    <div className={s.basket}>
      <div>
        <h3 className={s.title}>Корзина</h3>
        <p className={s.subtitle}>
          {itemCount >= 1 ? `${itemCount} астероида` : ''}
        </p>
      </div>
      <button
        className={s.send}
        onClick={() => router.push('/order')}
        disabled={itemCount === 0}
      >
        Отправить
      </button>
    </div>
  )
}
