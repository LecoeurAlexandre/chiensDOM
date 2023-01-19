let dogs = [ 
    { 
        nom: "Faya", 
        age: 10, 
        race: "Bouledogue"
    },
    { 
        nom: "Lina", 
        age: 5, 
        race: "Bichon"
    }, 
    { 
        nom: "Black", 
        age: 12, 
        race: "Berger allemand"
    }  
]; 

let affichage="";
/* Ajouter un chien
let nom = ;
let age = ;
let race = ;
let newDog = {nom, age, race};
dogs.push(newDog);
*/

// Afficher tous les chiens
// Récupérer chaque chien :
for(i=0; i<dogs.length; i++) {
    affichage += `<option value="${i}"> ${dogs[i].nom}</option>
    `
    //console.log(affichage)
}

const selectDogs = document.querySelector('#my-select');
selectDogs.innerHTML = affichage;