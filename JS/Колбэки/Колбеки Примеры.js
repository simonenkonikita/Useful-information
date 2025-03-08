✅
/* ПРИМЕР 1 /=================================================*/

Функциональность для отображения твитов на странице. 
Делать это будет функция. 
Она принимает на вход текст твита и селектор контейнера, куда нужно вставить этот текст:

function handleError(tweet) {
    const newTweetContainer = document.createElement('div');
    newTweetContainer.textContent = tweet;
    document.body.append(newTweetContainer);
  }
  
  // Добавим третий параметр — колбэк
  function insertTweet(tweet, containerSelector, callback) {
      const tweetContainer = document.querySelector(containerSelector);
  
      if (!tweetContainer) {
          // Вызываем колбэк, если нет контейнера
          callback(tweet);
  
          return;
      }
  
      tweetContainer.textContent = tweet;
  }
  
// Вызов будет выглядеть так:
insertTweet('Твит, адресованный Илону Маску', '.tweets', handleError); 

✅ У такого подхода сразу два преимущества:
➡️Функциональность обработки ошибки собрана в одном месте — её удобно менять и дополнять.
➡️Теперь можно заставить функцию insertTweet делать разные вещи в разных ситуациях:


/* Если контейнер не найден на странице,
 колбэк создаст его и добавит туда твит */
  
 insertTweet(
    'Твит, адресованный Илону Маску',
    '.tweets',
    function () {
      const newTweetContainer = document.createElement('div');
      newTweetContainer.textContent = tweet;
      document.body.append(newTweetContainer);
    }
  );
 
  /* В этом случае, если контейнер для твитов
  не найден, в консоли окажется это сообщение,
  и больше ничего не произойдёт */
 
  insertTweet('Какой-то странный тред', '.tweets', function () {
      console.log('Да ну его! Не буду ничего делать');
});
  

✅
/* ПРИМЕР 2 / Пербор масива циклом for =======================*/

Реализация метода forEach, без forEach


const tweets = [
    'Какой-то странный тред',
    'Твит, адресованный Илону Маску',
    'Ответ на инфоповод'
  ];
  
  function forEach(arr, callback) {
   for (let i = 0; i < arr.length; i += 1)  /* означает, что цикл будет выполняться, пока значение i меньше длины массива (свойство length) */
   callback(arr[i]) /* на каждой итерации передаем текущее значение массива в колбэк: callback(arr[i]). */
  }
  
  forEach(tweets, function (tweet) {
      console.log(tweet); 
});




✅
/* ПРИМЕР 2 / Показать код спустя 2 секунты ==============================*/

function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms)
    }
  )
};

wait(2000)
  .then(() => console.log('Прошло 2000мс')
);











1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 
🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: