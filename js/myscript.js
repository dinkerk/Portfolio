
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}































//=================
// if(условие){
//     код который будет выполнен если условие верно
// }
// else {
//     код который будет выполнен если условие  не верно
//      }
// }
// const time = 20
// if (time < 12) { 
//     console.log('good morning');
// } else if (time >= 11 && time < 18) {
//     console.log('good day')
// } else {
//     console.log('good evning')}
//===========
// логические операторы
// && - логическое и
// || - логическое или
// !true - логическое не
// ====================
// тернарный оператор
// (условие) ? (условие верно) : (условие не верно);
// например
// 10 < 12 ? console.log('условие верно') : console.log('условие не верно')
// let greeting сначала переменную объявляют
// let time = 12;
// if (time == 12) {
//     greeting = 'доброе утро'
// } else {
//     greeting = 'добрый день'
// }
// console.log(greeting);
// ====================
// стрелочные функции
// function sayHi(userName){ 
//     console.log(`hi, ${userName}! how are you?`);
// }
// sayHi('Mark');
// const sayHi2 = (yourName) => {
//     console.log(`hi, ${yourName}! how are you?`);
// }
// sayHi2('pit')
// function summ(a,b){
//     const result = a + b;
// }
// const summ = (a, b) => a + b;
// const res = summ(10, 30);
// console.log(res);
// ==========================
// массивы array
// []- квадратные скобки это массив или массивопобные структуры
// const autoBrand1 = 'Audi'
// const autoBrand2 = 'BMW'
// const autoBrand3 = 'Mazda'
// const autoBrand4 = 'Toyota'
// const autoBrands = ['Audi','BMW', 'Mazda', 'Toyota']; 
// console.log(autoBrands)
// // index это числа от нуля
// console.log(autoBrands[0])
// ========== length позволяет узнать сколько элементов внутри массива
// console.log(autoBrands.length)
// ================================
// методы массивов===========
// arr.push(items) - добавить элемент в конец массива
// arr.pop() - удалить элемент из конца массива
// arr.shift() - удалить элемент из начала массива
// arr.unshift(...items) - добавить элемент в начало массива
// arr.splice([start], [deleteCount, newElemens]) - удалять один или несколько из массива старт это первое число откуда начинается отсчет, а второе - сколько элементов удаляется можно использовать без скобок
// const autoBrands = ['Audi','BMW', 'Mazda', 'Toyota']; 
// console.log(autoBrands)
// autoBrands.push('Nissan');
// console.log(autoBrands)
// autoBrands.splice(2, 2);
// console.log(autoBrands);
// =====================
//циклы===========
//  обход массива с циклом for===========
// const autoBrands = ['Audi','BMW', 'Mazda', 'Toyota']; 
// console.log('start');
// for (let i = 0; i < 10; i++ ) {
//     console.log(i);
// }
// console.log('finish');
// for (i = 0; i < autoBrands.length; i++ ) {
//     console.log(autoBrands[i]);
// }
//  обход массива циклом for (of)============
// const autoBrands = ['Audi','BMW', 'Mazda', 'Toyota'];
// for (let item of autoBrands) {
//     console.log(item);
// }
//  обход массива методом forEach()
// const autoBrands = ['Audi','BMW', 'Mazda', 'Toyota'];
// autoBrands.forEach (function (brand, i) {
//     console.log(`${brand} => ${i}`);
// })

// ! разобраться как работает этот код
//  const p = document.createElement('p');
//     p.textContent = "Hey there"
//     document.getElementById('root').append(p);

// !l добавление даты, тег должен быть в html
// let date = Date();
// let element = document.querySelector('div');
//     element.innerHTML = 'Сейчас ' + date;

// !добавление любого текста на страницу, без объявленного тега
    // document.body.onload = addElement;
    // function addElement() {
    //   // create a new div element
    //   const newDiv = document.createElement("div");
    
    //   // and give it some content
    //   const newContent = document.createTextNode("Hi there and greetings!");
    
    //   // add the text node to the newly created div
    //   newDiv.appendChild(newContent);
    
    //   // add the newly created element and its content into the DOM
    //   const currentDiv = document.getElementById("div1");
    //   document.body.insertBefore(newDiv, currentDiv);
    // }
    