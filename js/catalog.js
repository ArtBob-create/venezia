setTimeout(
  init2slider('id66', 'id66b', 'id661', 'id662', 'id66i1', 'id66i2'),
  0
);

function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
  var slider = document.getElementById(idX);
  var between = document.getElementById(btwX);
  var button1 = document.getElementById(btn1X);
  var button2 = document.getElementById(btn2X);
  var inpt1 = document.getElementById(input1);
  var inpt2 = document.getElementById(input2);

  var min = inpt1.min;
  var max = inpt1.max;

  /*init*/
  var sliderCoords = getCoords(slider);
  button1.style.marginLeft = '0px';
  button2.style.marginLeft = slider.offsetWidth - button1.offsetWidth + 'px';
  between.style.width = slider.offsetWidth - button1.offsetWidth + 'px';
  inpt1.value = min;
  inpt2.value = max;

  inpt1.onchange = function (evt) {
    if (parseInt(inpt1.value) < min) inpt1.value = min;
    if (parseInt(inpt1.value) > max) inpt1.value = max;
    if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
      var temp = inpt1.value;
      inpt1.value = inpt2.value;
      inpt2.value = temp;
    }

    var sliderCoords = getCoords(slider);
    var per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
    var per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
    var left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
    var left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

    button1.style.marginLeft = left1 + 'px';
    button2.style.marginLeft = left2 + 'px';

    if (left1 > left2) {
      between.style.width = left1 - left2 + 'px';
      between.style.marginLeft = left2 + 'px';
    } else {
      between.style.width = left2 - left1 + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  };
  inpt2.onchange = function (evt) {
    if (parseInt(inpt2.value) < min) inpt2.value = min;
    if (parseInt(inpt2.value) > max) inpt2.value = max;
    if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
      var temp = inpt1.value;
      inpt1.value = inpt2.value;
      inpt2.value = temp;
    }

    var sliderCoords = getCoords(slider);
    var per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
    var per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
    var left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
    var left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

    button1.style.marginLeft = left1 + 'px';
    button2.style.marginLeft = left2 + 'px';

    if (left1 > left2) {
      between.style.width = left1 - left2 + 'px';
      between.style.marginLeft = left2 + 'px';
    } else {
      between.style.width = left2 - left1 + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  };

  /*mouse*/
  button1.onmousedown = function (evt) {
    var sliderCoords = getCoords(slider);
    var betweenCoords = getCoords(between);
    var buttonCoords1 = getCoords(button1);
    var buttonCoords2 = getCoords(button2);
    var shiftX2 = evt.pageX - buttonCoords2.left;
    var shiftX1 = evt.pageX - buttonCoords1.left;

    document.onmousemove = function (evt) {
      var left1 = evt.pageX - shiftX1 - sliderCoords.left;
      var right1 = slider.offsetWidth - button1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;
      button1.style.marginLeft = left1 + 'px';

      shiftX2 = evt.pageX - buttonCoords2.left;
      var left2 = evt.pageX - shiftX2 - sliderCoords.left;
      var right2 = slider.offsetWidth - button2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2;

      var per_min = 0;
      var per_max = 0;
      if (left1 > left2) {
        between.style.width = left1 - left2 + 'px';
        between.style.marginLeft = left2 + 'px';

        per_min = (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
        per_max = (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
      } else {
        between.style.width = left2 - left1 + 'px';
        between.style.marginLeft = left1 + 'px';

        per_min = (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
        per_max = (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
      }
      inpt1.value = parseInt(min) + Math.round(((max - min) * per_min) / 100);
      inpt2.value = parseInt(min) + Math.round(((max - min) * per_max) / 100);
    };
    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };

    return false;
  };

  button2.onmousedown = function (evt) {
    var sliderCoords = getCoords(slider);
    var betweenCoords = getCoords(between);
    var buttonCoords1 = getCoords(button1);
    var buttonCoords2 = getCoords(button2);
    var shiftX2 = evt.pageX - buttonCoords2.left;
    var shiftX1 = evt.pageX - buttonCoords1.left;

    document.onmousemove = function (evt) {
      var left2 = evt.pageX - shiftX2 - sliderCoords.left;
      var right2 = slider.offsetWidth - button2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2;
      button2.style.marginLeft = left2 + 'px';

      shiftX1 = evt.pageX - buttonCoords1.left;
      var left1 = evt.pageX - shiftX1 - sliderCoords.left;
      var right1 = slider.offsetWidth - button1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;

      var per_min = 0;
      var per_max = 0;

      if (left1 > left2) {
        between.style.width = left1 - left2 + 'px';
        between.style.marginLeft = left2 + 'px';
        per_min = (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
        per_max = (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
      } else {
        between.style.width = left2 - left1 + 'px';
        between.style.marginLeft = left1 + 'px';
        per_min = (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
        per_max = (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
      }
      inpt1.value = parseInt(min) + Math.round(((max - min) * per_min) / 100);
      inpt2.value = parseInt(min) + Math.round(((max - min) * per_max) / 100);
    };
    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };

    return false;
  };

  button1.ondragstart = function () {
    return false;
  };
  button2.ondragstart = function () {
    return false;
  };

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
    };
  }
}

//accordion
let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');

    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

//show
let show = document.querySelector('.catalog__show-b');
let hidden = document.querySelector('.catalog__hidden');

show.addEventListener('click', () => {
  hidden.classList.toggle('catalog__hidden-active');
});

$(function () {
  var filter = $('[data-filter]');

  filter.on('click', function (event) {
    event.preventDefault();
    var cat = $(this).data('filter');

    if (cat === 'all') {
      $('[data-cat]').removeClass('hide');
    } else {
      $('[data-cat]').each(function () {
        var work_cat = $(this).data('cat');

        if (work_cat !== cat) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }
  });
});

let sortRelevance = document.querySelector('.sort-relevance');
let sortPrice = document.querySelectorAll('.sort-price');

sortRelevance.addEventListener('change', () => {
  for (i = 0; i < acc.length; i++) {
    sortPrice[i].addEventListener('click', function () {
      let v = this.value;
      var items = document.querySelectorAll('.product__item');
      var parent = document.querySelector('.catalog__card');
      var SortElements = new Object();
      items.forEach(function (item, indx) {
        var itemValue = parseInt(
          item
            .querySelector('.price')
            .textContent.replace('Цена', '', 'РУБ', '')
            .replace(/\s+/g, '')
        );
        SortElements[itemValue] = { element: item, index: indx };
      });
      var keys = Object.keys(SortElements);
      function compareNumeric(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a < b) return 1;
        if (a > b) return -1;
      }
      if (v == 2) {
        keys.sort(compareNumeric);
      } else if (v == 1) {
        keys.sort(compareNumeric).reverse();
      }
      keys.map(function (key, indx) {
        parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
      });
    });
  }
});
