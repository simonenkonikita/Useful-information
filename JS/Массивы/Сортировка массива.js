✅
/* Сортировка без функции обратного вызова / sort*/

🔶Метод sort принимает на вход колбэк. Но для других методов колбэк обязателен, а для sort нет:

const myNumbers = [0, 3.14, 2.718, 13];
myNumbers.sort();
myNumbers; // [0, 13, 2.718, 3.14] 

Элементы поменялись местами, но их порядок не поддаётся логике: они не выстроены ни по возрастанию, ни по убыванию. Но логика тут всё-таки есть. Метод sort работал с элементами массива как со строками. Будь это слова, они бы выстроились по алфавиту:

const fruits = ['яблоко', 'банан', 'апельсин', 'томат'];
fruits.sort(); // ["апельсин", "банан", "томат", "яблоко"]

В алфавите нет цифр, чтобы их сортировать. Но в JS каждый символ зашифрован в системе Unicode. Любой букве, числу и знаку соответствует какой-то код. Метод sort, если не передавать ему аргументы, пытается сортировать элементы массива по возрастанию этих кодов.


✅
/* Функции обратного вызова для сортировки / sort*/

На практике метод sort редко вызывают без аргументов. По двум причинам:
нам не всегда нужна сортировка по возрастанию,
нам точно не нужно сортировать числа как строки.

❗Поэтому sort принимает на вход колбэк, в котором описана логика сортировки элементов.

❗Любой алгоритм сортировки — последовательное сравнение двух элементов. Один из них будет стоять в итоговом массиве раньше, другой — позже. Логику, по которой элементы будут сравниваться, описывают внутри колбэка метода sort.
❗Колбэк принимает на вход два аргумента — два элемента массива, которые предстоит сравнивать. Способ сравнения нужно описать в колбэке. Метод sort расставляет элементы исходя из значения, которое возвращает колбэк.

❗Есть ограничение: колбэк обязан возвращать число. Оно может быть:
Меньше нуля — первый элемент, переданный как аргумент колбэка, встанет в массиве раньше второго.
Больше нуля — наоборот, второй элемент окажется раньше первого.
Равно нулю — порядок не изменится, элементы будут стоять как в исходном массиве.

const myNumbers = [0, 3.14, 2.718, 13];

myNumbers.sort(function (a, b) {
    return a - b;

  /* Если a меньше b, вернётся отрицательное число.
  Это значит, что a должно расположиться в итоговом массиве
  раньше, b — позже. Например:

    a = 0, b = 3.14
    a - b = -3.14

  Получили отрицательное число, значит a стоит раньше b */
});

console.log(myNumbers); // [0, 2.718, 3.14, 13] — так и есть

Для чисел такой подход отлично работает: если вы хотите отсортировать массив по возрастанию, колбэк должен возвращать a - b, по убыванию — b - a.

Если же элементы массива — строки, трюк не пройдёт: вычитание одной строки из другой вернёт NaN. Придётся указывать, какая строка считается «большей», а какая — «меньшей», и прописывать для разных случаев возвращаемое значение:

/* Диагнозы записаны в том порядке,
в каком поступили пациенты. Отсортируем его по алфавиту. */

const diagnoses = [
    'мизофобия',
    'синдром упущенной выгоды',
    'боязнь красного цвета'
  ];
  
  diagnoses.sort(function(a, b) {
    /* приведём строки к нижнему регистру,
    чтобы сравнение прошло корректно */
    a = a.toLowerCase();
    b = b.toLowerCase();
  
      if (a < b) return -1; // a расположится раньше b
      if (b < a) return 1; // b расположится раньше a
  
    return 0;
  });
  
  console.log(diagnoses);
  
/* ["боязнь красного цвета", "мизофобия", "синдром упущенной выгоды"] */










  

1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯 🈷️ 🈶 🈵 🈚 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗❗ ‼️ ⁉️ ⭕ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾ ◽ ◼️ ◻️ ⬛ ⬜ ✅ 🔲 
🔳 ⚫ ⚪ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻
✏️ Пример написания: