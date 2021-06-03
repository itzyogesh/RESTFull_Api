const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./models/students");
const router = require("./routers/studentrouter");

app.use(express.json());

app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`Server is running at port ${port}`);
});
