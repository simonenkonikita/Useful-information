✅
/* Сравнение свойств объекта =======================================================*/

🔶Функция (isEqual), которая сравнивает два объекта по свойствам и значениям. Если наборы ключей со значениями обоих объектов совпадают, функция должна вернуть true, иначе — false.

✏️ Пример написания:

function isEqual(firstObj, secondObj) {
  const firstKeys = Object.keys(firstObj);
  const secondKeys = Object.keys(secondObj);

  // проверим, одинаковое ли количество ключей в объектах
  if (firstKeys.length !== secondKeys.length) {
    // если нет, то всё: объекты точно не равны
    return false;
  }

  /* проверим, что для каждого ключа первого объекта
  значения в первом и втором объекте равны */
  return firstKeys.every(function (key) {
    return firstObj[key] === secondObj[key];
  });
} 

/* Объекты для сравнения 
 */
const first = {
  property: 'value',
  anotherProperty: 'another value'
};

const second = {
  property: 'value',
  anotherProperty: 'another value'
};

const third = {
  property: 'value',
  anotherProperty: 'one more value'
};

/* Вызываем функцияю */

isEqual(first, second); // true
isEqual(second, third); // false


✅
/* Сравнение объектов по ссылке =======================================================*/

🔶Функцию (compare) для сравнения двух объектов по ссылке.


function compare(firstObj, secondObj) {
  const res = firstObj === secondObj;
  return res;
}

/* Объекты для сравнения  */

const first = {
property: 'value'
};

const second = {
property: 'value'
};

const third = second;

/* Вызываем функцияю */

compare(first, second); // false
compare(second, third); // true 





1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅
 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: