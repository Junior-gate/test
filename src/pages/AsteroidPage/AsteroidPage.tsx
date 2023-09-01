import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchOneAsteroid } from '@/shared/api/routes/asteroids'
import { AsteroidCard } from '@/components/AsteroidCard/AsteroidCard'
import { AsteroidData } from '@/shared/interfaces/interfaces'
import s from './asteroidPage.module.scss'

export const AsteroidPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [oneAsteroid, setOneAsteroid] = useState<AsteroidData>(
    {} as AsteroidData
  )

  useEffect(() => {
    fetchOneAsteroid(id as string).then(res => setOneAsteroid(res.data))
  }, [id])

  return <AsteroidCard oneAsteroid={oneAsteroid} />
}
