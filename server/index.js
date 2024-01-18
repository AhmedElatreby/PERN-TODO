require("dotenv").config();

const express = require("express");
const cors = require("cors");

const route = require("./routes/index");

const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//route
app.use("/todos", route);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
