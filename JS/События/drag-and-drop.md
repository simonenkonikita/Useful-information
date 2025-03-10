## Возможность перетаскивать элементы по странице / Механизм drag-and-drop

Добавить возможность перетаскивать элементы по странице. Такой механизм называется drag-and-drop. Чтобы реализовать его, нужно понимать, где на странице произошло событие, то есть получить координаты события. Их можно отсчитывать от верхнего левого угла: веб-страницы, окна просмотра,монитора.

❗Для каждого начала координат есть отдельное свойство.

Координаты по горизонтали и вертикали от угла веб-страницы хранятся в свойствах event.pageX и event.pageY соответственно.

```javascript
//Создаём всплывающую подсказку около элемента, по которому кликнул пользователь.

<div class="text" style="height: 1000px;">
    Что это? Чтобы узнать, щёлкните по мне два раза.
</div>
<div class="hint" style="display: none">Это же div</div>

const button = document.querySelector('.text');
const hint = document.querySelector('.hint');

button.addEventListener('dblclick', function (event) {
    hint.setAttribute('style',
        `position: absolute;
        top: ${event.pageY}px;
        left: ${event.pageX}px;
        display: block;
        background-color: rgba(255, 204, 0, 0.5)`);
});
```

Координаты относительно угла окна просмотра хранятся в свойствах event.clientX и event.clientY. 

```javascript

//Для позиционирования окна чата со специалистом, которое можно встретить на многих сайтах:

<div class="map">
    Это карта
</div>
<div class="whatIsThis">Что здесь?</div>


const whatIsThis = document.querySelector('.whatIsThis');
const map = document.querySelector('.map');

map.addEventListener('click', function(event) {
    whatIsThis.setAttribute('style', `
        display: block;
        position: fixed;
        left: ${event.clientX}px;
        top: ${event.clientY}px;
    `);
});

```

❗Свойства event.screenX и event.screenY хранят координаты относительно угла монитора, на котором открыт сайт. Они используются крайне редко.
