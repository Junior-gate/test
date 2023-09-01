export const formatDistance = (km: number) => {
  const roundedNumber = Math.floor(km)
  return roundedNumber.toLocaleString('ru-RU')
}
