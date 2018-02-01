import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './components/App'

render(
<MuiThemeProvider>
  <App />
</MuiThemeProvider>
, document.querySelector('.root'))
