✅
/* Получение имени класса. Свойство className */

🔶У каждого элемента DOM есть свойство className. С его помощью можно прочитать или записать значение атрибута class:

❗❗❗Управлять стилями через свойство className неудобно.❗❗❗

✏️ Пример написания Свойство className:

<div class="princess">Елизавета</div>

// выбираем элемент c классом 'princess'
let rank = document.querySelector('.princess');
console.log(rank.className); // princess

rank.className = 'queen'; // принцесса стала королевой, перезаписываем класс на 'queen'
console.log(rank.className); // queen

❗ Если у элемента несколько классов, в свойстве className они будут разделены пробелами.

console.log(rank.className); // her majesty queen 


✅
/* Получение списка классов. Свойство classList */

🔶Для управления атрибутом class удобнее пользоваться свойством classList. Оно содержит список всех классов элемента и обладает собственными методами, чтобы управлять этими классами.

✏️ Пример написания:

<!-- В именах классов записаны марки машин Её Величества -->
<div class="bentley rolls-royce">Королевский гараж</div>

/* получаем список машин королевы в переменной,
обратившись к соответствующему элементу с селектором .bentley */

let garage = document.querySelector('.bentley');
console.log(`Гараж Её Величества: ${garage.classList}`); // Гараж Её Величества: bentley rolls-royce 
`

✅
/* Проверка наличия класса. Метод contains*/

🔶Метод contains проверяет, есть ли у элемента класс, переданный как аргумент:

✏️ Пример написания:

let garage = document.querySelector('.bentley');

garage.classList.contains('bentley'); // true — bentley есть
garage.classList.contains('jaguar'); // false — а jaguar нет


✅
/* Присвоение класса элементу. Метод add*/

✏️ Пример написания:

// в королевский гараж поступил Ягуар
garage.classList.add('jaguar');

console.log(`Гараж Её Величества: ${garage.classList}`); // bentley rolls-royce jaguar


✅
/* Удаление класса. Метод remove*/

🔶Метод remove удаляет у элемента класс, переданный как аргумент:

✏️ Пример написания:

garage.classList.remove('jaguar'); // Ягуар надоел

console.log(`Гараж Её Величества: ${garage.classList}`); // bentley rolls-royce


✅
/* Переключение класса. Метод toggle*/

🔶Метод toggle работает как add, если у элемента класс отсутствует, и как remove — если присутствует. То есть метод переключает класс у элемента:

✏️ Пример написания:

<div class="bentley rolls-royce jaguar">Королевский гараж</div>


// А если Ягуар есть, нужно от него избавиться  
garage.classList.toggle('jaguar');

console.log(`Гараж Её Величества: ${garage.classList}`); // bentley rolls-royce




Symbols
1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания:
