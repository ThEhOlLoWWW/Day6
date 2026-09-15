/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 04 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * VÉRIFICATION D'EXISTENCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction possedePropriete(obj, cle) qui retourne true si la clé existe dans l'objet, sinon false. *(Indice : vous pouvez utiliser l'opérateur in ou vérifier si c'est !== undefined)*.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-04
 * ▶️ Commande : node day06/exercices/exercice-04.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function possedePropriete(obj, cle){
    return cle in obj;
}


let utilisateur = {
    nom: "Younes",
    age: 21
};

// 2. Test it with a key that exists
console.log(possedePropriete(utilisateur, "nom")); // Should output: true

// 3. Test it with a key that DOES NOT exist
console.log(possedePropriete(utilisateur, "email")); // Should output: false