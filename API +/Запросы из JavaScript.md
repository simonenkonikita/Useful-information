## Метод Fetch

### **Создаёт запрос на сервер и возвращает его ответ**

На вход fetch принимает два аргумента:

1. Первый (обязательный)

URL запрашиваемого ресурса:

```javascript
fetch("https://example.com");
```

**❗Не оставляйте пробелов в конце при указании URL-адреса.**

2. Второй аргумент — необязательный

Это объект опций. Чаще всего нужны опции method, headers и body — они отвечают за метод запроса, его заголовки и тело:

```javascript
fetch("https://example.com/users", {
  method: "POST", // метод запроса
  headers: {
    "Content-Type": "application/json", // заголовки
  },
  body: JSON.stringify({
    // тело
    username: "ivan",
  }),
});
```

❗Метод fetch асинхронный. Когда вы его вызываете, он создаёт промис, а когда этот метод получает ответ, то переводит промис в нужный статус. Ответ от сервера при этом записывается в промис, так что его можно использовать через then и catch:

```javascript
fetch("https://example.com")
  .then((res) => {
    console.log(res); // если всё хорошо, получили ответ
  })
  .catch((err) => {
    console.log("Ошибка. Запрос не выполнен");
  });
```

## Пример работы с API (JSON)

1. Находим код (куда вставляем элемент)

```javascript
const quoteElement = document.querySelector(".quote");
``` 

2. Находим кнопку по клику на которую вставляем элемент (куда вставляем элемент)

```javascript
const headerBtn = document.querySelector(".header__btn");
```

3. Функция запроса на сервис и вставки элемента в DOM

```javascript
function updateQuote() {
  fetch("https://api.kanye.rest") // Запрос на сервис
    .then((res) => {
      //Получаем данные с сервиса
      return res.json();
    })
    .then((res) => {
      // Если данные получены, вставляем их в элемент DOM
      console.log((quoteElement.textContent = res.quote));
    });
}
```

4. Обработчик запроса поклику

```javascript
headerBtn.addEventListener("click", updateQuote);
```
