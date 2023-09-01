export const endpoints = {
  asteroids: {
    fetchAsteroidList: (dateParam: string) =>
      `neo/rest/v1/feed?start_date=${dateParam}&end_date=${dateParam}`,
  },
  oneAsteroid: {
    fetchOneAsteroid: (id: string) => `neo/rest/v1/neo/${id}`,
  },
}
