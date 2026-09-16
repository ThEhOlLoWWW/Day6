/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.

let utilisateurs = []
function ajouterUtilisateur(nom, email){
    let obj = {
        nom: nom, 
        email: email,
        id: utilisateurs.length + 1,
    };
    utilisateurs.push(obj)
    return obj;
}
function trouverParEmail(email){
    for (let util of utilisateurs){
        if ( util.email === email ){
            return util;
        }
    }
    return "didn't find the user"
}
function supprimerParId(id){
   utilisateurs = utilisateurs.filter(util => util.id !== id)
}
function afficherAnnuaire(){
    for (let util of utilisateurs){
        console.log(`[ID: ${util.id}] ${util.nom} - ${util.email}`);
        
    }
}

ajouterUtilisateur("LOGOS", "dryounes2005@gmail.com");
ajouterUtilisateur("TestUser", "test@youcode.ma");
ajouterUtilisateur("Fantome", "boo@fantome.com");


supprimerParId(2);


afficherAnnuaire();


