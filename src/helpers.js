export function capitalizeWord(word) {
  if (!word || typeof word !== 'string')  return
  return word[0].toUpperCase() + word.slice(1)
}
