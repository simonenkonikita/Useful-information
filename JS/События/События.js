✅
/* Реакция на действия пользователя. События*/

🔶 То, что происходит на странице или в системе, называют событием. Пользователи могут вызвать массу разных событий. 

Основные и наиболее распространённые:
'click' — клик по элементу;
'mouseover' — пользователь навёл указатель мыши на элемент;
'mouseout' — пользователь убрал указатель мыши с элемента;
'scroll' — пользователь прокручивает элемент.
'submit' - Событие отправки формы 

🔶Универсальный способ отслеживания и реакции на событие — метод addEventListener:

✏️ Пример написания:

element.addEventListener(eventName, handler);

➡️element — элемент, которому добавляем слушатель.
➡️eventName — событие, на которое нужно отреагировать. Передаётся строкой: 'click', 'scroll', 'mouseover'.
➡️handler — функция-обработчик события. Она будет вызвана, когда событие сработает (например, произойдёт клик).

✏️ Пример написания 1️⃣:

let element = document.querySelector('.my-element');

function showClick() {
  console.log('Мы кликнули по элементу');
}

element.addEventListener('click', showClick);

❗В такой записи вторым параметром обработчика указывают только имя функции без скобок. Скобки не ставят, потому что мы не вызываем функцию, а просто передаём её как аргумент. Тем самым мы говорим браузеру: «вот функция showClick, вызови её, когда сработает событие click».

✏️ Пример написания 2️⃣:

Другой способ записи удобен, если вы не собираетесь вызывать функцию в других блоках кода:

let element = document.querySelector('.my-element');

element.addEventListener('click', function () {
  console.log('Мы кликнули по элементу');
});

❗Здесь код функции-обработчика событий написан полностью внутри вызова метода addEventListener. В таких случаях обработчику можно не давать имени.


✅
/* Событие отправки формы — submit*/

🔶События, которые можно отслеживать. Например, событие отправки формы, или “submit”. 

❗Функция-обработчик срабатывает в момент отправки формы, когда все обязательные поля заполнены. 
❗При успешной отправке формы и отсутствующем атрибуте action страница перезагружается — это называется стандартным событием. 
❗Чтобы такого поведения не происходило — передайте в функцию-обработчик параметр evt. В самом начале тела функции вызовите метод evt.preventDefault() — это отменит стандартное событие.

✏️ Пример написания:

<form class='form'>
    <input class='form__input' type='text'>
    <button class='form__button' type='submit'>
        Сохранить
    </button>
</form>

let formElement = document.querySelector('.form');

formElement.addEventListener('submit', function () {
    console.log('Форма отправлена');
});


✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
/* Информация о событии. Объект event*/

🔶 Методу addEventListener передают функцию-обработчик. У неё есть параметр — объект event. Он содержит информацию и о произошедшем событии, и о «кликнутом» элементе. Параметр event можно называть как угодно, но обычно используют evt или e.

✏️ Пример написания:

const button = document.querySelector('button');

button.addEventListener('click', function (event) { // event доступен как параметр
    console.log(event); // его можно использовать в теле обработчика
});


✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
/* Цель события. Cвойство target*/

🔶У объекта event есть свойство target. В нём хранится элемент, на котором сработало событие:

✏️ Пример написания:

const button = document.querySelector('.button');

button.addEventListener('click', function (evt) {
  // в переменной eventTarget окажется элемент
  // button, на который мы кликнули

    const eventTarget = evt.target;
    eventTarget.setAttribute('disabled', true);
}); 




Symbols
1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания:
