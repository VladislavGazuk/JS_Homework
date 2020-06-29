function Animal(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if(foodAmount < 50 || foodAmount > 500) {
            alert('Ошибка! Введите корректное количество корма!')
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };

    var self = this;

    this.animalFeed = function () {
        return self.feed();
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var chain = this;

    chain.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.' + '\n' + 'Кот доволен ^_^');
        return chain;
    };

    chain.stroke = function () {
        console.log('Гладим кота.');
        return chain;
    };
}

var vasya = new Cat ('Вася');
vasya.stroke().feed().feed();

console.log(vasya.name);

console.log(vasya.dailyNorm(250));
console.log(vasya.animalFeed());

vasya = null;