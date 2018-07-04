'use strict';

(function () {
  var popup = document.querySelector('.pop-up');
  var btnOpen = document.querySelector('.contact-us-btn');
  var btnClose = document.querySelector('.close-button');

  btnOpen.onclick=function () {
    popup.classList.add('pop-up-active');
  }

  btnClose.onclick=function () {
    popup.classList.remove('pop-up-active');
  }

}());

