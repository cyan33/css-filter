import React from 'react'

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
  <div className="options">
    {filters.map((f, i) => (
      <div className="parameter" key={i}>
        <label>{f}</label>
        <input
          type="range" className={f} 
          min={filterRanges[f][0]} max={filterRanges[f][1]}
          value={props[f]}
          onChange={props.onHandleRangeInput}
          onInput={props.onHandleRangeInput}
        />
      </div>
    ))}
  </div>
)

export default Parameters
