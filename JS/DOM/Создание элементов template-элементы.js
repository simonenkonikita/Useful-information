
✅
/* Недостатки изученных методов */

➡️Через HTML-код в виде строки и метод insertAjacentHTML

❌Большой минус такого подхода — он открывает XSS-уязвимость в безопасности сайта.

Создание и добавление элементов методами createElement, append и их аналогами

❌Плюс подхода — нет бреши в уязвимости. Минус — даже при простой вёрстке код выглядит грамоздко.


✅
/* Тег template */

🔶Тег template — заготовка вёрстки. Её используют для создания элементов. Если добавить template в HTML, содержимое тега не отобразится на сайте:

✏️ Пример написания: 

<template id="user">
  <div class="user">
    <img class="user__avatar" alt="avatar">
    <p class="user__name"></p>
  </div>
</template>

Зато в JavaScript мы можем получить этот элемент методом querySelector:

✏️ Пример написания: 

const userTemplate = document.querySelector('#user');

Чтобы получить содержимое template, нужно обратиться к его свойству content: 

✏️ Пример написания: 

const userTemplate = document.querySelector('#user').content;

❗Теперь этот элемент можно клонировать, наполнить содержимым и вставить в DOM.


✏️ Пример написания: 

const userTemplate = document.querySelector('#user').content;
const usersOnline = document.querySelector('.users-online');

// клонируем содержимое тега template
const userElement = userTemplate.querySelector('.user').cloneNode(true);

// наполняем содержимым
userElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';
userElement.querySelector('.user__name').textContent = 'Дюк Корморант';

// отображаем на странице
usersOnline.append(userElement);

❗Если понадобится ещё один такой элемент, содержимое template снова клонируют.

❗Ещё одно преимущество template перед createElement — браузер проверяет на валидность код внутри этого тега. Допускается любой корректный HTML-код. Вложенность тегов соблюдать не обязательно: так тег tr внутри template не обязан быть внутри table:

✏️ Пример написания: 

<template id="user">
  <!-- tr может быть сам по себе -->
  <tr class="data"></tr>
</template>
