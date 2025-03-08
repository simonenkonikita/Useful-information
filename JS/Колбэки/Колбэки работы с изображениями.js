✅
/* ПРИМЕР 3 / Колбэк для загрузки изображений ================*/

Создадим изображение — элемент <img> — методом document.createElement. Затем назначим картинке атрибут src, чтобы браузер понял, откуда загружать изображение:

function loadImage(imageUrl) {
  // создаём элемент изображения
  const img = document.createElement('img');
  img.src = imageUrl; // указываем путь к картинке

  return img;
}

// Теперь можно вставить картинку в разметку
const img = loadImage('https://yastatic.net/q/logoaas/v1/Практикум.svg');

document.body.append(img);

код будет исполняться так:

Движок объявит функцию;
Объявит переменную img;
Запустит код функции loadImage;
Создаст элемент изображения, запишет в него ссылку на картинку;
Пока картинка загружается, создаст DOM-узел, где расположится изображение;
Как только изображение загрузится, отрисует его.

В двух последних шагах кроется проблема. Когда движок создаст DOM-узел, вёрстка «дёрнется», освободив место для нового элемента. Затем, когда изображение загрузится, вёрстка дёрнется ещё раз при появлении картинки на экране. Если изображение не загрузится вовсе, пользователь увидит такой квадрат!

У объекта изображения есть свойства onload и onerror. В них мы можем записать функции. Первая сработает, когда изображение загружено, вторая — если произошла ошибка. Запишем функции в соотвествующие свойства:

✏️ Пример написания:

/* колбэк обработки ошибки загрузки. Функция handleLoadError должна выводить в консоль сообщение */
function handleLoadError() {
  console.log('Всё идёт не по плану');
};

// колбэк, который нужно выполнить после того
// как изображение загрузится
function handleImageLoad(evt) {
  // после загрузки добавим элемент изображения в DOM
  document.body.append(evt.target);
}

// Функция для создания изображения
function loadImage(imageUrl, loadCallback, errorCallback) {
  const img = document.createElement('img');
  img.src = imageUrl;
   // Функция, которая записана в onload
  // будет вызвана после загрузки изображения
  img.onload = loadCallback;
  /* Если картинка с сервера не пришла, можно и DOM не трогать. Для этого колбэк errorCallback . */
  img.onerror = errorCallback;
}

/* Вызываем функцию с аргументами */
loadImage(
  'https://pictures.s3.yandex.net/frontend-developer/functions/dog-12345.jpg', handleImageLoad, handleLoadError);


Теперь вёрстка не дёрнется дважды — DOM-элемент создастся, только когда изображение подгружено. 
Это пример работы с асинхронным кодом. Отрисовка изображений — часть браузерного API. И взаимодействие с этим API асинхронное: браузер запросил у сервера изображение и, пока оно идёт, занялся исполнением другого кода .
Нашей задачей было организовать работу с асинхронным кодом. Как-то сказать движку: «отрисуй изображение после того, как загрузишь его». Для этого мы записали функцию отрисовки изображения в свойство onload.

✏️ Пример написания такого же кода с применением Promise:


function loadImage(imageUrl) {
  return new Promise(function(resolve, reject) {
  const image = document.createElement('img');
  image.src = imageUrl; 
  image.onerror = reject;
  image.onload = resolve; 
})}

// работать должно так
loadImage('https://pictures.s3.yandex.net/frontend-developer/functions/dog-1.jpg')
  .then((evt) => {
    document.body.append(evt.target);
  })
  .catch(() => {
    console.error('Всё идёт не по плану.');
});

  







































1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 
🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: