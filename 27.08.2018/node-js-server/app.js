const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors')

var corsOptions = {
    origin: 'https://glacial-river-87258.herokuapp.com/user-app',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// //curl -v -X POST -H "Content-type: application/json" –d "{\"id\":\"207138132\"}" http://localhost:3500/api/user
//user{id,age,name,isMale,country}
//curl -X POST http://localhost:3500/api/user
app.post("/api/addUser", (req, res) => {
    console.log(req.body);
    if (isValidUser(req.body)) {
        console.log(req.body);
        let cuurentList = require("./user.json");
        console.log(cuurentList);
        cuurentList.push(req.body);
        fs.writeFileSync("user.json", JSON.stringify(cuurentList));
        res.status(201).send({ message: 'Created' });
    }
    else {
        console.log("bad");
        res.status(400);
    }

})
app.param(['fileName'], function (req, res, next, value) {
    console.log(value);
    next();
});
app.get("/api/getList", (req, res) => {
    let fileName = req.param('fileName')
    let List = require(`./${fileName}.json`);
    res.status(201).send(JSON.stringify(List));

})
isValidUser = (user) => {
    return isValidId(user.id);
    isValidAge(user.age) &&
        isValidName(user.name) &&
        isValidIsMale(user.isMale) &&
        isValidCountry(user.country);
}

let isValidId = (id) => {
    console.log(id);
    if (id == null || id == undefined)
        return false;
    let total = 0;
    for (i = 0; i < 9; i++) {
        let x = (((i % 2) + 1) * id.charAt(i));
        total += Math.floor(x / 10) + x % 10;
    }
    return (total % 10 == 0);
}
let isValidAge = (age) => {
    return age != null && age != undefined && typeof age == "number" && age >= 0 && age <= 120;
}

let isValidName = (name) => {
    return name != null && name != undefined && typeof name == "object" && name.length >= 3 && name.length <= 15;
}

let isValidIsMale = (isMale) => {
    return isMale != null && isMale != undefined && typeof isMale == "boolean";
}

let isValidCountry = (country) => {
    let countryList = require("./country.json");
    return country != null && country != undefined && typeof country == "object" && countryList.indexOf(country) >= 0;
}

const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });