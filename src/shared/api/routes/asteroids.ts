import { api } from '../index'
import { endpoints } from '../endpoints'

export const fetchAsteroidList = (dateParam: string) => {
  return api.get(endpoints.asteroids.fetchAsteroidList(dateParam))
}
export const fetchOneAsteroid = (id: string) => {
  return api.get(endpoints.oneAsteroid.fetchOneAsteroid(id))
}
