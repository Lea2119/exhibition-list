const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

const expos = require("./routes/api/expos");

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.use("/api/expos", expos);

// app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
