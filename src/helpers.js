export function capitalizeWord(word) {
  if (!word || typeof word !== 'string')  return
  return word[0].toUpperCase() + word.slice(1)
}

export function initParams() {
  return {
    brightness: 100,
    saturate: 100,
    opacity: 100,
    blur: 0,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    sepia: 0
  }
}

export function transformFilters({
  brightness,
  blur,
  contrast,
  grayscale,
  hueRotate,
  opacity,
  saturate,
  sepia
}) {
  return `
    brightness(${brightness}%)
    saturate(${saturate}%)
    opacity(${opacity}%)
    contrast(${contrast}%)
    grayscale(${grayscale}%)
    sepia(${sepia}%)
    blur(${blur}px)
    hue-rotate(${hueRotate}deg)
  `
}

export const DEFAULT_IMAGE = 'https://i.loli.net/2018/02/01/5a729b3dbd91f.jpg'
