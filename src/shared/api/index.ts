import axios from 'axios'
const API_KEY = '1HqsBhBx4Ab1yngY9alGGQlfxLhZC5oUzaIkUbeb'

export const URL = `https://api.nasa.gov/`

export const api = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params: {
    api_key: API_KEY,
  },
})
