class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName( ) {
        console.log (`${this.firstName} ${this.lastName}`);
    }

    speak() {
        console.log('Hello World!')
    }
}

const person = new Person('Kaio', 'Jesus', 21); 

person.speak()

person.getFullName();