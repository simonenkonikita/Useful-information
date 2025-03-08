✅
/* Выбор элементов */

querySelector - метод вернёт первый на странице элемент с этим классом (тот, что выше в вёрстке). 

querySelectorAll - вернёт все подходящие под селектор элементы.

✏️ Пример написания:

<!-- index.html -->

<main id="container">
  <div class="content">
    <div class="content__item"></div>
    <div class="content__item"></div>
    <div class="content__item"></div>
  </div>
</main>

/* script.js */

let container = document.querySelector('#container');
let content = container.querySelector('.content');
let contentItem = content.querySelector('.content__item');

console.log(contentItem) // Выведет: <div class="content__item"></div>

let contentItems = content.querySelectorAll('.content__item');

console.log(contentItems); /* Выведет все элементы c классом .content__item */

❗ Возможно искать элементы по сложным составным селекторам:

/* script.js */

let cosmeticBagContent = document.querySelectorAll('section.bag div.bag .item');
console.log(cosmeticBagContent); //


✅
/* Другие способы поиска элементов */

Раньше для поиска элементов в DOM-дереве использовались методы:

getElementById (получить элемент по идентификатору);
getElementsByClassName (получить элементы по имени класса);
getElementsByTagName (получить элементы по имени тега).

❗❗❗НО сейчас эти методы не актуцальны ❗❗❗






Symbols
1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания:
