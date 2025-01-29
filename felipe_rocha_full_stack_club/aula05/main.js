const person = {
    firstName: 'Kaio',
    lastName: 'Jesus',
    age: 21,
    hobbies: ['Assistir', 'Jogar', 'Programar'],
    dog: {
        name: 'Nana',
        age: 12
    }
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

const {firstName, lastName, age, hobbies, dog} = person

const play = person.hobbies[1];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(play);

// person.dog = 'Nana';

console.log(person.dog.age)
console.log(dog.name);
