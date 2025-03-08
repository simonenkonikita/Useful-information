✅
/* Изменение стиля поля при ошибке ========================= */

✏️ Пример написания: Изменение стиля поля при ошибке
(изменить стили поля, в которое ввели некорректные данные)

1️⃣Невалидному полю input добавим класс со стилем ошибки.

<form class="form" novalidate>
  <label class="form__field">
    Введите адрес электронной почты
    <input class="form__input" type="email" placeholder="Email" required>
  </label>
  <button class="form__submit">Войти</button>
</form>

2️⃣Опишем стили для класса невалидного input:

.form__input_type_error {
  border-bottom-color: red;

  /* Нижняя рамка становится красной всякий раз, 
  когда введённые данные некорректны */
} 

3️⃣Настроим поведение поля ввода. Оно должно быть разным для корректных и некорректных данных.

Для этого выделим несколько функций:

➡️showInputError — показывает элемент ошибки;
➡️hideInputError — скрывает элемент ошибки;
➡️isValid — проверяет валидность поля, внутри вызывает showInputError или hideInputError.

// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('form__input_type_error');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};

// Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid);


✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
/* Добавление span ошибки ================================= */

➡️своё сообщение об ошибке. Это элемент span с классом form__input-error:

<form class="form" novalidate>
  <label class="form__field">
    Введите адрес электронной почты
    <input class="form__input" type="email" placeholder="Email" required>
    <span class="form__input-error">Необходимо заполнить данное поле</span>
  </label>
  <button class="form__submit">Войти</button>
</form>

➡️Теперь нужно связать элемент ошибки с полем, которое ей соответствует. Надёжный способ — добавить атрибут id полю ввода и задать уникальный класс тегу span. Далее искать по этим значениям.

➡️Добавляйте id для input и уникальный класс для span сразу. Часто в формах много полей ввода: легко запутаться, какую ошибку с чем нужно связать.

<input id="email-input" class="form__input" type="email" placeholder="Email" required>
<span class="email-input-error form__input-error">Необходимо заполнить данное поле</span>

➡️Теперь id поля form__input можно получить так:

const formInput = formElement.querySelector('.form__input');

console.log(formInput.id); // "email-input"

➡️И с применением шаблонных строк найти эту ошибку:

const formError = formElement.querySelector(`.${formInput.id}-error`);

➡️Расширим возможности функций. Пусть они ещё отвечают за показ сообщения об ошибке:

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

// Выбираем элемент ошибки на основе уникального класса 
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (element) => {
  element.classList.add('form__input_type_error');
  // Показываем сообщение об ошибке
  formError.classList.add('form__input-error_active');
};

const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.remove('form__input-error_active');
};

// Остальной код такой же

➡️Под текстовым полем появляется span сообщения об ошибке.


✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
/* Изменение сообщения об ошибке , показывать разный текст для разных ошибок валидации. ================================= */

🔶Свойство validationMessage есть у всех полей ввода. В нём записан текст сообщения об ошибке. Браузер показывает его по умолчанию, когда вводят некорректные данные. Чтобы добавить это сообщение в свой код, нужно передать функции showInputError свойство validationMessage.

➡️Удалим содержимое form__input-error:

<span class="email-input-error form__input-error"></span>

➡️Добавим новые возможности в скрипт:

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

// Передадим текст ошибки вторым параметром
const showInputError = (element, errorMessage) => {
  element.classList.add('form__input_type_error');
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
  formError.classList.remove('form__input-error_active');
  // Очистим ошибку
  formError.textContent = '';
};

const isValid = () => {
  if (!formInput.validity.valid) {
    // Передадим сообщение об ошибке вторым аргументом
    showInputError(formInput, formInput.validationMessage);
  } else {
    hideInputError(formInput);
  }
};
 
// Остальной код такой же



















1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅
 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: