
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age  = age;
    }

    getGreeting() {
        // return this.name;
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major = 'Undecided') {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return (major === 'Undecided') ? false : true;
    }

    getDescription() {
        //return `${this.name} is ${this.age} year(s) old and studies ${this.major}`;        
        let description = super.getDescription();
        
        if (this.hasMajor()) 
            description += ` Their major is ${this.major}`;

        return description;
    }
}

class Traveler extends Person {

    constructor(name, age, homeLocation = 'Homeless') {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        return (this.homeLocation === 'Homeless') ? greeting : `${greeting} I'm from ${this.homeLocation}`;
    }
}
const me = new Person();
const other = new Person('Ivaylo Asenov');
const student = new Student('Ivaylo Student', 21, 'Computer Science');

const traveler = new Traveler('Yuval Gutzait', 21);

console.log(traveler.getGreeting());