import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

// $('input[type="file"]').on('change', uploadImage);
// $('input[type="range"]').on('input', function() {
//   img.css('filter', setFilter($(this).attr('class'), $(this).val()));
// });

// $('button.reset').click(reset);

render(<App />, document.querySelector('.root'))
