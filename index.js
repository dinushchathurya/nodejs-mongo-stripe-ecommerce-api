const express = require('express');
const mongoose = require('mongoose');

const app = express();

const { user_route } = require('./routes');

app.use('/api/v1/user', user_route);

const dbConfig = require('./config/database-config');

// Connecting to the database
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

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});