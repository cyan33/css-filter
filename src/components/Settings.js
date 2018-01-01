import React, { PureComponent } from 'react'

class Settings extends PureComponent {
  onFileUpload = () => {
    const file = this.fileInput.files[0]
    const reader = new FileReader();

    const { onReset, onFileUploadCb } = this.props
    onReset()

    reader.onloadend = function() {
      if (reader.result.indexOf('data:image') !== 0)  return
      onFileUploadCb(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    const { onReset } = this.props
    return (
      <div className="settings">
        <input 
          name="upload" type="file" 
          ref={(fileInput)=> this.fileInput = fileInput}
          onChange={this.onFileUpload}
        />
        <br /> <br />
        <button className="reset" onClick={onReset}>
          Reset
        </button>
        <br /> <br />
        <div className="introduction">
          Image filter rendered by pure CSS. <a href="https://github.com/thomasyimgit">@Chang</a> 2017  <br /> <br />
        <div>
          <h4>Reference</h4>
          <br />
        </div>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter">MDN | Filter</a> 
        <br /> <br />
        <a href="https://css-tricks.com/almanac/properties/f/filter/">CSS Tricks | Filter</a>
        </div>
      </div>
    )
  }
}


export default Settings
