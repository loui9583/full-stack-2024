const express = require("express");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/homepage/homepage.html`);
})

app.get("/public-square", (req, res) => {
    res.sendFile(`${__dirname}/public/publicSquare/public-square.html`);
})


const PORT = 8080;
app.listen(PORT, () => {
    console.log("App is running at port ", PORT)
});
