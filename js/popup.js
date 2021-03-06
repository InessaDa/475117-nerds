(function () {
  var popup = document.querySelector('.pop-up');
  var btnOpen = document.querySelector('.contact-us-btn');
  var btnClose = document.querySelector('.close-button');
  var name = popup.querySelector('#name');
  var email = popup.querySelector('#e-mail');
  var storage = localStorage.getItem('email');

  btnOpen.onclick = function () {
    event.preventDefault();
    popup.classList.add('pop-up-active');

    if (storage) {
      email.value = storage;
      name.focus();
    } else {
      name.focus();
    }
  };

  btnClose.onclick = function () {
    popup.classList.remove('pop-up-active');
    popup.classList.remove("modal-error");
  }

  popup.addEventListener("submit", function (event) {
    if (!name.value || !email.value) {
      event.preventDefault();
      popup.classList.remove('modal-error');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('modal-error');
    } else {
      localStorage.setItem("[name=name]", name.value);
    }
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains('pop-up-active')) {
        popup.classList.remove('pop-up-active');
        popup.classList.remove('modal-error');
      }
    }
  });

}());


