import React, { PureComponent } from 'react'
import { css } from 'glamor'

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

  getImageDataUrl() {
    const canvas = document.createElement('canvas')
    canvas.width = this.imgNode.width
    canvas.height = this.imgNode.height
    
    var ctx = canvas.getContext('2d')

    ctx.filter = this.transformFilters(this.props)
    ctx.drawImage(this.imgNode, 0, 0, canvas.width, canvas.height)
    return canvas.toDataURL('image/jpeg', 1)
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
