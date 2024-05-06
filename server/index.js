const express = require("express");
const session = require("express-session");
const keys = require("./config/keys");
const stripe = require("stripe")(keys.stripeSecret);
const cors = require("cors");
const mongoose = require("mongoose");

require("./models/Product");

mongoose.connect(keys.mongoURI);

const Product = mongoose.model("products");

const app = express();

app.set("trust proxy", 1);

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 36000000, // 10 hours
      secure: false,
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

require("./Routes/apiRoutes")(app, Product);
require("./Routes/cartRoutes")(app, Product, stripe);

app.listen(5000);