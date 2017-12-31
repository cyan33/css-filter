function setFilter(attr, val) {
  const hashUnit = {
    brightness: '%', saturate: '%', opacity: '%',
    contrast: '%', grayscale: '%', sepia: '%',
    huerotate: 'deg',
    blur: 'px'
  };
  const hashRegex = {
    brightness: /brightness\(.*?\)/gi,
    saturate: /saturate\(.*?\)/gi,
    opacity: /opacity\(.*?\)/gi,
    blur: /blur\(.*?\)/gi,
    contrast: /contrast\(.*?\)/gi,
    grayscale: /grayscale\(.*?\)/gi,
    huerotate: /hue\-rotate\(.*?\)/gi,
    sepia: /sepia\(.*?\)/gi
  };
  let style = getComputedStyle($('.img-container img')[0])['filter'] === 'none' ? '' : getComputedStyle($('.img-container img')[0])['filter'];
  const newFilter = `${attr}(${val}${hashUnit[attr.replace('-', '')]})`;

  style = hashRegex[attr.replace('-', '')].test(style) ? style.replace(hashRegex[attr.replace('-', '')], newFilter) : `${style}  ${newFilter}`;

  return style;
}

function uploadImage() {
  const file = $('input[type=file]')[0].files[0];
  const reader = new FileReader();

  reset();
  reader.onloadend = function() {
    const result = reader.result.indexOf('data:image') !== 0 ? img.attr('src') : reader.result;
    img.attr('src', result);
  }

  if (file) {
    reader.readAsDataURL(file);
  }
}

function reset() {
  // reset range inputs
  $('input[type="range"]').each(function() {
    $(this).val(this.defaultValue);
  });

  // reset filter
  img.css('filter', '');
}
