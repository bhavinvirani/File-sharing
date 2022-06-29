require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
const connectDB = require("./DB/connect");
const router = require("./routes");

connectDB();

app.set("view engine", "ejs");

app.use("/", router);



const port = 8080 || process.env.PORT;
app.listen(port, () => {
  // console.log(`server started on ${port}`);
});
