class Hamster {
    constructor(owner, name, price) {
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }

    wheelRun() {
        console.log("squeak squeak");
    }

    eatFood() {
        console.log("nibble nibble");
    }

    getPrice() {
        return this.price;
    }
};


class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = [];
        this.bankAccount = bankAccount;
    }

    getName(name) {
        console.log(this.name);
    }

    getAge(age) {
        console.log(this.age);
    }

    getWeight(weight) {
        console.log(this.weight);
    }

    greet() {
        return `Hello ${Person.name}`
    };

    eat(amount) {
       console.log(this.weight += amount, this.mood++, "Yummy!");
    }

    excercise(amount) {
        console.log(this.weight -= amount);
    }

    ageUp(amount) {
        console.log(this.age += amount,
        this.height += amount,
        this.weight += amount,
        this.mood += amount,
        this.bankAccount += 10);
    }

    buyHamster(Hamster) {
        console.log(this.hamsters.push(Hamster),
        this.mood + 10,
        this.bankAccount - Hamster.getPrice(Hamster));
    };
};



const timmy = new Person("Timmy", 5, 4.0, 50, 20, [], 0);

const Gus = new Hamster("Timmy", "Bear", 15)

timmy.eat(5);
timmy.excercise(5);
console.log(timmy);
timmy.ageUp(9);
timmy.buyHamster(Gus);
console.log(timmy);
timmy.ageUp(15);
timmy.eat(2);
timmy.excercise(2);
console.log(timmy);