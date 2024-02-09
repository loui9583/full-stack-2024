const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({
        data: "Welcome"
    });
});

app.get("/secondRoute", (req, res) => {
    res.send({data: [1, 2, 3, 4]})
});

app.get("/page", (req, res) => {
    res.send("<h1>Test</h1>")
})

app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    res.send({
        message: "This is the third route", firstValue: firstValue, secondValue: secondValue
    })
})


let totalBalance = 1000;

app.get("/wallet/:paymentOut", (req, res) => {
    const paymentOut = Number(req.params.paymentOut);

    if (!paymentOut) {
        res.send({
            error: "Not a number"
        })
    } else if (paymentOut < 0) {
        res.send({
            error: "Negative numbers not allowed. No free money!"
        })
    } else if (paymentOut > totalBalance) {
        res.send({
                error: `Not enough funds. You tried to cash out ${paymentOut}, but you only have ${totalBalance} in your account`
            }
        )
    } else {
        totalBalance -= paymentOut;
        res.send({
            cashedOut: paymentOut, newBalance: totalBalance
        })
    }
})

app.listen(8080);
