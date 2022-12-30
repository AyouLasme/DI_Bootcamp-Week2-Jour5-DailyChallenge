/** 
 * @autor: AYOU EMELINE LASME
 * @description:Exercice Daily Challenge Enregistrement des paroles de la chansson 99 bouteilles de biere
--*/

let nombreBouteille = prompt("Entrer un nombre de bouteille");
let i = 0;
while (nombreBouteille >= 0 && nombreBouteille >= i) {
    let nombreBouteilleATomber = (nombreBouteille > i? i:nombreBouteille);
    let nombreBouteilleRestant = nombreBouteille - nombreBouteilleATomber;
    if (nombreBouteilleRestant < i+1) {
        console.log(nombreBouteilleRestant + " bouteilles de bière au mur");
        console.log(nombreBouteilleRestant + " bouteilles de bière");
        console.log("Prenez-en " + (nombreBouteilleRestant ) + ", passez-la autour de vous");
        console.log(0 + " bouteilles de bière au mur");
        break;
    }
    if (nombreBouteilleRestant == 0 || nombreBouteilleRestant == 1) {
        console.log(nombreBouteilleRestant + " bouteille de bière au mur");
        console.log(nombreBouteilleRestant + " bouteille de bière");
        console.log("Prenez-en " + (i+1) + ", passez-la autour de vous");
        console.log(nombreBouteilleRestant - (i+1) + " bouteille de bière au mur");
        console.log("\n");
    }else{
        console.log(nombreBouteilleRestant + " bouteilles de bière au mur");
        console.log(nombreBouteilleRestant + " bouteilles de bière");
        console.log("Prenez-en " + (i+1) + ", passez-la autour de vous");
        console.log(nombreBouteilleRestant - (i+1) + " bouteilles de bière au mur");
        console.log("\n");
    }
    nombreBouteille = nombreBouteilleRestant;
    i++
}