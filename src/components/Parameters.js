import React from 'react'
import Slider from 'material-ui/Slider';
import { css } from 'glamor'

const filterRanges = {
  brightness: [0, 500],
  saturate: [0, 500],
  opacity: [0, 100],
  blur: [0, 10],
  contrast: [40, 250],
  grayscale: [0, 100],
  hueRotate: [0, 90],
  sepia: [0, 100]
}

const filters = Object.keys(filterRanges)

const Parameters = (props) => (
  <div 
    className="options" 
    {...css({
      width: '250px',
      fontFamily: 'Roboto, sans-serif'
    })}
  >
    {filters.map((f, i) => (
      <div 
        key={i} 
        {...css({
          display: 'flex',
          marginBottom: '10'
        })}
      >
        <label {...css({ width: '150px' })}>{f}</label>
        <Slider
          min={filterRanges[f][0]} max={filterRanges[f][1]}
          value={props[f]}
          onChange={(e, newValue) => props.onHandleRangeInput(f, newValue)}
          style={{width: '100%'}}
          sliderStyle={{display: 'inline-block', margin: '0'}}
        />
      </div>
    ))}
  </div>
)

export default Parameters
