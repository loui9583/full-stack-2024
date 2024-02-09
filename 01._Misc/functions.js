/*
Hoisting:
alle deklartioner bliver løftet øverst op i scope så man kan kalde funktioner før de er blevet deklereret
Her bliver getRandomInt console.log før den er deklareret
 */
console.log(getRandomInt(1, 6));
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
/*
Anon function:
function der ikke har et navn
*/
const getRandomIntAnonFunc = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
/*
Arrow function:
Funktioner defineret med arrow syntaxen (=>), som giver en mere kompakt syntaks sammenlignet med traditionelle function-udtryk.
*/
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
const getRandomIntOneLiner =
    (min,max) => Math.floor(Math.random() * (max + 1 - min) + min);

/* Callback Function
Callback Function:
En callback-funktion er en funktion, der sendes som en parameter til en anden funktion og udføres efter afslutningen af den pågældende funktion, hvori den blev overført som parameter.
*/
function genericActionsPerformer(name,genericAction){
    return genericAction(name);
}
const running = (name) => `${name} is running`;

const runningResult = genericActionsPerformer("Alex", running);

console.log(runningResult);
const eating = (name) => `${name} is eating`;

const eatingResult = genericActionsPerformer("Louis", eating);

console.log(eatingResult);

