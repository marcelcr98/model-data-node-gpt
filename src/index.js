const express = require("express");
const apiRoute = require("./routes/route");

const app = express();
const PORT = process.env.PORT || 3000;

//POST http://localhost:3000/api/test

app.use(express.json());
app.use("/api",apiRoute);
app.listen(PORT, ()=> {console.log("EL PUERTO ES: " + PORT)})