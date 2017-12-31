import React, { Component } from 'react'

import Preview from './Preview'
import Parameters from './Parameters'
import Settings from './Settings'

import '../style.css'

const initParams = () => ({
  brightness: 100,
  saturate: 100,
  opacity: 100,
  blur: 0,
  contrast: 100,
  grayscale: 0,
  hueRotate: 0,
  sepia: 0
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: 'https://i.loli.net/2017/12/31/5a48f6bba0549.jpeg',
      parameters: initParams()
    }
  }

  handleRangeInput = (e) => {
    this.setState({
      ...this.state,
      parameters: {
        ...this.state.parameters,
        [e.target.className]: e.target.value
      }
    })
  }

  handleFileUpload = () => {

  }

  handleReset = () => {

  }

  render() {
    return (
      <div>
        <Preview src={this.state.src} {...this.state.parameters} />
        <div className="content-container">
          <Parameters 
            {...this.state.parameters} 
            onHandleRangeInput={this.handleRangeInput}
          />
          <Settings />
        </div>
      </div>
    )
  }
}

export default App
