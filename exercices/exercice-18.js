/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function sontIdentiques(obj1, obj2){
    let cle1 = Object.keys(obj1);
    let cle2 = Object.keys(obj2);
    if (cle1.length !== cle2.length){
        return false;
    }
    for (let cle of cle1){
        if (obj1[cle] !== obj2[cle]){
            return false;
        }
    }
    return true;
}
let test1 = { nom: "Sara", age: 22 };
let test2 = { nom: "Sara", age: 22 };
let test3 = { nom: "Sara", age: 25 };

console.log(sontIdentiques(test1, test2)); 
console.log(sontIdentiques(test1, test3)); 
