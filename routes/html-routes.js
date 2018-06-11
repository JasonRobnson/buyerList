//This file handles paths users take to each html page

//Dependencies
let path = require('path');


// Routes
module.exports = (app) => {
    app.get("/", (req, res)  => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
}