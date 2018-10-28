import React, { useState, useRef } from 'react'
import { css } from 'glamor'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import UploadIcon from 'material-ui/svg-icons/file/file-upload'

import presets from '../presets'
import { capitalizeWord } from '../helpers'

function Settings(props) {
  const fileInput = useRef()
  const [preset, setPreset] = useState(presets['none'])

  const onFileUpload = () => {
    const file = fileInput.current.files[0]
    const reader = new FileReader();

    const { onReset, onFileUploadCb } = props
    onReset()

    reader.onloadend = function() {
      if (reader.result.indexOf('data:image') !== 0)  return
      onFileUploadCb(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const downloadImage = () => {
    props.downloadImage()
  }

  const changePreset = (e, key, preset) => {
    setPreset(preset)
    props.changePreset(preset)
  }

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
          ref={fileInput}
          onChange={onFileUpload}
          {...css({
            width: '0.1px',
            height: '0.1px',
            opacity: '0',
            overflow: 'hidden',
            position: 'absolute',
            zIndex: '-1'
          })}
        />
      </div>
      <div>
        <RaisedButton 
          label="Reset"
          onClick={props.onReset}
          style={{ marginRight: '10px' }}
        />
        <RaisedButton 
          label="Download Picture"
          onClick={downloadImage}
        />
      </div>
      <SelectField
        floatingLabelFixed
        hintText="Preset"
        autoWidth
        value={preset}
        onChange={changePreset}
        {...css({ 
          margin: '20px 0' 
        })}
      >
        {Object.keys(presets).map((name, i) => (
          <MenuItem
            key={i}
            label={capitalizeWord(name)}
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


export default Settings
