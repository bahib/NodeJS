const express = require('express');
const { log } = require('node:console');

const app = express();

app.get("/accueil", (req, res) => {
    res.status(200).sendFile("/IHM/accueil.html", {root : __dirname});
})

app.get("/profil", (req, res) => {
    res.status(200).sendFile("/IHM/profil.html", {root : __dirname});
})

app.get("/", (req, res) => {
    res.status(300).redirect("/accueil");
})

app.use((req, res) => {
    res.status(200).sendFile("/IHM/erreur.html", {root : __dirname});
})
app.listen(3001, () => {
    console.log("En attente des requetes au port 3001");
    
})

console.log("Erreur lors de la création du serveur");
