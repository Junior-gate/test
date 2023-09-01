import React from 'react'
import Image from 'next/image'
import { AsteroidData } from '@/shared/interfaces/interfaces'
import { extractTextInBrackets } from '@/shared/utils/extractTextInBrackets'
import { formatDiametr } from '@/shared/utils/formatDiametr'
import dangerous from '../../../public/assets/dangerous.svg'

import { formatDate } from '@/shared/utils/formatDate'
import { formatDistance } from '@/shared/utils/formatDistance'

import s from './asteroidCard.module.scss'

interface DetailCardProps {
  oneAsteroid: AsteroidData
}

export const AsteroidCard = ({ oneAsteroid }: DetailCardProps) => {
  const name = extractTextInBrackets(oneAsteroid?.name)
  const diameter = formatDiametr(
    oneAsteroid?.estimated_diameter?.meters.estimated_diameter_min,
    oneAsteroid?.estimated_diameter?.meters.estimated_diameter_max
  )

  return (
    <div className={s.flex}>
      <div className={s.detail}>
        <ul className={s.detailList}>
          <li className={s.item}>
            Имя:&nbsp; <span>{name}</span>
          </li>
          <li className={s.item}>
            Диаметр:&nbsp;
            <span>Ø{diameter}</span>
          </li>
          <li className={s.item}>
            Абсолютная магнитуда:&nbsp;
            <span>{oneAsteroid.absolute_magnitude_h}</span>
          </li>
          <li>
            {oneAsteroid?.is_potentially_hazardous_asteroid && (
              <Image src={dangerous} alt='dangerous' />
            )}
          </li>
        </ul>
      </div>
      <div className={s.listApproachesWrapper}>
        <h3 className={s.title}>Список всех сближений</h3>
        <div className={s.listApproaches}>
          {oneAsteroid.close_approach_data?.map((item, id) => {
            return (
              <div key={id} className={s.itemList}>
                <div className={s.item}>
                  Дата приближения:&nbsp;
                  <span>{formatDate(item.close_approach_date)}</span>
                </div>
                <div className={s.item}>
                  Скорость KM в час:&nbsp;
                  <span>{item.relative_velocity.kilometers_per_hour}</span>
                </div>
                <div className={s.item}>
                  Км в секунду:&nbsp;
                  <span>{item.relative_velocity.kilometers_per_second}</span>
                </div>
                <div className={s.item}>
                  Миль в час:&nbsp;
                  <span> {item.relative_velocity.miles_per_hour}</span>
                </div>
                <div className={s.item}>
                  Вращается вокруг орбиты:&nbsp;
                  <span>{item.orbiting_body}</span>
                </div>

                <div className={s.item}>
                  Расстояние до земли:&nbsp;
                  <span>
                    {formatDistance(parseInt(item.miss_distance.kilometers))} km
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
//relative_velocity
