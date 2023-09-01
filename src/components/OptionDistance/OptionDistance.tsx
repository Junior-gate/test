'use client'
import React, { useState } from 'react'
import { useGlobalContext } from '@/features/Context/store'
import cn from 'classnames'
import s from './optionDistance.module.scss'

const data = [
  { id: 0, value: 'В километрах', label: 'distancesInKm' },
  { id: 1, value: 'В лунных орбитах', label: 'distancesToMoon' },
]

export const OptionDistance = () => {
  const { setDistanceOption } = useGlobalContext()
  const [selected, setSelected] = useState(0)

  return (
    <div className={s.options}>
      {data.map(({ id, value, label }) => {
        return (
          <button
            key={id}
            className={cn(s.button, {
              [s.active]: id === selected,
            })}
            onClick={() => {
              setSelected(id)
              setDistanceOption(label)
            }}
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}
