function verifierOuverture() {
    const maintenant = new Date();
    
    const jour = maintenant.getDay(); 

    const heure = maintenant.getHours();
    const minutes = maintenant.getMinutes();
    const heureActuelleEnMinutes = (heure * 60) + minutes;

    const heureOuverture = (8 * 60) + 0;  
    const heureFermeture1 = (18 * 60) + 0;
    const heureOuverture2 = (17 * 60) + 0;
    const heureFermeture2 = (17 * 60) + 0; 

    const baliseStatus = document.getElementById("status-magasin");
    if (jour === 0){
        baliseStatus.textContent = "Fermé";
    }
    else if (jour === 1 || jour === 2 || jour === 3 || jour === 4){
        if (heureActuelleEnMinutes < heureOuverture || heureFermeture1 <= heureActuelleEnMinutes) {
            baliseStatus.textContent = "Fermé";
        }
        else {
            baliseStatus.textContent = "Ouvert";
        }
    } else {
        if (heureActuelleEnMinutes < heureOuverture || heureActuelleEnMinutes >= heureFermeture2) {
            baliseStatus.textContent = "Fermé";
        }
        else {
            baliseStatus.textContent = "Ouvert";
        }
    }
}

verifierOuverture();

setInterval(verifierOuverture, 1000);
