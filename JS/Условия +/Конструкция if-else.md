## Условия

Простейшая условная конструкция запускает код, если условие, на которое она настроена, имеет значение true.

Объявляется она ключевым словом if.

```javascript
if (условие) {
  // тело if
}
```

Пример

```javascript
let merry = false;

if (merry) {
  console.log("😃");
} else {
  console.log("😐");
}
```

Пример

```javascript
let teslaStockPrice = 644;

if (teslaStockPrice > 800) {
  console.log("Акцию пора продавать");
} else if (teslaStockPrice > 650) {
  console.log("Пока держим, пусть ещё подрастёт");
} else if (teslaStockPrice > 500) {
  console.log("Как дёшево, надо ещё докупить");
} else {
  console.log("Беру на все");
}
```


## Операторы НЕ, И, ИЛИ тоже условия

### Логическое НЕ / Оператор !

Делает из условия обратное: превращает true в false и наоборот.

Для этого перед условием ставят восклицательный знак !:

```javascript
let merry = true;
console.log(!merry); // false

let christmas = false;
console.log(!christmas); // true
```

```javascript
!(3 > 2) === 3 <= 2; // true.

/* Потому что это превращается в проверку false === false */
```

### Логическое И / Оператор &&

Вернёт истину, только когда две булевы переменные истинны.

Записывается эта операция с помощью двух амперсандов &&:

```javascript
let merry = true;
let christmas = false;

console.log(merry && christmas); // false
```

### Логическое ИЛИ / Оператор ||

Логическое ИЛИ служит для связи таких условий, из которых должно быть выполнено хотя бы одно.

Для этого между простыми условиями ставят два прямых слеша ||:

```javascript
true || false || false; // true
```

❗ Оператору ИЛИ достаточно, чтобы хотя бы одно простое условие было истинным

```javascript
let merry = true;
let christmas = false;

console.log(merry || christmas); // true
```

Пример

```javascript
let temperature = 36.6;

if (temperature > 36.3 && temperature <= 37.1) {
  console.log("Ваша температура в пределах нормы");
} else {
  console.log("Срочно обратитесь к врачу!");
}
```

### Логическое ИЛИ / Значение по умолчанию

Часто оператором ИЛИ присваивают переменной значение по умолчанию:

```javascript
function howDoYouDo(answer) {
  const result = answer || "да ничего";
  return result;
}

howDoYouDo("всё прекрасно"); // "всё прекрасно"
howDoYouDo(); // "да ничего"
```

Пока вы не передаёте аргумент функции howDoYouDo, её вызов возвращает установленное по умолчанию значение 'да ничего'.
Это происходит из-за того, что оператор ИЛИ из пустоты и чего-нибудь определённого выбирает определённое.

## Приоритетность операторов

Cначала выполняется логическое НЕ, потом И, а затем — ИЛИ

```javascript
const optimism = (!"Жить" && !"Быть") || "Жить и быть";

console.log(optimism); // "Жить и быть"

// сначала выполняется !, потом &&, затем ||
```

Операции в скобках выполняются первыми

```javascript
const pessimism = !"Жить" && (!"Быть" || "Жить и быть");

console.log(pessimism); // false
```