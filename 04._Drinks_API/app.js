const express = require("express");
const app = express();
app.use(express.json());


let idCounter = 11;
let drinks = [
    {
        id: 0,
        name: "Whiskey Sour",
        ingredients: ["Bourbon", "Lemon juice", "Simple syrup", "Egg white (optional)", "Cherry and orange slice for garnish"]
    },
    {
        id: 1,
        name: "Mojito",
        ingredients: ["Fresh mint leaves", "White rum", "Lime juice", "Syrup", "Club soda"]
    },
    {
        id: 2,
        name: "Margarita",
        ingredients: ["Tequila", "Triple sec", "Lime juice", "Salt", "Ice"]
    },
    {
        id: 3,
        name: "Martini",
        ingredients: ["Gin", "Dry vermouth", "Olives or lemon twist for garnish"]
    },
    {
        id: 4,
        name: "Cosmopolitan",
        ingredients: ["Vodka", "Triple sec", "Cranberry juice", "Lime juice", "Simple syrup"]
    },
    {
        id: 5,
        name: "Old Fashioned",
        ingredients: ["Bourbon or rye whiskey", "Angostura bitters", "Sugar cube", "Club soda", "Orange twist"]
    },
    {
        id: 6,
        name: "Piña Colada",
        ingredients: ["White rum", "Coconut cream", "Pineapple juice", "Ice", "Pineapple wedge for garnish"]
    },
    {
        id: 7,
        name: "Bloody Mary",
        ingredients: ["Vodka", "Tomato juice", "Lemon juice", "Worcestershire sauce", "Tabasco", "Celery salt", "Black pepper", "Celery stalk and lemon wedge for garnish"]
    },
    {
        id: 8,
        name: "Negroni",
        ingredients: ["Gin", "Sweet vermouth", "Campari", "Orange twist for garnish"]
    },
    {
        id: 9,
        name: "Daiquiri",
        ingredients: ["White rum", "Lime juice", "Simple syrup"]
    },
    {
        id: 10,
        name: "Moscow Mule",
        ingredients: ["Vodka", "Ginger beer", "Lime juice", "Ice", "Lime wedge for garnish"]
    }
];

app.get("/", (req, res) => {
    res.send(drinks)
})

app.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const drink = drinks.find(drink => drink.id === id);

    if (!drink) {
        res.send({
            error: "id not found"
        });
    } else {
        res.send(drink);
    }
});

app.delete("/:id", (req, res) => {

    const id = Number(req.params.id);
    const drink = drinks.find(drink => drink.id === id);

    if (!drink) {
        res.send({
            error: "id not found"
        })
    } else {
        drinks = drinks.filter(drink => drink.id !== id);
        res.send({
            message: `Drink with id ${id}(${drink.name}) has been deleted`
        })
    }
})

app.put("/:id", (req, res) => {

    const id = Number(req.params.id);
    const updatedDrink = req.body;

    console.log(req.body)

    drinks.find(drink => drink.id === id).name = updatedDrink.name;
    drinks.find(drink => drink.id === id).ingredients = updatedDrink.ingredients;

    res.send(drinks.find(drink => drink.id === id))

})

app.post("/", (req, res) => {
    const newDrink = {
        id: idCounter,
        name: req.body.name,
        ingredients: req.body.ingredients
    }
    newDrink.id = idCounter;
    idCounter += 1;
    drinks.push(newDrink);
    res.send("ok");

})

app.patch("/:id/ingredients", (req, res) => {

    const id = Number(req.params.id);
    const updatedDrink = req.body;

    console.log(req.body)

    drinks.find(drink => drink.id === id).ingredients = updatedDrink.ingredients;

    res.send(drinks.find(drink => drink.id === id))

})

app.patch("/:id/name", (req, res) => {

    const id = Number(req.params.id);
    const updatedDrink = req.body;

    console.log(req.body)

    drinks.find(drink => drink.id === id).name = updatedDrink.name;

    res.send(drinks.find(drink => drink.id === id))

})

app.listen(8080);
