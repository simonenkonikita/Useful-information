✅
/* Добавление элементов на страницу*/

🔶 Существует 5 методов добавления элементов на страницу. Их добавляют относительно других DOM-элементов: перед или за ними, вместо или внутрь.

➡️node.append(...nodes or strings) — добавляет узлы или строки в конец node;
➡️node.prepend(...nodes or strings) — в начало node;
➡️node.before(...nodes or strings) — до node;
➡️node.after(...nodes or strings) — после node;
➡️node.replaceWith(...nodes or strings) — заменяет node заданными узлами или строками.

❗Все эти методы принимают на вход несколько параметров — элементов или текстовых блоков. 
❗Параметры перечисляются через запятую. 
❗Таким методам можно передавать даже HTML-код в виде строк, как мы делали это с innerHTML или insertAdjacentHTML. Но мы так не поступим из-за риска XSS-уязвимости.


✅
/* Как добавить элемент на страницу? */

➡️Чтобы добавить элемент, нужна ссылка на узел, относительно которого вставляется элемент. Для этого создайте элемент через createElement или используйте метод querySelector:

➡️Кроме элемента, в который будем добавлять, нужно создать и элемент, который добавляем:

➡️Методом append добавьте listItem в конец list:

✏️ Пример написания:

const list = document.querySelector('.todo-list');

const listItem = document.createElement('li');
listItem.textContent = 'Полить цветы';

// добавляем элемент списка в конец списка
list.append(listItem);

➡️Метод append устроен так, что принимает на вход неограниченное количество аргументов. Если нужно добавить несколько элементов сразу, append это позволяет:

✏️ Пример написания:

const list = document.querySelector('.todo-list');

const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

list.append(listItem1, listItem2, listItem3);

✅
/* «Раскладывание» массива аргументов */

🔶 Методы append, prepend, before, after и replaceWith принимают на вход любое количество аргументов. Это значит, что при передаче аргументов можно пользоваться «раскладыванием» массива аргументов.DOM

✏️ Пример написания:

const list = document.querySelector('.todo-list');

// массив дел на сегодня
const tasks = [
  'Сделать проектную работу',
  'Погулять с собакой',
  'Пройти туториал по Реакту'
];

// создадим из массива дел массив элементов
const taskElements = [];
for (let i = 0; i < tasks.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = tasks[i];
    taskElements[i] = listItem;
}

// добавим элементы в DOM с использованием цикла
for (let i = 0; i < taskElements.length; i++) {
    list.append(taskElements[i])
}






Symbols
1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания:
