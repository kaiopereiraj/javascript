/*

for (let i = 0; i < 10; i++) {
    console.log(i)
};

*/


const cars = ['BMW', 'Mercedes', 'Audi'];

/*
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
};

*/

for (let car of cars) {
    console.log(car);
};

/* 

cars.forEach(function(car, i){
    console.log(i)
    console.log(car)
});

*/