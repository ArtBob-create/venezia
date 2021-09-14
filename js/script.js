AOS.init({
  duration: 1000,
  mirror: false,
  delay: 0,
  disableMutationObserver: false,
  throttleDelay: 1,
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const enter = document.getElementById('enter');
  form.addEventListener('submit', formSend);
  enter.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert('Ошибка');
        form.classList.remove('_sending');
      }
    } else {
      alert('Заполните обязательные поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute('type') === 'checkbox' &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  //Функция теста email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});

let reg = document.getElementsByClassName('registr__point');
let s;

for (s = 0; s < reg.length; s++) {
  reg[s].addEventListener('click', function () {
    this.classList.toggle('registr__point-active');
  });
}

let expandImg = document.getElementById('expandedImg');
let productImg = document.getElementById('cardproductImg');
let cardproductImg = document.getElementsByClassName('cardproduct__img');

expandImg.src = productImg.src;

$('#ex1').zoom({
  magnify: 8,
  callback: this,
  src: expandImg.src,
});

for (let i = 0; i < cardproductImg.length; i++) {
  cardproductImg[i].addEventListener('click', function () {
    expandImg.src = this.src;
    $('#ex1').zoom({
      magnify: 8,
      callback: this,
      src: expandImg.src,
    });
  });
}
