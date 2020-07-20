//Задание №1

function name(arr) {
    var newArr = [];

    arr.map(function (item,i){
        newArr[i] = new Object(item)
    })

    return 'name: ' + newArr;
}

name(['Vasya']);


//Задание №2

function getTime(arr) {
    var time = arr.reduce(function (accumulator, currentValue) {
        return accumulator + ' : ' + currentValue;
    }, 'Текущее время ');

    return time;
}

getTime(['00', '13', '24']);


//Задание №3

function getWord(text) {
    var vowelLetters = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    var number = 0;
    text.toLowerCase().split('').reduce(function (n, c){
        return vowelLetters.indexOf(c) > -1 ? ++number : number;
    },0)
    return number;
}

getWord('Африканец');


//Задание №4

function countSentencesLetters(sentence) {
    var sentenceSplit = sentence.split(/[!?...]+/);

    function totalLetters(key) {
        var sum=0;

        for( var v in key.split(/[,\s]/g).join('')){
            sum++
        }

        return sum;
    }

    sentenceSplit.forEach(function (item) {
        if (item.length != 0)
            console.log(item.trim(), ': Letters quantity is:', totalLetters(item))
    });
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');