✅
/* ПРИМЕР / ДОБАВЛЕНИЕ ЛАЙКОВ ==================*/

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;
  /*  ДОБАВЛЕНИЕ ЛАЙКОВ ==================*/
  songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active')
  });

  songsContainer.append(songElement);
  artistInput.value = '';
  titleInput.value = '';
}

function keyHandler(evt) {
  if (evt.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
}

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown', keyHandler);
titleInput.addEventListener('keydown', keyHandler);



✅
/* ПРИМЕР 2/ ДОБАВЛЕНИЕ ЛАЙКОВ- ЗАМЕНА КОДА ДОБАВЛЕНИЯ СЛУШАТЕЛЯ КАЖДОМУ ЛАЙКУ, НА ДИЛИГИРОВАНИЕ РОДИТЕЛЮ (СМ ФАЙЛ ДЕЛЕГИРОВАНИЕ)==================*/


/*  НОВЫЙ КОД ДОБАВЛЕНИЕ ЛАЙКОВ ==================*/

songsContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('song__like')) {
       evt.target.classList.toggle('song__like_active');
   }
});


/*  ВМЕСТО ДОБАВЛЕНИЕ ЛАЙКОВ ==================*/
 songElement.querySelector('.song__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('song__like_active')
});




1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 
🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: