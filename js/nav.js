let closeButton = document.querySelector('.header__button');
let openButton = document.querySelector('.hero__button');
let header = document.querySelector('.header__nav');


openButton.addEventListener('click', function() {
  closeButton.hidden = false;
  header.hidden = false;
  openButton.hidden = true;
});

closeButton.addEventListener('click', function() {
  closeButton.hidden = true;
  header.hidden = true;
  openButton.hidden = false;
});
