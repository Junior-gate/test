export const extractTextInBrackets = (text: string) => {
  const regex = /\((.*?)\)/

  const matches = text?.match(regex)

  if (matches && matches.length > 1) {
    return matches[1]
  }
  return ''
}
