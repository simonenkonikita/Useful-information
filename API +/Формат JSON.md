## Формат JSON

Логика работы сервера может быть описана на языках Java, Python или C++, а не JavaScript. Так что сервер не может вернуть нам данные внутри массива или объекта — этих структур просто нет у сервера.

**JSON** - специальный формат для передачи структурированных данных. Он позволяет собирать данные в объект, а затем преобразовывать этот объект в строку для передачи в запросе. После этого эту строку превращают обратно в объект.

❗Ключи должны быть взяты в двойные кавычки — в JSON это обязательно.

❗На верхнем уровне всегда должен быть объект или массив. JSON не может содержать функций, переменных или комментариев.

```javascript
[
  {
    title: "Вектора",
    artist: "OZORA",
  },
  {
    name: "Иван",
    age: 30,
    hasDog: true,
    hasCat: false,
    dog: {
      name: "Бонни",
      age: 6,
    },
    cat: null,
  },
];
```

### Метод res.json

Метод json читает ответ от сервера в формате json и возвращает промис. Из этого промиса потом можно доставать нужные нам данные.

```javascript
fetch("https://api.kanye.rest")
  .then((res) => res.json())___
  .then((data) => {
    console.log(data);
  });
```

Поскольку метод json асинхронный, то и использовать его нужно таким образом:

```javascript
fetch("https://praktikum.yandex.ru")
  .then((res) => {
    return res.json(); // возвращаем результат работы метода и идём в следующий then
  })
  .then((data) => {
    console.log(data.user.name); // если мы попали в этот then, data — это объект
  })
  .catch((err) => {
    console.log("Ошибка. Запрос не выполнен");
  });
```

❌ Важно. Метод json — асинхронный метод. Такой код некорректен:

```javascript
fetch("https://praktikum.yandex.ru")
  .then((res) => {
    const data = res.json();
    console.log(data.user.name); // data — это промис, она ещё не готова
  })
  .catch((err) => {
    console.log("Ошибка. Запрос не выполнен");
  });
```
### Метод JSON.stringify

Метод **JSON.stringify** делает из объекта строку JSON:

```javascript
const songs = [
  {
    title: "Вектора",
    artist: "OZORA",
  },
  {
    title: "Страшно",
    artist: "Shortparis",
  },
  {
    title: "Ariadna",
    artist: "Kedr Livansky",
  },
];

const songsJSON = JSON.stringify(songs);

console.log(songsJSON);
console.log(typeof songsJSON); // "string"
```

### Метод JSON.parse

Метод JSON.parse делает обратное — преобразовывает JSON-строку в объект JavaScript:

```javascript
const songs = [
  {
    title: "Вектора",
    artist: "OZORA",
  },
  {
    title: "Страшно",
    artist: "Shortparis",
  },
  {
    title: "Ariadna",
    artist: "Kedr Livansky",
  },
];

const songsJSON = JSON.stringify(songs);

console.log(typeof songsJSON); // "string"

const songsObject = JSON.parse(songsJSON);

console.log(typeof songsObject); // "object"
console.log(songsObject[0].title); // "Вектора"
```

❗ Методу JSON.parse нельзя передать какую угодно строку:

```javascript
JSON.parse("Привет");
// SyntaxError: Unexpected token П in JSON at position 0
```

❗Строка должна быть JSON-совместимой, то есть:

```
- на верхнем уровне должен быть объект или массив;
- ключи и значения-строки должны быть в двойных кавычках;
- кроме строк JSON может содержать числовые, булевы значения или null.
```

### Методsы JSON.stringify и JSON.parse

Создают глубокую копию объектаю. \
Если в свойства объекта закралась функция, этот трюк не пройдёт.

```javascript
const user = {
  name: "Иван",
  age: 30,
  hasDog: true,
  dog: {
    name: "Бонни",
    age: 6,
  },
};

const userDeepCopy = JSON.parse(JSON.stringify(user));
```
