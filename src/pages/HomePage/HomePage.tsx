import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Basket, AsteroidsList } from '@/components'
import { OptionDistance } from '@/components/OptionDistance/OptionDistance'
import { useGlobalContext } from '@/features/Context/store'
import { fetchAsteroidList } from '@/shared/api/routes/asteroids'
import { formatAsteroidData } from '@/shared/utils/formatAsteroidData'

import { AsteroidData, ResponseData } from '@/shared/interfaces/interfaces'

import s from './homePage.module.scss'

export const HomePage = () => {
  const start_date = useMemo(() => {
    const date = new Date()
    return date.toISOString().slice(0, 10)
  }, [])

  const { setAsteroidData, asteroidData, cartItemsId } = useGlobalContext()
  const [dataFromServer, setDataFromServer] = useState<ResponseData>()
  const [counter, setCounter] = useState(0)
  const [dateParam, setDateParam] = useState<string>(start_date)

  const scrollHandler = useCallback((e: Event) => {
    if (
      (e.target as Document).documentElement.scrollHeight -
        ((e.target as Document).documentElement.scrollTop +
          window.innerHeight) <
      1
    ) {
      setCounter(prev => (prev += 1))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [scrollHandler])

  useEffect(() => {
    const date = new Date()
    date.setDate(date.getDate() + counter)
    const formattedDate = date.toISOString().slice(0, 10)
    setDateParam(formattedDate)
  }, [counter])

  useEffect(() => {
    fetchAsteroidList(dateParam)
      .then(res => {
        setDataFromServer(res.data)
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data)
        } else if (error.request) {
          console.log(error.request)
        }
      })
      .finally()
  }, [dateParam, setDataFromServer])

  useEffect(() => {
    if (dataFromServer) {
      const concactArray = Object.values(
        dataFromServer?.near_earth_objects || {}
      ).flat()

      const sortedArray = concactArray.sort((a, b) =>
        a.close_approach_data[0].close_approach_date >
        b.close_approach_data[0].close_approach_date
          ? 1
          : -1
      )

      setAsteroidData(prevArr => [
        ...prevArr,
        ...sortedArray.filter(
          newObj => !prevArr.some(obj => obj.id === newObj.id)
        ),
      ])
    }
  }, [dataFromServer, setAsteroidData])

  const newFormattedAsteroidsData = asteroidData?.map(formatAsteroidData)

  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>Ближайшие подлёты астероидов</h1>
        <OptionDistance />
        <AsteroidsList asteroids={newFormattedAsteroidsData} />
      </div>
      <Basket itemCount={cartItemsId.length} />
    </>
  )
}
