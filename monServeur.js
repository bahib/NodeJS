const { log } = require('console');
const http = require('http');
const fs = require('fs');
const serveur = http.createServer((requete, reponse) => {
    // console.log("Serveur crée");
    // console.log(requete);
    
    // Définition de l'en-tête

    reponse.setHeader('content-type', "text/html");

    // Définition de la reponse

    reponse.write("<head><meta charset='utf8'></head>");

    if(requete.url === "/accueil") {
        reponse.write("<p>Bienvenue très cher développeur</p>");
    } else if (requete.url === "/profil") {
        reponse.write("<p>Vous êtes un développeur backend</p>");
    } else {
        reponse.write("<p>L'URL est incorrect</p>");
    }
    reponse.end();
})


serveur.listen(3001, "localhost", () => {
    console.log("Prêt à écouter les requetes au port 3001");
    
})