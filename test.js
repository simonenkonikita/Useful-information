const forms = document.forms.myForm;

const select = document.forms.myForm.elements.mySelect;

// по нажатию на кнопку выведем в консоль
// значения свойства value выпадающего списка
forms.addEventListener('click', function (evt) {
 evt.preventDefault();
  console.log(select.value); // попадёт то, что выбрано
});