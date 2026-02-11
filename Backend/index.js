const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);   // Cloudflare + Google DNS
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

 require("./model/db");

const Authrouter = require("./routes/authrout");
const productRoutes = require("./routes/productrout");

/* ✅ MIDDLEWARE FIRST */
app.use(cors());
app.use(bodyParser.json());

/* ✅ ROUTES */
app.use("/api/products", productRoutes);
app.use("/auth", Authrouter);

app.get("/shoaib", (req, res) => {
  res.send("ahmed");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
