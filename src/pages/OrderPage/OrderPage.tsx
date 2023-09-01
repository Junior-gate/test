import React, { useEffect } from 'react'
import { useGlobalContext } from '@/features/Context/store'
import s from './order.module.scss'
import { ListItem } from '@/components/AsteroidsList/ListItem/ListItem'
import { formatAsteroidData } from '@/shared/utils/formatAsteroidData'
import { AsteroidProps } from '@/shared/interfaces/interfaces'

export const OrderPage = () => {
  const { cartItems } = useGlobalContext()
  const newFormattedAsteroidsData = cartItems?.map(formatAsteroidData)

  return (
    <div className={s.orders}>
      <h1 className={s.title}>Заказ отправлен!</h1>
      <div>
        {newFormattedAsteroidsData?.map((item: AsteroidProps) => {
          return <ListItem key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}
