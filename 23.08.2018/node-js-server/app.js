const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();
const basePath = path.join(__dirname + "/dist");

fs.readdir(basePath, (err, files) => {
    files.forEach((file) => {
        app.use(express.static(`${basePath}/${file}`));
        app.get(`/${file}`, (req, res) => {
            res.sendFile(`${basePath}/${file}/index.html`);
        });
    })
});

const port = process.env.PORT || 3500;
app.listen(port,  ()=> { console.log(`OK`); });