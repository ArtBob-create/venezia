const numberInput = document.querySelector('.cart__numericupdown');
const btnUp = document.querySelector('.cart__up');
const btnDown = document.querySelector('.cart__down');
const btnReset = document.querySelector('.cart__reset');

let count = numberInput.value;

numberInput.addEventListener('keyup', (e) => {
  let self = e.currentTarget;

  if (self.value == '0') {
    self.value = 1;
  }

  count = numberInput.value;

  if (count == 1) {
    btnDown.classList.add('cart__down--disabled');
  } else {
    btnDown.classList.remove('cart__down--disabled');
  }
});

function allowNumbersOnly(e) {
  var code = e.which ? e.which : e.keyCode;
  if (code > 31 && (code < 48 || code > 57)) {
    e.preventDefault();
  }
}

numberInput.addEventListener('keypress', (e) => {
  allowNumbersOnly(e);
});

numberInput.addEventListener('change', (e) => {
  let self = e.currentTarget;

  if (!self.value) {
    self.value = 1;
  }

  count = numberInput.value;

  if (count == 1) {
    btnDown.classList.add('cart__down--disabled');
  } else {
    btnDown.classList.remove('cart__down--disabled');
  }
});

btnUp.addEventListener('click', (e) => {
  e.preventDefault();

  count++;

  if (count == 1) {
    btnDown.classList.add('cart__down--disabled');
  } else {
    btnDown.classList.remove('cart__down--disabled');
  }

  numberInput.value = count;
});
btnDown.addEventListener('click', (e) => {
  e.preventDefault();

  count--;

  if (count == 1) {
    btnDown.classList.add('cart__down--disabled');
  } else {
    btnDown.classList.remove('cart__down--disabled');
  }

  numberInput.value = count;
});

btnReset.addEventListener('click', (e) => {
  e.preventDefault();

  count = 1;

  if (count == 1) {
    btnDown.classList.add('cart__down--disabled');
  } else {
    btnDown.classList.remove('cart__down--disabled');
  }

  numberInput.value = count;
});
