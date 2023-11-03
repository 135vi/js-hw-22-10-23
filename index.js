// №1
// let num1 = prompt('Введите первую цифру');
// let num2 = prompt('Введите вторую цифру');
// function number() {
//     if (num1 > num2) return '1';
//     if (num1 < num2) return '1';
//     if (num1 = num2) return '0';
// }
// alert(number())

// №2
// let x = prompt('Введите число');
// function factorial(x) {
//     if(x <= 2) return x;
//     return x * factorial(x-1)
// }
// alert(factorial(x))

// №3
// let num1 = prompt('Введите первую цифру');
// let num2 = prompt('Введите вторую цифру');
// let num3 = prompt('Введите третью цифру');
// let num4 = num1 + num2 + num3;
// function number() {
//     if(num1 + num2 + num3) return num4;
// }
// alert(number())

// №4
// let num1 = prompt('Введите первую цифру');
// let num2 = prompt('Введите вторую цифру');
// function square(num1, num2) {
//     if(num1 != '' && num2 != '') return num1 * num2;
//     else if(num1 != '' && num2 == '') return num1 * num1;
//     else if(num1 == '' && num2 != '') return num2 * num2;
// }
// alert(square(num1, num2))

// №5
// let number = Number(prompt('Введите число для проверки, является ли переданное число совершенным'))
// function perfect(number) {
//     let num = 0;
//     for(let i = 1; i <= number / 2; i++) {
//         if(number % i === 0) {
//             num += i;
//         }
//     }
//     if(num === number && num !== 0) {
//         alert(`Число ${number} совершенное`)
//     }else {
//         alert(`Число ${number} не совершенное`)
//     }
// }
// alert(perfect(number))

// №6
// let number1 = Number(prompt('Введите минимальное число для проверки, является ли переданное число совершенным'))
// let number2 = Number(prompt('Введите максимальное число для проверки, является ли переданное число совершенным'))
// function perfect(number1, number2) {
//     let num = 0;
//     for(let i = 1; i <= number1 / 2; i++) {
//         if(number1 % i === 0) {
//             num += i;
//         }
//     }
//     if(num === number1 && num !== 0) {
//         alert(`Число ${number1} совершенное`)
//     }else {
//         alert(`Число ${number1} не совершенное`)
//     }

//     for(let i = 1; i <= number2 / 2; i++) {
//         if(number2 % i === 0) {
//             num += i;
//         }
//     }
//     if(num === number2 && num !== 0) {
//         alert(`Число ${number2} совершенное`)
//     }else {
//         alert(`Число ${number2} не совершенное`)
//     }
// }
// alert(perfect(number1, number2))

// №7
// let time = setTime()()();
// function setTime(h) {
//     return function setMinuts(m = '00') {
//         return function setSeconds(s = '00') {
//             return `${h} : ${m} : ${s}`
//         }
//     }
// }
// console.log(time)

// №8
// let h = prompt('часы');
// let m = prompt('минуты');
// let s = +prompt('секунды');
// function seconds(a, b, c) {
//     return(h * 3600) + (m * 60) + s
// }
// alert(seconds(h, m, s))

// №9
// let seconds = prompt('Введите количество секунд');
// function time(seconds) {
//     let s = seconds % 60;
//     let m = Math.floor(seconds / 60 % 60);
//     let h = Math.floor(seconds / 60 / 60 % 60);
//     return `${h}:${m}:${s}`
// }
// alert(time(seconds))

// №10
// let date1 = new Date(2015, 12, 7);
// let date2 = new Date(2018, 1, 3);
// let seconds = (+date2 - +date1) / 1000;
// function time(seconds) {
//     let s = seconds % 60;
//     let m = Math.floor(seconds / 60 % 60);
//     let h = Math.floor(seconds / 60 / 60 % 60);
//     return `${h}:${m}:${s}`
// }
// console.log(seconds)
// alert(time(seconds))
