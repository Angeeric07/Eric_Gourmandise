// 1. Le conteneur où vont s'afficher les cartes de plats
const menuContainer = document.getElementById('menu-container');

// 2. Tous les boutons de filtrage par catégorie
const filterBtns = document.querySelectorAll('.filter-btn');

// 3. Le formulaire de réservation
const reservationForm = document.getElementById('reservation-form');
 
const menu = [
    // --- ENTRÉES ---
    {
        titre: "Salade César",
        prix: "4 000 FCFA",
        desc: "Poulet grillé, salade fraîche, parmesan et sauce césar maison.",
        categorie: "entrees",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80"
    },
    {
        titre: "Nems aux Crevettes",
        prix: "3 500 FCFA",
        desc: "Rouleaux croustillants farcis aux crevettes et légumes croquants.",
        categorie: "entrees",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    {
        titre: "Soupe à l'Oignon",
        prix: "3 000 FCFA",
        desc: "Soupe traditionnelle gratinée au fromage emmental.",
        categorie: "entrees",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
    },

    // --- PLATS ---
    {
        titre: "Poulet Braisé & Alloco",
        prix: "6 500 FCFA",
        desc: "Poulet assaisonné et braisé au feu de bois, servi avec bananes frites.",
        categorie: "plats",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
    },
    {
        titre: "Burger Gourmet",
        prix: "5 500 FCFA",
        desc: "Steak haché pur bœuf, cheddar fondu, oignons caramélisés et frites.",
        categorie: "plats",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        titre: "Capitaine Grillé",
        prix: "7 500 FCFA",
        desc: "Pavé de poisson capitaine grillé accompagné de riz parfumé et légumes.",
        categorie: "plats",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
    },

    // --- DESSERTS ---
    {
        titre: "Fondant au Chocolat",
        prix: "3 000 FCFA",
        desc: "Cœur coulant au chocolat noir, servi avec une boule de glace vanille.",
        categorie: "desserts",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
    },
    {
        titre: "Tiramisu Classique",
        prix: "3 500 FCFA",
        desc: "Biscuits imbibés au café, crème mascarpone onctueuse et cacao.",
        categorie: "desserts",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80"
    },
    {
        titre: "Salade de Fruits Frais",
        prix: "2 500 FCFA",
        desc: "Mélange rafraîchissant de fruits de saison locaux.",
        categorie: "desserts",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=80"
    },

    // --- BOISSONS ---
    {
        titre: "Jus de Bissap Maison",
        prix: "1 500 FCFA",
        desc: "Boisson rafraîchissante à l'hibiscus infusée à la menthe.",
        categorie: "boissons",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    {
        titre: "Cocktail Mojito",
        prix: "3 500 FCFA",
        desc: "Citron vert, menthe fraîche, eau gazeuse et sirop de canne.",
        categorie: "boissons",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    },
    {
        titre: "Smoothie Mangue-Passion",
        prix: "2 500 FCFA",
        desc: "Mélange onctueux de mangue fraîche et fruit de la passion.",
        categorie: "boissons",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
    }
];

// 2. Fonction qui affiche les plats
function afficherMenu(listeDePlats) {
    // On vide le conteneur avant d'ajouter les cartes
    menuContainer.innerHTML = "";

    // On boucle sur chaque plat et on l'ajoute au HTML
    listeDePlats.forEach(plat => {
        menuContainer.innerHTML += `
            <div class="plat-card">
                <img src="${plat.image}" alt="${plat.titre}">
                <div class="plat-info">
                    <h3>${plat.titre} - <span>${plat.prix}</span></h3>
                    <p>${plat.desc}</p>
                </div>
            </div>
        `;
    });
}

// 3. Appel de la fonction au chargement de la page
afficherMenu(menu);
// 1. Déclaration des tableaux vides pour chaque catégorie
let entrees = [];
let plats = [];
let boissons = [];
let desserts = [];

// 2. Boucle pour remplir les tableaux selon la catégorie du plat
menu.forEach(plat => {
    if (plat.categorie === "entrees") {
        entrees.push(plat);
    } else if (plat.categorie === "plats") {
        plats.push(plat);
    } else if (plat.categorie === "boissons") {
        boissons.push(plat);
    } else if (plat.categorie === "desserts"){
        desserts.push(plat);
    }
});

// 3. Fonction pour afficher la catégorie choisie
function filtrerParCategorie(categorie) {
    if (categorie === "entrees") {
        afficherMenu(entrees);
    } else if (categorie === "plats") {
        afficherMenu(plats);
    } else if (categorie === "boissons") {
        afficherMenu(boissons);
    } else if (categorie === "desserts") {
        afficherMenu(desserts);
    }
    else {
        afficherMenu(menu); // Affiche tout par défaut
    }
}

// 2. Écoute du clic sur chaque bouton
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Récupère la valeur de data-category (ex: "entrees", "plats", etc.)
        const categorieCliquee = btn.dataset.category;

        // Condition pour vérifier le bouton cliqué et appeler la bonne fonction
        if (categorieCliquee === "entrees") {
            afficherMenu(entrees);
        } else if (categorieCliquee === "plats") {
            afficherMenu(plats);
        } else if (categorieCliquee === "boissons") {
            afficherMenu(boissons);
        } else if (categorieCliquee === "desserts") {
            afficherMenu(desserts);
        } else {
            afficherMenu(menu); // Si c'est "tous" ou autre chose, on affiche tout le menu
        }
    });
});
// 2. Gestion du clic et du changement de style
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Enlève la classe 'active' de tous les boutons
        filterBtns.forEach(b => b.classList.remove('active'));

        // Ajoute la classe 'active' au bouton cliqué
        btn.classList.add('active');

        // Récupère la catégorie et filtre le menu
        const categorieCliquee = btn.dataset.category;
        filtrerParCategorie(categorieCliquee);
    });
});
// 2. Écoute de la soumission du formulaire
reservationForm.addEventListener('submit', (e) => {
    // Empêche le rechargement de la page
    e.preventDefault();

    // Récupération des valeurs saisies dans les champs HTML
    const nom = document.getElementById('nom').value;
    const date = document.getElementById('date').value;
    const heure = document.getElementById('heure').value;
    const personnes = document.getElementById('personnes').value;

    // Numéro de téléphone du restaurant (avec l'indicatif du pays, sans le "+")
    // Exemple pour la Côte d'Ivoire (+225) : "2250700000000"
    const numeroTelephone = "2250150366134"; 

    // Création du message personnalisé
    const message = `Bonjour, je souhaite réserver une table au nom de *${nom}* :\n` +
                    `- 📅 Date : ${date}\n` +
                    `- ⏰ Heure : ${heure}\n` +
                    `- 👤 Nombre de personnes : ${personnes}`;

    // On encode le message pour qu'il soit lisible dans une URL
    const messageEncode = encodeURIComponent(message);

    // Lien officiel WhatsApp API
    const whatsappUrl = `https://wa.me/${numeroTelephone}?text=${messageEncode}`;

    // Ouverture de WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
});