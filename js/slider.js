'use strict';

(function () {
  var pagination = document.querySelectorAll('.slider-pagination-btn');

  pagination.forEach(function (element) {
    element.onclick = function () {
      pagination.forEach(function (el) {
        el.classList.remove('slider-pagination-btn-active');
        event.target.classList.add('slider-pagination-btn-active');
      });
    }
  });

  window.location.hash = 'slideFirst';

  var scroll = function() {
    window.scroll(0,0);
  };

  window.onload = scroll;
}());