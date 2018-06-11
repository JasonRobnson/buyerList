
//Module dependencies 
let db = require('./models')
let express  = require('express')
let app  = express()
let passport = require('passport')
let session = require('express-session')
let bodyParser = require('body-parser')
let env = require('dotenv').load()
let exphbs = require('express-handlebars')
let PORT = process.env.PORT || 8000;

// parses incoming body request
app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(bodyParser.json());

//this creates a static Directory
app.use(express.static("public"));

//This requires the routes for the app
// require("./routes")(app);
require("./routes/html-routes.js")(app);

//Syncs are databse, and then runs our express app
db.sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT)
    });
});