let dogs = [
    {name: "Lassie", fameLevel: 13},
    {name: "Beethoven", fameLevel: 8,},
    {name: "Hachiko", fameLevel: 18,},
    {name: "Balto", fameLevel: 5,}
];

const genderedDogs = dogs.map((dog) => {
    dog.isMale = dog.name === "Lassie" ? false : true;
    return dog;
})

const increasedFameLevelDogs = dogs.map((dog) => {
    dog.fameLevel += 3;
    return dog;
})

console.log("Dogs:")
console.log(dogs);

console.log("________________________")

console.log("Gendered Dogs:")
console.log(genderedDogs);

/*
//_________________________________
{
const numbers = [1,2,3,4,5];

const doubleNumbers = numbers.map((number, index, originalArray) => (number*2));

//console.log(doubleNumbers);

const numberObjects = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5}
]
}

 */

