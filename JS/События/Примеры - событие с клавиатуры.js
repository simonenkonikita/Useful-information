✅
/* ПРИМЕР 1 / ВВОД ПО НАЖАТИЮ КЛАВИШИ ENTER / ВВОД ПО КЛИКУ ПО КНОПКЕ / =============================================================*/

/* КОД ПРОГРАММЫ: */

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

/* ДОБАВЛЕНИЕ СОБЫТИЯ */

/* КЛИК ПО КНОПКЕ */

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

/* ВВОД ПО НАЖАТИЮ КЛАВИШИ ENTER */

artistInput.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
  addSong(artistInput.value, titleInput.value);
    }
});

/* ВВОД ПО НАЖАТИЮ КЛАВИШИ ENTER */

titleInput.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
  addSong(artistInput.value, titleInput.value);
    }
});

❗❗❗❗❗❗/* Или сократим ввод по ENTER: */❗❗❗❗❗❗


function keyHandler(evt) {
  if (evt.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
};

titleInput.addEventListener('keydown', keyHandler);
artistInput.addEventListener('keydown', keyHandler);


✅
/* ПРИМЕР 2 / ПРОВЕРЯЕМ БЫЛА ЛИ ВВЕДЕНА В ПОЛЕ ЦИФРА, ЕСЛИ НЕТ, ТО ВЫДАЕМ ООИБКУ / =============================================================*/

<!-- index.html -->

<input id="input">
<div id="error" style="display: none"></div>
</>

/* script.js */

const input = document.querySelector('#input');
const error = document.querySelector('#error'); // Блок с ошибкой изначально скрыт

input.addEventListener('keydown', function (evt) {
  // Проверяем, была ли введена цифра
    if (Number.isNaN(Number(evt.key))) {
    // Если пользователь ввёл не цифру, показываем блок с ошибкой
    error.style.display = 'block';
    };
});







1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 
🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: