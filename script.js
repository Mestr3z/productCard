
// Раскрытие карточки

const questionSeconds = document.querySelectorAll('.question__second');

questionSeconds.forEach(questionSecond => {
questionSecond.addEventListener('click', () => {

const isOpen = questionSecond.classList.contains('open');


questionSeconds.forEach(section => {
section.classList.remove('open');
section.classList.remove('rotate');
});


if (!isOpen) {
questionSecond.classList.add('open');
questionSecond.classList.add('rotate');
}
});
});


const minusButton = document.querySelector('.button__minus');
const plusButton = document.querySelector('.button__plus');
const numberElement = document.querySelector('.button__number');
const costElement = document.querySelector('.product__price_details-cost');

let price = 7390;
let numberOfPallets = 1;

function updatePriceAndNumber() {
  costElement.textContent = price * numberOfPallets;
  numberElement.textContent = numberOfPallets;
}

minusButton.addEventListener('click', () => {
  if (numberOfPallets > 1) {
    numberOfPallets--;
    updatePriceAndNumber();
  }
});


plusButton.addEventListener('click', () => {
  numberOfPallets++;
  updatePriceAndNumber();
});


function noDigits(event) {
  if ("1234567890!@#$%^&*()_~`№;%:?*()-+=,<>/'|\/{}[].".indexOf(event.key) != -1)
    event.preventDefault();
}


let phoneInput = document.getElementById("tel");

function mask(event) {
  event.keyCode && (keyCode = event.keyCode);
  let pos = this.selectionStart;
  if (pos < 3) event.preventDefault();

  let matrix = "+7 (___) ___-__-__",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, ""),
    newValue = matrix.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
    });

  i = newValue.indexOf("_");
  if (i != -1) {
    i < 5 && (i = 3);
    newValue = newValue.slice(0, i);
  }

  let reg = matrix
    .substr(0, this.value.length)
    .replace(/_+/g, function (a) {
      return "\\d{1," + a.length + "}";
    })
    .replace(/[+()]/g, "\\$&");
  reg = new RegExp("^" + reg + "$");
  if (
    !reg.test(this.value) ||
    this.value.length < 5 ||
    (keyCode > 47 && keyCode < 58)
  )
    this.value = newValue;
  if (event.type == "blur" && this.value.length < 5) this.value = "";
}

phoneInput.addEventListener("input", mask, false);
phoneInput.addEventListener("focus", mask, false);
phoneInput.addEventListener("blur", mask, false);
phoneInput.addEventListener("keydown", mask, false);
phoneInput.addEventListener("mouseup", (event) => {
  event.preventDefault();
  if (phoneInput.value.length < 4) {
    phoneInput.setSelectionRange(4, 4);
  } else {
    phoneInput.setSelectionRange(
      phoneInput.value.length,
      phoneInput.value.length
    );
  }
});


function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  const burger = document.querySelector('.header__burger');
  burger.classList.toggle('cross');
}

document.addEventListener('click', function(event) {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.header__burger');

  if (!menu.contains(event.target) && !burger.contains(event.target) && menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('cross');
  }
});

document.addEventListener('keydown', function(event) {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.header__burger');

  if (event.key === 'Escape' && menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('cross');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  let headers = document.querySelectorAll('.column__header');

  headers.forEach(function(header) {
      header.addEventListener('click', function() {
          if (this.nextElementSibling.style.display === 'none' || !this.nextElementSibling.style.display) {
              this.nextElementSibling.style.display = 'block';
              header.querySelector(".footer__down").style.transform = "rotate(180deg)";
          } else {
              this.nextElementSibling.style.display = 'none';
              header.querySelector(".footer__down").style.transform = "rotate(0deg)";
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");

  menuButton.addEventListener("click", function () {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
                  <button class="popup__close-btn" id="closeButton"> </button>
                  <h2 class="popup__title">Заказать звонок</h2>
                  <p class="popup__text">Оставьте свой номер, мы перезвоним в ближайшее время.</p>
                  <p class="popup__input_title">Как к Вам обращаться</p>
                  <input class="popup__input" type="text" id="nameInput" placeholder="Введите Ваше имя">
                  <p class="popup__input_title">Ваш номер телефона *</p>
                  <input class="popup__input" type="tel" id="tel" placeholder="+7 (___) ___-__-__" required>
                  <p class="popup__text_rules">Отправляя данные, Вы соглашаетесь с</p>
                  <a href="#" class="popup__link">Правилами обработки персональных данных</a>
                  <button class="popup__button" id="submitButton">ОТПРАВИТЬ</button>
              `;

    popupContainer.appendChild(popup);
    document.body.appendChild(popupContainer);

    let nameInput = document.getElementById("nameInput");

    nameInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
    });

    let phoneInput = document.getElementById("tel");

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();

      let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        newValue = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });

      i = newValue.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
      }

      let reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = newValue;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    phoneInput.addEventListener("input", mask, false);
    phoneInput.addEventListener("focus", mask, false);
    phoneInput.addEventListener("blur", mask, false);
    phoneInput.addEventListener("keydown", mask, false);
    phoneInput.addEventListener("mouseup", (event) => {
      event.preventDefault();
      if (phoneInput.value.length < 4) {
        phoneInput.setSelectionRange(4, 4);
      } else {
        phoneInput.setSelectionRange(
          phoneInput.value.length,
          phoneInput.value.length
        );
      }
    });

    function closePopup() {
      const popupContainer = document.querySelector(".popup-container");
      if (popupContainer) {
        document.body.removeChild(popupContainer);
        document.body.style.overflow = "auto";
      }
    }

    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", closePopup);

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function () {
      closePopup();
    });

    window.addEventListener("click", function (event) {
      if (event.target === popupContainer) {
        closePopup();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closePopup();
      }
    });

    document.body.style.overflow = "hidden";
  });
});