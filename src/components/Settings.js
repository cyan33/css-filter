import React, { PureComponent } from 'react'
import { css } from 'glamor'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import UploadIcon from 'material-ui/svg-icons/file/file-upload'

import presets from '../presets'
import { capitalizeWord } from '../helpers'

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

  downloadImage = () => {
    this.props.downloadImage()
  }

  changePreset = (e, key, payload) => {
    this.props.changePreset(payload)
  }

  render() {
    const { onReset } = this.props

    return (
      <div className="settings" {...css({
        fontFamily: 'Roboto, sans-serif'
      })}>
        <div>
          <label 
            htmlFor="upload"
            className="upload-label"
            {...css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '160px',
              height: '38px',
              backgroundColor: '#00bcd4',
              color: '#fff',
              marginBottom: '20px',
              cursor: 'pointer',
              boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
              transition: 'all 0.3s',
              '&:hover, &:focus': { 
                backgroundColor: '#00838e',
                outline: 'none'
              }
            })}
          >
            <UploadIcon color="#fff" {...css({ marginRight: '5px' })}/>
            Choose a file...
          </label>
          <input 
            type="file"
            id="upload"
            ref={(fileInput)=> this.fileInput = fileInput}
            onChange={this.onFileUpload}
            {...css({
              width: '0.1px',
              height: '0.1px',
              opacity: '0',
              overflow: 'hidden',
              position: 'absolute',
              zIndex: '-1',

            })}
          />
        </div>
        <div>
          <RaisedButton 
            label="Reset"
            onClick={onReset}
            style={{ marginRight: '10px' }}
          />
          <RaisedButton 
            label="Download Picture"
            onClick={this.downloadImage}
          />
        </div>
        <SelectField
          floatingLabelFixed={true}
          hintText="Preset"
          autoWidth={true}
          onChange={this.changePreset}
          {...css({ 
            margin: '20px 0' 
          })}
        >
          {Object.keys(presets).map((name, i) => (
            <MenuItem
              key={i}
              value={presets[name]}
              primaryText={capitalizeWord(name)}
            />
          ))}
        </SelectField>
        <h4>Reference</h4>
        <br />
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter">MDN | Filter</a> &nbsp;&nbsp;
        <a href="https://css-tricks.com/almanac/properties/f/filter/">CSS Tricks | Filter</a>
      </div>
    )
  }
}


export default Settings
