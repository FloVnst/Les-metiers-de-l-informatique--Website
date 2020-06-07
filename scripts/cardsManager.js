let indexCategory = 0,  // index de la catégorie actuellement affichée
    indexCard = 0,  // index de la carte actuellement affichée
    jobData = [];   // tableau contenant tous les éléments html correspondant aux cartes et aux catégories


// Initialisation : remplissage du tableau jobData
function init() {
    let categories = document.getElementsByClassName("category"),   // récupération des éléments html correspondant aux catégories
        cards;  // variable temporaire servant à stocker la liste des cartes de chaque catégorie

    for (let i = 0; i < categories.length; i++) {

        jobData.push([categories[i], []]);  // ajout d'une catégorie dans jobData sous la forme [elt_html_de_la_catégorie, [liste_des_cartes]]

        cards = document.querySelectorAll("#" + categories[i].id + " .card");

        for (let j = 0; j < cards.length; j++) {
            jobData[i][1].push(cards[j]);   // ajout des cartes de la catégorie en cours de traitement
        }
    }

    // affichage de la catégorie et de la carte en cours
    jobData[indexCategory][0].classList.add("displayed");
    jobData[indexCategory][1][indexCard].classList.add("displayed");
}


// Actualisation de l'affichage des catégories
function refreshCategory() {
    // Masquage de la catégorie actuellement affichée
    for(let i = 0; i < jobData.length; i++) {
        if (jobData[i][0].classList.contains("displayed")) {
            jobData[i][0].classList.remove("displayed");
            break;
        }
    }
    // Affichage de la catégorie en cours à la carte d'index 0
    jobData[indexCategory][0].classList.add("displayed");
    indexCard = 0;
    refreshCard();
}

// Actualisation de l'affichage des cartes
function refreshCard() {
    // Masquage de toutes les cartes de la catégorie en cours
    for(let i = 0; i < jobData[indexCategory][1].length; i++) {
        if (jobData[indexCategory][1][i].classList.contains("displayed")) {
            jobData[indexCategory][1][i].classList.remove("displayed");
            break;
        }
    }
    // Affichage de la carte en cours
    jobData[indexCategory][1][indexCard].classList.add("displayed");
}


// Fonction permettant d'aller à une catégorie à une carte donnée
function goTo(indexCategoryInput, indexCardInput) {
    indexCategory = indexCategoryInput;
    indexCard = indexCardInput;
    refreshCategory();
    refreshCard();
}

// Carte précédente
function previousCard() {
    indexCard = (indexCard === 0) ? jobData[indexCategory][1].length - 1 : indexCard - 1;
    refreshCard();
}

// Carte suivante
function nextCard() {
    indexCard = (indexCard === jobData[indexCategory][1].length - 1) ? 0 : indexCard + 1;
    refreshCard();
}


// Catégorie précédente
function previousCategory() {
    goTo((indexCategory === 0) ? jobData.length - 1 : indexCategory - 1, 0);
}

// Catégorie suivante
function nextCategory() {
    goTo((indexCategory === jobData.length - 1) ? 0 : indexCategory + 1, 0);
}



// Initialisation des variables et du système de gestion des cartes au chargement de la page
window.addEventListener("load", init);


// Scroll sur le bouton "catégorie précédente" lors du chargement de la page
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".previousCategory").scrollIntoView();
});
