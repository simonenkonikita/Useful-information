✅
/* Передача объекта по ссылке ===============================*/

🔶Функция (copy), которая будет принимать на вход объект, копировать его и возвращать новый. Этот новый объект должен обладать тем же самым набором методов и свойств, но быть независимым. То есть при изменении исходного объекта его копия должна остаться прежней.

✏️ Пример написания:

function copy(obj) {
    /* сначала создадим пустой объект куда будут копированы данные */
	const res = {};
    /* Переводим объект в массив, и перебираем каждое значение и присваеваем переменную key */
   Object.keys(obj).forEach(function (key) {
    /* Передаем значение элементов в  новый объект*/
    res[key] = obj[key];
  });

  /* Возвращаем значение нового объекта */
	return res;
}

  /* Объект который нужно передать */
const firstObj = {
	one: 1,
	two: 2,
	three: 3
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

console.log(firstObj); // { one: 1, three: 3, two: 2 }
console.log(secondObj); // { one: 1, three: 3, two: 2 }
console.log(thirdObj); // { one: 1, three: 3, two: 2 }

firstObj.four = 4;

console.log(firstObj); // { four: 4, one: 1, three: 3, two: 2 }
console.log(secondObj); // { four: 4, one: 1, three: 3, two: 2 }

// thirdObj не изменился
console.log(thirdObj); // { one: 1, three: 3, two: 2 }


Резюмируем: то, как передаётся переменная, определяется её типом. Примитивы (number, string, boolean, null, undefined) передаются и сравниваются по значению. 
Объекты (а также функции и массивы, ведь они тоже объекты) передаются и сравниваются по ссылке.




















1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅
 🔲 🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: