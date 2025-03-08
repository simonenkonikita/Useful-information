✅
/* Бесконечность. Метод Number.isFinite */

🔶В JavaScript две бесконечности — Infinity и -Infinity. Это самое большое и самое малое числовые значения в языке:

✏️ Пример написания:

// деление на 0 — это бесконечность
25 / 0; // Infinity

// если разделить на 0 отрицательное число,
// получим минус бесконечность
-25 / 0; // -Infinity

// бесконечность минус что угодно — бесконечность
Infinity - 1000000000; // Infinity


✅
/* NaN — Not a Number. Метод Number.isNaN */

🔶Если JavaScript не знает, как посчитать результат арифметического выражения, он сообщает об этом специальным значением — NaN.

❗Например, NaN возвращается, если умножить число на строку:

console.log(10 * 'десять'); // NaN

❗То же самое произойдёт и в других арифметических операциях со строкой или с undefined. Исключением является только сложение со строкой — оно приводит к конкатенации:

console.log(10 / 'десять'); // NaN
console.log(10 - 'десять'); // NaN
console.log(10 + undefined); // NaN

// а здесь произойдёт конкатенация
console.log(10 + 'десять'); // "10десять" 

❗NaN относится к числовому типу данных, пусть и называется «не число»:

console.log(typeof NaN); // "number"


✅
/* Метод Number.isNaN */

🔶Когда методу Number.isNaN передают как параметр какое-нибудь выражение, он отвечает true или false на вопрос: «Правда ли, что этот параметр — NaN?» 

Number.isNaN(NaN); // true
Number.isNaN(0 / 0); // true0











Symbols
1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: