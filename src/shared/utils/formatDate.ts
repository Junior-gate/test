export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  type Options = {
    month: 'short'
    day: 'numeric'
    year: 'numeric'
  }
  const options = { month: 'short', day: 'numeric', year: 'numeric' }
  return date
    .toLocaleDateString('ru', options as Options)
    .replace(/\./g, '')
    .replace('г.', '')
    .slice(0, -1)
    .trim()
}
