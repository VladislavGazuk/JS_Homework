// Задание №1

var filterNumbersArr = [-1, 0, 2, 34, -2];

var positiveArr = filterNumbersArr.filter(function (number) {
    return number > 0;
});

alert(positiveArr);

// Задание №2

var arr = [-1, -2, 3, 4, -5, -6, -7, 8, 9, 10],
    positiveNumber = arr.find(el => el > 0);

console.log(positiveNumber);


// Задание №3

function isPalindrom(str) {
    str = str.toUpperCase();
    return str === str.split('').reverse().join('');
}

isPalindrom('шалаШ');
isPalindrom('шалак');


// Задание №4

anagram('stop', 'post');

function anagram(first, second) {
    return second.toLowerCase().split('').sort().join() === first.toLowerCase().split('').sort().join();
}


function areEqual(value1, value2) {
    var arr1 = value1.split('').sort().join(''),
        arr2 = value2.split('').sort().join('');

    console.log(arr1 == arr2);
}

areEqual('stop', 'post');


// Задание №5

function divideArr(arr, size) {
    var newArr = [];

    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }

    return newArr;
}

divideArr([1, 2, 3, 4, 6, 10, 18, 25], 3);