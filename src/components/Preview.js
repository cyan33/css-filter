import React from 'react'
import { css } from 'glamor'

const transformFilters = ({
  brightness,
  blur,
  contrast,
  grayscale,
  hueRotate,
  opacity,
  saturate,
  sepia
}) => {
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

const Preview = ({ src, ...fs }) => (
  <div className="img-container">
    <img
      src={src} alt="filter-preview" 
      {...css({filter: transformFilters(fs)})}
    />
  </div>
)

export default Preview
