const express = require("express");
const dotenv = require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");
const { connectToDB } = require("./config/connection.js");
const apiRequestLimiter = require("./utils/apiRequestLimiter.js");
const router = require("./routes/productRoutes.js");
var app = express();

//Connect To Database
connectToDB();

//MIDDLEWAREs
app.use(cors());
app.use(apiRequestLimiter);
app.use(bodyparser.json());

//Routes
app.use("/api", router);

//Establish the server connection
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
