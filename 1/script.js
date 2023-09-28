const BTN_RIGHT = document.querySelector('.btn__right');
const BTN_LEFT = document.querySelector('.btn__left');
let value = document.querySelector('.btn__value');
let circle = document.querySelector('.circle')

// LEFT //

BTN_LEFT.addEventListener('mousedown', () => {
  if(!BTN_LEFT.classList.contains('btn__left-active')&&!BTN_LEFT.classList.contains('btn__gray')) {
    BTN_LEFT.classList.add('btn__left-active');
  }
})

BTN_LEFT.addEventListener('mouseup', () => {

  if(BTN_LEFT.classList.contains('btn__left-active')) {
    BTN_LEFT.classList.remove('btn__left-active');
  }

  if(+value.textContent > 1) {
    value.textContent = +value.textContent - 1;
    circle.style.width = +value.textContent * 20 + 'px';
    circle.style.height = +value.textContent * 20 + 'px';
  }

  if(value.textContent == 1) {
    BTN_LEFT.classList.add('btn__gray');
  } else {
    BTN_LEFT.classList.remove('btn__gray');
    BTN_RIGHT.classList.remove('btn__gray');
  }

})

// RIGHT //

BTN_RIGHT.addEventListener('mousedown', () => {

  if(!BTN_RIGHT.classList.contains('btn__right-active')&&!BTN_RIGHT.classList.contains('btn__gray')) {
    BTN_RIGHT.classList.add('btn__right-active');
  }

})

BTN_RIGHT.addEventListener('mouseup', () => {

  if(BTN_RIGHT.classList.contains('btn__right-active')) {
    BTN_RIGHT.classList.remove('btn__right-active');
  }

  if(value.textContent < 10) {
    value.textContent = +value.textContent + 1;
    circle.style.width = +value.textContent * 20 + 'px'
    circle.style.height = +value.textContent * 20 + 'px'
  }

  if(value.textContent == 10) {
    BTN_RIGHT.classList.add('btn__gray');
  } else {
    BTN_LEFT.classList.remove('btn__gray')
    BTN_RIGHT.classList.remove('btn__gray')
  }

})

//
