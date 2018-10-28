import React, { useState, useRef } from 'react'
import { css } from 'glamor'
import screenshot from 'image-screenshot'

import Preview from './Preview'
import Parameters from './Parameters'
import Settings from './Settings'
import { 
  transformFilters,
  initParams,
  downloadImage,
  DEFAULT_IMAGE,
} from '../helpers'

import '../style.css'

function App() {
  const imgNode = useRef()
  const [imageSrc, setImageSrc] = useState(DEFAULT_IMAGE)
  const [parameters, setParameters] = useState(initParams())

  const handleRangeInput = (type, value) => {
    setParameters({
      ...parameters,
      [type]: value
    })
  }

  const onReset = () => {
    setParameters(initParams())
  }

  const downloadImage= () => {
    screenshot(imgNode.current, 'jpeg', 1.0).download()
  }

  const changePreset = (partialParameters) => {
    setParameters({
      ...parameters,
      ...partialParameters,
    })
  }

  return (
    <div {...css({
      width: '600px',
      height: '100%',
      margin: '0 auto',
    })}>
      <div className="img-container">
        <img
          ref={imgNode}
          crossOrigin="anonymous"
          src={imageSrc}
          alt="filter-preview"
          {...css({filter: transformFilters(parameters)})}
        />
      </div>
      <div className="content-container">
        <Parameters 
          {...parameters} 
          onHandleRangeInput={handleRangeInput}
        />
        <Settings 
          onReset={onReset}
          onFileUploadCb={setImageSrc}
          downloadImage={downloadImage}
          changePreset={changePreset}
        />
      </div>
    </div>
  )
}

export default App
