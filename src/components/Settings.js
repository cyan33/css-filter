import React from 'react'

const Settings = ({}) => (
  <div className="settings">
    <input name="upload" type="file" />
    <br /> <br />
    <button className="reset">Reset</button>
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

export default Settings
