const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();

/* configure body-parser */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const { auth_route, user_route, product_route } = require('./routes');

app.use('/api/v1/auth', auth_route);
app.use('/api/v1/users', user_route);
app.use('/api/v1/products', product_route);

const dbConfig = require('./config/database-config');

/* connecting to the database */
mongoose.connect(dbConfig.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

/* listen for requests */
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});