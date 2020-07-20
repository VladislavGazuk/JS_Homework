//Задание №1

var name = ['Vasya'];
var newArr = name.map(function () {
    return 'name: ' + name;
});


//Задание №2

var arr = ['00', '13', '24'];
var time = arr.reduce(function (accumulator, currentValue, index) {
    return (index !== 2) ? accumulator + currentValue + ' : ' : accumulator + currentValue;
}, 'Текущее время : ');


//Задание №3

var vowel = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";

var vowelLength = [..."Африканец"].reduce(function (n, c) {
    return vowel.indexOf(c) > -1 ? ++n : n;
}, 0);


//Задание №4

function countSentencesLetters(sentence) {
    var arr = sentence.split(/[\.\?\!]/);

    console.log(arr[0] + ': ' + 'Letters quantity is: ' + firstLength)
    console.log(second + ': ' + 'Letters quantity is: ' + secondLength)
    console.log(arr[4] + ': ' + 'Letters quantity is: ' + thirdLength)
}

var sentence = 'Привет, студент! Студент... Как дела, студент?';

var first = arr[0].replace(/[\s.,]/g, ''),
    firstLength = first.length;

var second = arr[1].replace(/[\s.,]/g, ''),
    secondLength = second.length;

var third = arr[4].replace(/[\s.,]/g, ''),
    thirdLength = third.length;

countSentencesLetters(sentence);