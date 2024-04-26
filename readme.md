### Ответы вопросы и реализация функций:

---

1. В чем разница между null и undefined?
> **null** - это специальное значение, которое явно присваивается переменной, чтобы показать, что переменная явно не имеет значения
> 
> **undefined** - это значение, получаемое переменной по умолчанию (если ей не присвоили другие значение)
```js
console.log(typeof(undefined)) -> undefined
console.log(typeof(null)) -> object
```

2. Почему вывод в консоль obj.someprop.x приводит к ошибке?
```js
const obj = {};
console.log(obj.someprop.x);
```
>Ответ:
> Мы пытаемся обратиться к свойству **x** у объекта **someprop**, 
> которое является свойством **obj**. 
> Таким образом **obj.someprop** возвращает **undefined**, 
> а при попытке обратиться к свойству **x** у **undefined** 
> мы получаем **undefined**.
```js 
Решение:
const obj = {
    someprop: {
        x: "Hello world!"
    }
}
console.log(obj.someprop.x) -> Hello world!
```
3. Как проверить, является ли значение массивом?

Использовать метод **isArray()**
```js
const arr = [1, 2, 3];
console.log(Array.isArray(arr)); // вывод: true
```

4. Проверить, является ли целое число квадратом, не используя математические функции.
```js
function isSquare(number) {
    if (number < 0) {
        console.log("Отрицательное число!");
        return false;
    } //отрицательные числа не учитываем

    for (let i = 0; i * i <= number; i++) {
        if (i * i === number) {
            console.log("Да, является!");
            return true// Число является квадратом
        }
    }
    console.log("Нет, не является!");
    return false; //Число не является квадратом
}
```

5. Написать функцию, которая принимает в качестве аргумента строку и возвращает значение true,
   если строка является палиндромом, и false, если это не так. При решении задачи необходимо
   учитывать пробелы и знаки препинания, регистр символов в заданной строке не учитывать.
```js
function isPalindrom(inputStr) {

    const tempStr = inputStr.toLowerCase().replace(/[\W_]/g, ''); //удалить все знаки препинания и пробелы, привести у нижнему регистру

    // Два указателя на начало и на конец
    let start = 0;
    let end = tempStr.length - 1;

    while (start < end) {
        if (tempStr[start] !== tempStr[end]) {
            console.log("Строка не является палиндромом");
            return false; // Если не совпадает => не является
        }
        start++;
        end--;
    }

    console.log("Строка является палиндромом");
    return true; // => является
}
```

6. Напишите функцию, которая возвращает n-ую запись в последовательности Фибоначчи, где n — это число, которое вы передаёте в качестве аргумента функции.
```js
function fibonacci(n) {

    if (n < 0) {
        console.log("Введите неотрицательное число!")
        return null;
    } //Проверочка

    let first = 0;
    let second = 1;

    if (n === 0) {
        return first;
    } else if (n === 1) {
        return second;
    }

    for (let i = 2; i <= n; i++) {
        const next = first + second;
        first = second;
        second = next;
    }
    
    return second;
}
```

7. Попробуйте проанализировать, что делает следующий код?
```js
const nums = [0, 39, 28, 34, 1, 3, 6, 8, 4, 72, 7];
nums.forEach(num => {
    setTimeout(() => {console.log(num)}, num);
});
```
>Ответ:
> 
> Перебераются все элементы в порядки возрастания их индекса, 
> для каждого элемента вызывается функция **setTimeout**, 
> которая выводит элемент в консоль через определенное колличество миллисекунд, 
> равное значению самого элемента.

```text
0
1
3
4
6
8
7
28
34
39
72
```

### Библиотека JQuery:
1. Выбрать элемент с атрибутом id="rootID" и добавить класс "rootClass"
```js
$('#rootID').addClass('rootClass');
```

2. Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента с атрибутом
   id="rootID" на первом уровне вложенности
```js
$('#rootID').children('.someClassName');
```

3. Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента с атрибутом
   id="rootID" на любом уровне вложенности
```js
$('#rootID').find('.someClassName');
```

4. Выбрать элементы с атрибутом class="someClassName" и аттрибутом oid = "newDoc"
```js
$('.someClassName[oid="newDoc"]');
```

5. Выбрать последний дочерний элемент с атрибутом class="someClassName" у элемента с
   атрибутом id="rootID" и заменить текст в параграфе (p) на "Последняя строка"
```js
$('#rootID').find('.someClassName').last().find('p').text('Последняя строка');
```

### Практическая часть:

1. [ссылка на проект по ВЭБу](https://github.com/Solidbush/WebProgramming) 
2. [Тестовое задание на ReactJs](https://github.com/Solidbush/neo-flex-task)
[ТЗ](https://drive.google.com/file/d/17cwWDZUdvNRGZohhDaMrNtEMWtiFkRlX/view?usp=sharing)
3. Сейчас в процессе переписывания своего ВЭБ проекта на React [ссылка](https://github.com/Solidbush/ReactWebPart) (Уже дошел жо WebSockets)
