#  DOM

Если открыть страницу, то можно увидеть страницу, на которой выведены несколько фраз в виде одной строки. Если открыть исходный код страницы прямо в браузере, то там эти же фразы выводятся друг под другом, а не одной строкой.

Подобное различие связано с тем, что браузер не учитывает переводы строк в исходном HTML при формировании страницы. Его волнует только наличие тегов. Только теги влияют на то, что будет происходить. Сам HTML при этом может быть одной строкой.

Задача этого упражнения — навести красоту на странице.

Обратите внимание, что JavaScript-код исполняется после того, как страница была сформирована. Сначала пользователь видит одну строку, и только затем выполняется преобразование. Это происходит быстро, поэтому начальное состояние быстро пропадает, но сам переход заметен.

## Задание

Извлеките содержимое тега `<body>` и оберните каждую строку в тег `<p>`. Получившееся тело вставьте обратно. Чтобы получить из содержимого `<body>` независимые строки, нужно разбить тело по переводу строки.

Было:

```html
<body>
  one
  two
  three
</body>
```

Стало:

```html
<body>
  <p>one</p>
  <p>two</p>
  <p>three</p>
</body>
```

## Подсказки

- Доступ к содержимому тега `<body>` выполняется через свойство `document.body.innerHTML` — из него можно читать и в него можно писать.
- Лишние пробелы и переводы строк удаляются с помощью метода `trim()`.
- Ваш код должен выполняться — это значит, что если вы оборачиваете решение в функцию, то ее нужно вызывать.