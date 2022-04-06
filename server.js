const express = require("express");
var compression = require("compression");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = process.env.PORT || 5000;
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

//de css, img en js map in de public map gebruiken
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public.css"));
app.use("/img", express.static(__dirname + "public.img"));
app.use("/js", express.static(__dirname + "public.js"));
app.use(compression());

//express layout mobiel formaat en ejs gebruiken
app.use(expressLayouts);
app.set("layout", "./layouts/mobiel-formaat");
app.set("view engine", "ejs");

//de app begint met de index.ejs bestand
app.get("/", handleApi, (req, res) => {
  res.render("index");
});

async function handleApi(req, res) {
  const cryptoApi = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=false"
  )
    .then((res) => res.json())
    .then((json) => {
      let array = [];

      for (let i = 0; i < json.length; i++) {
        array.push(json[i]);
      }
      for (let i = 0; i < array.length; i++) {
        console.log(array[i].name);
      }

      res.render("index", {
        array: array,
      });
    });
}

//404
app.use(function (req, res) {
  res.status(404).render("404");
});

//app geeft de port terug
app.listen(port, () => {
  console.log("Server is aan");
});
