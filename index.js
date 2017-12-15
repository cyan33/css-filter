;(function() {
  var img = $('.img-container img');

  function setFilter(attr, val) {
    var hashUnit = {
      brightness: '%', saturate: '%', opacity: '%',
      contrast: '%', grayscale: '%', sepia: '%',
      huerotate: 'deg',
      blur: 'px'
    };
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
    var style = getComputedStyle($('.img-container img')[0])['filter'] === 'none' ? '' : getComputedStyle($('.img-container img')[0])['filter'];
    var newFilter = attr + '(' + val + hashUnit[attr.replace('-', '')] + ')';

    style = hashRegex[attr.replace('-', '')].test(style) ? style.replace(hashRegex[attr.replace('-', '')], newFilter) : style + ' ' + newFilter;

    return style;
  }

  function reset() {
    // reset range inputs
    $('input[type="range"]').each(function() {
      $(this).val(this.defaultValue);
    });

    // reset filter
    img.css('filter', '');
  }

  function uploadImage() {
    var file = $('input[type=file]')[0].files[0];
    var reader = new FileReader();

    reset();
    reader.onloadend = function () {
      img.attr('src', reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      img.attr('src', '');
    }
  }
  
  $('input[type="file"]').on('change', uploadImage);
  $('input[type="range"]').on('input', function(e) {
    img.css('filter', setFilter($(this).attr('class'), $(this).val()));
  });

  $('button.reset').click(reset);
})();
