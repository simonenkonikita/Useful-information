## Условия конструкция switch-case

Оператор switch применяют, когда в условии только один ответ правильный. Каждый вариант описывают между ключевым словом case и инструкцией break:

```javascript
switch (/ Переменная для проверки _/) {
case /_ Первое возможное значение:
Выполняемый код _/
break;
case /_ Второе возможное значение:
Выполняемый код _/
break;
...
case /_ n-ое возможное значение:
Выполняемый код _/
break
}
```

Пример написания с конструкией if-else:

```javascript
const yourNumber = "Л055";
let windowNumber;

if (yourNumber === "Л054") {
  windowNumber = 1;
} else if (yourNumber === "Л055") {
  windowNumber = 2;
} else if (yourNumber === "Л056") {
  windowNumber = 3;
} else if (yourNumber === "Л057") {
  windowNumber = 4;
} else if (yourNumber === "Л058") {
  windowNumber = 5;
}

console.log(windowNumber);
```

Пример написания switch-case:

```javascript
const yourNumber = "Л055";
let windowNumber;

switch (yourNumber) {
  case "Л054":
    windowNumber = 1;
    break;
  case "Л055":
    windowNumber = 2;
    break;
  case "Л056":
    windowNumber = 3;
    break;
  case "Л057":
    windowNumber = 4;
    break;
  case "Л058":
    windowNumber = 5;
}

console.log(windowNumber); // 2
```

## Особенности конструкции switch-case

- Каждый раз case завершается break: так движок JS понимает, что из конструкции switch-case нужно выйти.

- Если не поставить break, сработает код не только «нужного» case, но и всех под ним, для последнего case писать break не нужно.

- Можно сознательно пропустить break, чтобы прописать логику сразу нескольких случаев:

Пример

```javascript
let catName;
const cartoon = 'Зима в Простоквашино';

switch (cartoon) {
case 'Зима в Простоквашино':
case 'Весна в Простоквашино':
case 'Трое из Простоквашино':
catName = 'Матроскин';
break;
case 'Лето кота Леопольда':
catName = 'Леопольд';
}

console.log(catName); // "Матроскин"
```
## Необязательная инструкция default

У switch-case есть необязательная инструкция default. 

Сюда записывают код, который должен сработать, если ни один case не подошёл:

```javascript
let catName;
const cartoon = 'Лето кота Леопольда';

switch (cartoon) {
case 'Зима в Простоквашино':
catName = 'Матроскин';
break;
default:
catName = 'Леопольд';
}

console.log(catName); // "Леопольд"
```