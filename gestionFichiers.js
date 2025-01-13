const fs = require("fs");
if(fs.existsSync("./mesFichiers")) {
    console.log("Le dossier existe déjà");
    
} else {
    fs.mkdir("./mesFichiers", (erreur) => {
        if(erreur) {
            console.log(erreur);
            
        } else {
            console.log("Dossier crée avec succès !");
            
        }
    })
}