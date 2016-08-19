/**
 * Created by arb1tr on 18.08.16.
 */

// Всегда используем ключевое слово var для объявления перменных.
// Чтобы сохранять глобальное пространство имен в чистоте.
// Всегда использовать литералы для создания переменных
var arr = [];
var obj = {};
var reg = /ab+c/;

// В случае с регулярными выражениями, необходимо использовать функцию конструктор,
// только если выражение будет изменяться или оно не известно заранее
var reg = new RegExp('ab+c');

// Для строчных переменных использовать одинарные кавычки, не допускать длинных строк,
// более ~80 символов. Для переноса строк использовать знак +
var str = 'Contrary to popular belief, Lorem Ipsum is not simply random text. ' +
    'It has roots in a piece of classical Latin literature from 45 BC,' +
    ' making it over 2000 years old. Richard McClintock, a Latin professor at';

/** ES6 - ECMAScript 2015 */
// Используем обратные кавычки ``
var str = `Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old. Richard McClintock, a Latin professor at`;

/** ES6 - ECMAScript 2015 */
// Для включения переменных внутрь строки используем строковую интерполяцию
function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
        throw new Error(
            `Пользователю ${user.name} не разрешено ${action}.`);
    }
}

// Для именования функий и переменных используем camelCase
var personalData = ['FirstName', 'LastName'];

function getFullName() {

    // Для програмного создания строк используем Array.join() вместо объединения строк
    return personalData.join(' ');
}

// Для именования конструкторов PascalCase
function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

// Для именования констант UpperCase
var city = 'GRODNO';
var event = 'SERVER_EVENT';

// Для именования внутренних перменных и методов объекта используем _
var _name = 'name';

function _getName() {
    return _name;
}

// Создавая ссылку на this используем _this
function log() {
    var _this = this;
    return function() {
        console.log(_this);
    };
}

// Все обьявления переменных поднимаються вверх блока кода, Условные операторы в JavaScript
// не имеют своей области видимости, переменные поднимаем вверх блока функции,
// чтобы исключить проблемы с hoisting - http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
function someFunction() {
    var arr = [1, 2, 3, 4, 5],
        obj = {},
        length = arr.length,
        func,
        i;

    if (length) {

        // Присваивание переменных допускаеться в любом месте, вверх блока обязательно поднимаеться
        // только обьявление переменных
        i = 1;

        for (i; i<length; i++) {
            console.log(obj);
        }

        // Обьявление функций(не присваивание) не допустимо в условных операторах
        // Нельзя
        function wrongFunction() {
            console.log('It is wrong!');
        }

        // Можно
        func = function() {
            console.log('It is good!');
        }
    }
}

/** ES6 - ECMAScript 2015 */
// Оператор let позволяет объявить локальную переменную с ограниченной текущим блоком кода областью видимости.
function letTest() {
    let x = 31;
    if (true) {

        // let можно не поднимать вверх блока функции, но важно обьявлять в начале блока в котором используеться,
        // так как let переменные не всплывают и обращение к переменно до ее объявления сгенерирует ошибку 'is not defined'
        let x = 71;  // другая переменная
        console.log(x);  // 71
    }
    console.log(x);  // 31
}

// Доступ к свойствам и методам обЪекта всегда через точку
obj.name = 'name';
obj.getName = function() { return this.name };

// Исключения могут быть, если это на самом деле необходимо
function getProp(prop) {

    // например чтоб получить доступ к свойству объекта используя переменную
    return obj[prop];
}

// объявление анонимной функции
var anonymous = function() {
    return true;
};

// объявление именованной функции, точка с запятой на конце обязательна
var named = function named() {
    return true;
};

// объявление функции, которая сразу же выполняется (замыкание)
(function() {
    console.log('Если вы читаете это, вы открыли консоль.');
})();

/** ES6 - ECMAScript 2015 */
// Стрелочные функции однострочные
var firstFunc = () => 1+1; // без парамметров
var secondFunc = x => x+1; // c парамметрами

// Многострочные
var thirdFunc = () => {
    setInterval(function () {
        console.log('spended 1 sec');
    }, 1000);
};
// Важно помнить что у стрелочных функции нет своих this и arguments

// В условных операторах используем === и !== вместо == и !=.
// Условные выражения вычисляются посредством приведения к логическому типу Boolean через метод ToBoolean и всегда следуют следующим правилам:
// Object всегда соответствует true
// Undefined всегда соответствует false
// Null всегда соответствует false
// Boolean остается неизменным
// Number соответствует false, если является +0, -0, или NaN, в противном случае соответствует true
// String означает false, если является пустой строкой '', в противном случае true. Условно говоря, для строки происходит сравнение не ее самой, а ее длины – в соответствии с типом number.
if ([0]) {
    // true
    // Массив(Array) является объектом, объекты преобразуются в true
}

