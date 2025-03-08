✅
/* Ссылка на родителя — parentElement */

🔶 Свойство parentElement содержит ссылку на родительский элемент:

✏️ Пример написания: Обратиться к свойству можно через точку:

const element = document.querySelector('p');

console.log(element.parentElement); // body, так как это родитель p


✅
/* Псевдомассив детей — children */

🔶 Свойство children содержит псевдомассив всех дочерних элементов указанного элемента. Псевдомассивы очень похожи на массивы, но при работе с ними есть ограничения. 

✏️ Пример написания:

/* script.js */

const body = document.querySelector('body');

console.log(body.children); // HTMLCollection(3) [p, p, p]


✅
/* Первый и последний ребёнок — firstElementChild и lastElementChild */

🔶Свойства firstElementChild и lastElementChild позволяют получить первый и последний дочерние элементы:

✏️ Пример написания:

/* script.js */

const body = document.querySelector('body');

console.log(body.firstElementChild); // <p>Ребёнок раз</p>
console.log(body.lastElementChild); // <p>Ребёнок три</p>

❗Если у элемента нет дочерних элементов, firstElementChild и lastElementChild вернут null.

✅
/* Предыдущий и следующий сосед: */

✏️ Пример написания:

/* script.js */

const element = document.querySelectorAll('p')[1];

console.log(element.previousElementSibling); // <p>Ребёнок раз</p>
console.log(element.nextElementSibling); // <p>Ребёнок три</p>

// если соседа нет — вернётся null
console.log(element.nextElementSibling.nextElementSibling); // null

❌ Все эти свойства доступны только для чтения. Перезаписать их не получится❌ 



Symbols
1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания:
