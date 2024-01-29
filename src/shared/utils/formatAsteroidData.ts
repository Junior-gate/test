import { formatDate } from './formatDate'
import { formatDistance } from './formatDistance'

import { extractTextInBrackets } from './extractTextInBrackets'
import { formatDiametr } from './formatDiametr'
import { AsteroidData } from '../interfaces/interfaces'

export const formatAsteroidData = (asteroid: AsteroidData) => {
  const name = extractTextInBrackets(asteroid.name)

  const flightDate = formatDate(
    asteroid.close_approach_data[0].close_approach_date
  )

  const distancesInKm = formatDistance(
    parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers)
  )
  const distancesToMoon = formatDistance(
    parseFloat(asteroid.close_approach_data[0].miss_distance.lunar)
  )

  const diameter = formatDiametr(
    asteroid.estimated_diameter.meters.estimated_diameter_min,
    asteroid.estimated_diameter.meters.estimated_diameter_max
  )

  return {
    id: asteroid.id,
    name: name,
    flightDate,
    distancesInKm,
    distancesToMoon,
    diameter,
    isPotentiallyHazardous: asteroid.is_potentially_hazardous_asteroid,
  }
}
