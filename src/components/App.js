import React, { Component } from 'react'
import { css } from 'glamor'

import Preview from './Preview'
import Parameters from './Parameters'
import Settings from './Settings'

import '../style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: 'https://i.loli.net/2017/12/31/5a48f6bba0549.jpeg',
      parameters: this.initParams()
    }
  }

  initParams = () => ({
    brightness: 100,
    saturate: 100,
    opacity: 100,
    blur: 0,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    sepia: 0
  })

  handleRangeInput = (type, value) => {
    this.setState({
      parameters: {
        ...this.state.parameters,
        [type]: value
      }
    })
  }

  onFileUploadCb = (src) => {
    this.setState({ src })
  }

  onReset = () => {
    this.setState({
      ...this.state,
      parameters: this.initParams()
    })
  }

  render() {
    return (
      <div {...css({
        width: '600px',
        margin: '30px auto'
      })}>
        <Preview src={this.state.src} {...this.state.parameters} />
        <div className="content-container">
          <Parameters 
            {...this.state.parameters} 
            onHandleRangeInput={this.handleRangeInput}
          />
          <Settings 
            onReset={this.onReset}
            onFileUploadCb={this.onFileUploadCb}
          />
        </div>
      </div>
    )
  }
}

export default App
