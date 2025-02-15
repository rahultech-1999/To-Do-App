const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://rahul20587:AHHBql6aMtbt5Tn5@cluster0.gjlpcjq.mongodb.net/TO-DO_DB?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listenings temp1 user11 at ${PORT}...`));
