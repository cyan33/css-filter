import React, { PureComponent } from 'react'
import { css } from 'glamor'
import screenshot from 'image-screenshot'

export default class Preview extends PureComponent {
  transformFilters({
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

  downloadImage() {
    return screenshot(this.imgNode, 'jpeg', 1.0).download()
  }

  render() {
    const { src, ...fs } = this.props
    return (
      <div className="img-container">
        <img
          ref={(imgNode) => this.imgNode = imgNode}
          crossOrigin="anonymous"
          src={src}
          alt="filter-preview"
          {...css({filter: this.transformFilters(fs)})}
        />
      </div>
    )
  }
}
