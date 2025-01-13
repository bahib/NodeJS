const { log } = require('console');
const http = require('http');
const fs = require('fs');
const uuid = require('uuid');

const serveur = http.createServer((requete, reponse) => {
    // console.log("Serveur crée");
    // console.log(requete);
    
    console.log(uuid.v4());
    
    // Définition de l'en-tête

    reponse.setHeader('content-type', "text/html");

        let fichier = "";
    // Définition de la reponse

    reponse.write("<head><meta charset='utf8'></head>");

    if(requete.url === "/accueil") {
        fichier = "./IHM/accueil.html";

    } else if (requete.url === "/profil") {
        fichier = "./IHM/profil.html";;
    } else {
        fichier = "./IHM/erreur.html";
    }
    fs.readFile(fichier, (erreur, donnee) => {
        if(erreur) {
            console.log(erreur);
            reponse.end();
            
        } else {
            // reponse.write(donnee);
            reponse.end(donnee);
        }
    });
})


serveur.listen(3001, "localhost", () => {
    console.log("Prêt à écouter les requetes au port 3001");
    
})