✅
/* Блокируем кнопку отправки формы ========================= */

Функция isValid валидирует только один input. Но нужно проверить все поля, чтобы настроить статус кнопки. Если все поля валидны — активировать кнопку, если хотя бы одно нет — заблокировать.

Для этого создадим функцию hasInvalidInput. Она принимает массив полей формы и возвращает true, если в нём хотя бы одно поле не валидно, и false, если все валидны.

Для такой проверки подходит метод some. Используем его внутри hasInvalidInput и пройдём по массиву, чтобы найти невалидный input:

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
        // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

Функция hasInvalidInput только проверяет наличие невалидного поля и сигнализирует, можно ли разблокировать кнопку сабмита. Но она ничего не делает с самой кнопкой «Отправить».

Для стилизации нужна функция toggleButtonState. Именно она отключает и включает кнопку. Для этого функция hasInvalidInput проверяет валидность полей и возвращает true или false. На их основе toggleButtonState меняет состояние кнопки:

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
        buttonElement.disabled = true;
    buttonElement.classList.add('form__submit_inactive');
  } else {
        // иначе сделай кнопку активной
        buttonElement.disabled = false;
    buttonElement.classList.remove('form__submit_inactive');
  }
};

Для отключения кнопки мы обратились к свойству disabled объекта buttonElement — подробнее об этом в уроке про работу с атрибутами через встроенные свойства. Также вы можете управлять атрибутами через специальные методы: setAttribute и removeAttribute. Какой бы способ вы ни выбрали — придерживайтесь однообразности в коде. 

Функция переключения кнопки готова. Осталось понять, где её вызвать.

Нужно сверять состояние кнопки при каждом изменении полей формы. Поэтому toggleButtonState вызывают внутри обработчика события input.
Это можно сделать после вызова функции isValid:

const setEventListeners = (formElement) => {
  // Найдём все поля формы и сделаем из них массив
const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  // Найдём в текущей форме кнопку отправки
const buttonElement = formElement.querySelector('.form__submit');

inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', () => {
    isValid(formElement, inputElement);

          // Вызовем toggleButtonState и передадим ей массив полей и кнопку
    toggleButtonState(inputList, buttonElement);
  });
});
};

Осталась одна проблема. Кнопка блокируется при неверных данных, но до начала их ввода она активна. 
Чтобы это исправить, нужно заранее вызвать функцию toggleButtonState внутри функции setEventListeners:

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');

    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);

  // ...
};

















1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅
 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: