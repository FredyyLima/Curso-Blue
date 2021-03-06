const express = require("express");
const path = require("path")
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req,res){
    res.render("index", {titulo: "Eu sou bom na programação"});
});

app.get("/pagina", function(req,res){
    res.render("pagina");
});


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
