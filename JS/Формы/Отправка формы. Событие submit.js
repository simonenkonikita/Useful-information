✅
/* Отправка формы. Событие submit ==================*/

🔶Кроме полей ввода в форме можно разместить кнопки. Для этого есть тег <button>:

Кнопки бывают трёх типов:
1️⃣Отправка формы на сервер — при нажатии на кнопку происходит событие submit.
2️⃣Сброс полей ввода — происходит событие reset.
3️⃣ Прочее — нет события по умолчанию, можно назначить на кнопку что угодно.

<button type="submit">Отправить</button>
<button type="reset">Сбросить данные формы</button>
<button type="button">Что-то сделать</button> 



✅
/* Событие по умолчанию submit ==================*/

Чаще всего цель формы — отправить данные на сервер для их обработки. Прямо перед отправкой происходит submit: оно перезагружает страницу.

При необходимости в обработчике события submit проверяют данные, которые ввёл пользователь, и отменяют их отправку на сервер:

<form name="myForm">
    <span>Проход на сайт разрешён только совершеннолетним</span>
  <input name="age" type="number" placeholder="Введите возраст">
  <button type="submit">Пустите меня</button>
</form>


const form = document.forms.myForm; // получаем форму

// вешаем на неё обработчик события submit
form.addEventListener('submit', function (evt) {
  // отменим стандартное поведение
  evt.preventDefault();

  // проверяем данные пользователя
});

Если в обработчике события submit вызвать evt.preventDefault, то перезагрузки страницы и отправки данных не произойдёт.


✅
/* Отправка форм на сервер ==================*/

Любой форме можно задать атрибут action. В нём указывают адрес сервера, на который эту форму нужно отправить:

<form name="form" action="https://myserverdomain.com/form-handler">
  <input type="text">
  <button type="submit">Отправить</button>
</form>

Такая форма может работать вообще без JS. Пользователь вводит данные, нажимает «Отправить» — и браузер автоматически отсылает форму на указанный адрес сервера. При этом страница перезагружается.
Но сегодня так делают редко. Обычно стандартную отправку прерывают, валидируют форму JS-кодом и отправляют на сервер им же.
В следующей теме вы узнаете, как валидировать форму. А отправлять на сервер научитесь в одном из следующих спринтов. 


✅
/* Кнопка сабмита ==================*/

❗По умолчанию любая кнопка внутри формы имеет тип submit:
❗При нажатии на кнопку происходит событие submit. Оно же происходит и при нажатии Enter, если пользователь находится в одном из полей формы. Поэтому дополнительные обработчики нажатия клавиш для сабмита делать не нужно.


✅
/* Старый код ==================*/

Иногда вместо тега <button type="submit"> можно увидеть <input type="submit">. Это одинаковые элементы, но второй вариант актуален для старых браузеров.
Сейчас нет никаких причин использовать input для отправки формы, ведь тег button намного удобнее. В него можно вложить разметку и картинки, а с input это сделать сложно.



{/* ПРИМЕР */}

Новая песню при отправке формы. 

const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');
{/* НАходим форму по name в HTML */}
const form = document.forms.add;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songsContainer.append(songElement);
}

{/* пишем обработчик событий submit */}
form.addEventListener('submit', function (evt) {
  addSong(artistInput.value, titleInput.value);
  artistInput.value = '';
  titleInput.value = '';
  evt.preventDefault(); /* отменяем перезагрузку страницы */
}); 

{/* ВМЕСТО */}

addButton.addEventListener('click', function (evt) {
  addSong(artistInput.value, titleInput.value);
  artistInput.value = '';
  titleInput.value = '';
});





















1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ 
❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 
🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: