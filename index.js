(function() {
  var img = $('.img-container img');

  function getFilterStyleWithout(attr) {
    var hashRegex = {
      brightness: /brightness\(.*?\)/gi,
      saturate: /saturate\(.*?\)/gi,
      opacity: /opacity\(.*?\)/gi,
      blur: /blur\(.*?\)/gi,
      contrast: /contrast\(.*?\)/gi,
      grayscale: /grayscale\(.*?\)/gi,
      huerotate: /hue\-rotate\(.*?\)/gi,
      sepia: /sepia\(.*?\)/gi
    };
    var style = getComputedStyle($('.img-container img')[0])['filter'].replace(hashRegex[attr], '');
    return style === 'none' ? '' : style;
  }

  function setFilter(attr, val) {
    var hashUnit = {
      brightness: '%', saturate: '%', opacity: '%',
      contrast: '%', grayscale: '%', sepia: '%',
      huerotate: 'deg',
      blur: 'px'
    };
    return getFilterStyleWithout(attr.replace('-', '')) + ' ' + attr + '(' + val + hashUnit[attr.replace('-', '')] + ')';
  }

  function reset() {
    img.css('filter', '');
  }

  $('input[type="range"]').on('input', function(e) {
    img.css('filter', setFilter($(this).attr('class'), $(this).val()));
  });

  $('button.reset').click(function() {
    // reset range inputs
    $('input[type="range"]').each(function() {
      $(this).val(this.defaultValue);
    });

    // reset filter
    img.css('filter', '');
  })
})();