// Используйте короткий синтаксис.
// https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108
if (name) { // Вместо name !== ''
}

if (collection.length) { // Вместо collection.length > 0
}

// Используйте фигурные скобки для всех многострочных блоков, для однострочных не используйте
if (test) console.log(test);

if (test) {
    test++;
    console.log(test);
}

// Используйте /** ... */ (jsdoc синтаксис) для многострочных комментариев.
/**
 * make() возвращает новый элемент
 * основываясь на получаемом имени тэга
 *
 * @param <String> tag
 * @return <Element> element
 */
function make(tag) {

    // ...создаем element...

    return element;
}

// Для комментариев в одну строку используйте //.
// Размещайте комментарии на новой строке над темой комментария. Добавляйте пустую строку над комментарием.

// устанавливаем активным элементом
var active = true;

// Используйте TODO FIXME: для аннотирования проблем

function Calculator() {

    // TODO FIXME: тут не нужно использовать глобальную переменную
    total = 0;

    return this;
}
// Используйте TODO: для указания решений проблем

function Calculator() {

    // TODO: должна быть возможность изменять значение через параметр функции
    this.total = 0;

    return this;
}

// Устанавливайте один пробел перед открывающей скобкой.
function test() {
    console.log('test');
}

// Устанавливайте один пробел перед выражением в условных операторах
if (x) { //Вместо if(x) {
    console.log(x);
}

// Всегда оставляйте новую строку в конце файла

// Приведение типов
// К string ''+x вместо toString(), так как toString метод ObjectPrototype
// и вызвав его на типах undefined и null вызовется ошибка
var x = 5;
console.log(''+x);

// Для приведения к number используйте
var val = Number(inputValue);

// Для конкретной системы исчисления, вторым параметром обязательно указываем систему исчесления
var val = parseInt(inputValue, 10);

/** ES6 - ECMAScript 2015 */
var val = Number.parseInt(inputValue, 10);

// Для приведения к логическому типу
var hasAge = Boolean(age);

// Проверка типов
// Проверка на string
if (typeof variable === 'string') {}

// Проверка на number
if (typeof variable === 'number') {}

// Проверка на boolean
if (typeof variable === 'boolean') {}

// Проврека на object
if (typeof variable === 'object') {}

// Проверка на array
if (Array.isArray(variable)) {}

// Проверка на element node
if (elem.nodeType === 1) {}

// Проверка на null
if (element === null) {}

// Проверка на null or undefined
if (element == null) {}

// Проверка на undefined Глобальные переменные
if (typeof variable === 'undefined') {}

// Проверка на undefined Локальные переменные
if (variable === undefined) {}

// Проверка содержит ли объект свойство или метод, без проверки в цепочке прототипов
if (obj.hasOwnProperty('name')) {}

// Проверка содержит ли объект свойство или метод, с проверкой в цепочке прототипов
if ('name' in obj) {}

// Если вам необходимо создать функцию для доступа к переменной, используйте раздельные функции getVal, setVal
person.setAge(25);
person.getAge();

// Для логических свойств(boolean) используйте isVal или hasVal
if (!person.hasAge()) {

}

// Присваиваем метод прототипу вместо замены прототипа на другой объект
Person.prototype.setAge = function(age) {
    this.age = age;
};

// Если возвращаем this для построения цепочек вызовов, то следует реализовать одинаковое поведение
// для всех методов кроме геттеров
Person.prototype.move = function(distance) {
    //code
    return this;
};

Person.prototype.stop = function() {
    //code
    return this;
};
var mike = new Person();

// При использование цепочек вызовов используем переносы строки, не стоит писать все в одну строку
mike.move(25)
    .stop();

// Подключая набор данных к событиям, всегда передаем объект вместо простой переменной.
// Это позволяет в процессе всплытия событий добавлять к данному объекту дополнительную информацию.
eventsProvider.trigger('someEvent', { user : mike });


// Объявление модулей
// Модуль должен начинаться с !. За счет этого даже некорректно сформированный модуль,
// в конце которого отсутствует точка с запятой, не вызовет ошибок при автоматической сборке скриптов.
// Файл должен быть именован с camelCase, находиться в папке с тем же именем,
// и совпадать с именем экспортируемой переменной.
// Добавьте метод noConflict(), устанавливающий экспортируемый модуль в состояние предыдущей версии.
// Всегда объявляйте 'use strict'; в начале модуля.

// fancyInput/fancyInput.js
!function(global) {
    'use strict';

    var previousFancyInput = global.FancyInput;

    function FancyInput(options) {
        this.options = options || {};
    }

    FancyInput.noConflict = function noConflict() {
        global.FancyInput = previousFancyInput;
        return FancyInput;
    };

    global.FancyInput = FancyInput;
}(this);
