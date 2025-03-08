✅
/* Таймеры ==================================================*/

🔶Таймеры — это специальные функции внутри браузера. Они позволяют запускать код с задержкой. То есть таймером мы говорим браузеру: «Немного подожди, а затем исполняй этот код». Так можно настроить окно чата на сайте, которое возникает спустя какое-то время после открытия страницы; или автоматическое обновление окна электронной почты.

🔶Есть два метода для установки таймеров: setTimeout и setInterval. Разберём оба.

✅
/* Установка таймера: setTimeout =============================*/

Метод setTimeout ждёт определённое время, после чего исполняет какой-то код. На вход этот метод принимает:

➡️✏️ Пример написания 1:

setTimeout(function () {
  console.log('С загрузки страницы прошло 5 секунд');
}, 2000)

/* Через 2 секунд (то есть 2 тысяч миллисекунд) после загрузки страницы в консоли появится сообщение. */

➡️✏️ Пример написания 2:

setTimeout(() => {
  console.log('С загрузки страницы прошло 5 секунд');
}, 5000)

/* Через 5 секунд (то есть 5 тысяч миллисекунд) после загрузки страницы в консоли появится сообщение. */


➡️✏️ Пример написания 3:
function showMessage(message) {
  console.log(message);
}

setTimeout(showMessage, 10000, 'С загрузки страницы прошло 10 секунд'); 


➡️первым аргументом колбэк: код, который нужно выполнить;
➡️вторым аргументом — паузу в миллисекундах, которую нужно выждать, прежде чем исполнять код колбэка;
➡️ аргументы, которые нужно передать колбэку на вход.



✅
/* Удаление таймера: clearTimeout =============================*/

🔶Таймер можно удалять методом clearTimeout. Для этого таймер нужно записать в переменную, а затем эту переменную передать методу clearTimeout. Например, в интернет-банке пользователя нужно выкидывать из системы, если он не взаимодействует с сайтом какое-то время. Это удобно сделать таймером: установить его при загрузке страницы, и при каждом действии пользователя сбрасывать:

function logOut() {
  // здесь логика «выкидывания» пользователя из системы
}

// через 300 секунд выкинем пользователя
let timer = setTimeout(logOut, 300000);

// если пользователь кликнул куда-то,
// сбросим таймер и будем ждать заново
window.addEventListener('click', function () {
clearTimeout(timer);

timer = setTimeout(logOut, 300000);
});


✅
/* Циклический таймер: setInterval ===========================*/

🔶Метод setInterval устанавливает циклический таймер. Он позволяет вызывать колбэк много раз, через заданные промежутки времени. Например, сделать автоматическую проверку почты:

function checkEmail() {
  // Тут код для проверки, не появилось ли
  // на почтовом сервере новых писем.
}

// Ящик будет обновляться каждые десять секунд
setInterval(checkEmail, 10000);


✅
/* Удаление Циклического таймера: clearInterval ===========================*/

🔶Когда таймер не нужен, его следует удалить, чтобы не тратить ресурсы браузера. Для этого нужно передать таймер методу clearInterval:

const interval = setInterval(checkEmail, 10000);

// Если пользователь переключил вкладку,
window.addEventListener('blur', function () {
    clearInterval(interval); // удаляем таймер.
});

// Если пользователь вернулся на вкладку,
window.addEventListener('focus', function() {
    interval = setInterval(checkEmail, 10000); // снова запускаем таймер.
});

❗❗❗Какую бы задержку мы ни передали на вход методам setTimeout и setInterval, реальная пауза всегда чуть больше. Это связано с загруженностью процессора: когда колбэк поступает на выполнение, ему приходится отстоять в очереди из других задач.


✅
/* ПРИМЕР / текущее время в консоль ==========================*/

Функция, которая выводит текущее время в консоль.

function consoleDate() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

/* код, чтобы показывать текущее время в консоли каждую секунду. */
setInterval(consoleDate, 1000);







1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 
🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: