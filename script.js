// Données des tickets
const tickets = [
    {
        titre: "Ourossogui : Une ville sans d'eau",
        resume: "Affiche citoyenne dénonçant : 2 ans sans investissement, exploitation de la détresse par la SDER, absence d'eau en quantité et en qualité. Hashtags : #SauverNous",
        localite: "Ourossogui (région de Matam)",
        contact: "Collectif « Sogui Yo Walu Sogui » (aucun n° communiqué)"
    },
    {
        titre: "Bambey Sérère : incendie tragique aggravé par la pénurie d'eau",
        resume: "Publication Facebook d'Ibrahima Diop : manque d'eau signalé depuis une semaine ; un incendie emporte un nourrisson faute d'eau pour les secours.",
        localite: "Bambey Sérère (Diourbel)",
        contact: "Ibrahima Diop – profil Facebook de l'auteur"
    },
    {
        titre: "Darou Salam Typ : forage unique hors‑service depuis 2021",
        resume: "Tweet adressé au ministre @cheikhtdieye : le seul forage du village (13 km de Mbacké) est en panne depuis 2021 ; besoin urgent de réhabilitation.",
        localite: "Darou Salam Typ (département de Mbacké)",
        contact: "@KimAgroTyp (AbdulHakiim Tiib) – Twitter"
    },
    {
        titre: "Thiomby / Gamboul : Soif et silence imposés",
        resume: "Affiche du Collectif pour la Défense des Intérêts de la Commune : robinets à sec depuis des semaines ; interdiction de manifester malgré la détresse des populations.",
        localite: "Thiomby ‑ Gamboul (Kaolack)",
        contact: "Collectif de Défense des Intérêts de la Commune (pas de coordonnées)"
    },
    {
        titre: "Kaffrine : pénuries d'eau dans plusieurs localités",
        resume: "Extrait de dépêche presse : de nombreuses zones du département font face à des ruptures récurrentes d'alimentation en eau potable.",
        localite: "Département de Kaffrine",
        contact: "Source presse « Dépêches / Régions » (contact non précisé)"
    },
    {
        titre: "Gamboul : pénurie d'eau persistante",
        resume: "Affiche citoyenne : refus répété des autorités d'autoriser une marche ; Flexeau jugé inactif et peu transparent ; appel à explications pour la population privée d'eau.",
        localite: "Gamboul (Kaolack)",
        contact: "Collectif de Défense des Intérêts de la Commune – Gamboul"
    },
    {
        titre: "Touba Darou Marnane : deux mois sans eau",
        resume: "Post du journaliste Birane Diop : quartier privé d'eau depuis près de deux mois ; interpellation directe du ministre Cheikh Tidiane Dièye ; population fatiguée.",
        localite: "Touba Darou Marnane (arrondissement Ndame, Diourbel)",
        contact: "Birane Diop (Journaliste) – profil Facebook"
    }
];

// Actualités à afficher dans le bandeau défilant
const actualites = [
    "Tournée historique de Dr Cheikh Tidiane DIEYE à l'Est : l'eau potable au cœur des priorités de l'État du Sénégal.",
    "Pendant 48 heures, le Ministre a sillonné l'Est du pays pour inaugurer et lancer d'importants projets d'accès à l'eau potable.",
    "Le lundi 5 mai 2025, dans la commune de Payar, inauguration d'un nouveau forage.",
    "Appel à la mobilisation citoyenne pour la gestion durable de l'eau.",
    "Suivez toutes les actualités sur notre page Facebook officielle !"
];

// Fonction pour charger les tickets dans le tableau
function loadTickets() {
    const tbody = document.querySelector('#tickets-table tbody');
    tbody.innerHTML = '';

    tickets.forEach(ticket => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ticket.titre}</td>
            <td>${ticket.resume}</td>
            <td>${ticket.localite}</td>
            <td>${ticket.contact}</td>
        `;
        tbody.appendChild(row);
    });
}

// Fonction pour charger le texte défilant des actualités
function loadMarqueeActus() {
    const marquee = document.getElementById('marquee-actus');
    marquee.innerHTML = actualites.join(' &nbsp; • &nbsp; ');
}

// Charger les données au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadTickets();
    loadMarqueeActus();
}); 