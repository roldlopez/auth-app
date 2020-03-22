if(process.env.node_env !== "production") {
    require("dotenv").config();
}
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const app = express();
const mongoose = require("mongoose");
const user = require("./routes/user");
const login = require("./routes/login");
const data = require("./routes/data");
const port = process.env.PORT || 5000;

app.listen(port, async () => {
   try {
        await mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
        console.log(`Connected to server on port ${port}`);
        });
   } catch (err) {
        console.log(`Unable to connect ${err}`);
   }
});

app.use(cors({}));
app.use(helmet());
// app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/register', user);
app.use('/api/login', login);
app.use('/api/dashboard', data);