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
    },
    {
        titre: "Médina Mbaba : curage urgent du canal",
        resume: "Les riverains ont déjà financé la main-d'œuvre ; il manque une tonne de ciment, du sable et du béton pour terminer le curage visant à prévenir les inondations avant l'hivernage.",
        localite: "Médina Mbaba (commune de Kaolack)",
        contact: "Ibrahima Thiagne – porte-parole"
    },
    {
        titre: "Gouye Mbetuth : trois jours sans eau",
        resume: "Rupture totale d'alimentation depuis 72 h ; femmes, enfants et bétail parcourent plusieurs kilomètres pour un point d'eau insalubre. Appel à une intervention immédiate.",
        localite: "Gouye Mbetuth (Nguer Malal, Louga)",
        contact: "Serigne Massambeuh Diop – trésorier PASTEF"
    },
    {
        titre: "Parcelles Assainies (Dakar) : avaloirs obstrués",
        resume: "Les regards d'assainissement n'ont pas été curés depuis des années ; certains disparaissent sous terre, faisant courir un risque majeur lors des pluies.",
        localite: "Unité 7, Parcelles Assainies (Dakar)",
        contact: "Dioptechno Tch – habitant du quartier"
    },
    {
        titre: "Sindia : pénurie chronique d'eau potable",
        resume: "Les familles parcourent des kilomètres pour une bassine d'eau. Elles exigent un réseau fiable et des investissements publics urgents.",
        localite: "Sindia (Thiès)",
        contact: "Audrey Picot – citoyenne engagée"
    },
    {
        titre: "Ndiebel : « le liquide précieux est introuvable »",
        resume: "Depuis l'hivernage d'août, aucun approvisionnement en eau ; la population demande une descente ministérielle sur place.",
        localite: "Ndiebel (Kaolack)",
        contact: "Expéditeur anonyme (message collectif)"
    },
    {
        titre: "Gamboul / Ngothie : forage en panne récurrente",
        resume: "Le forage tombe en panne plusieurs semaines d'affilée ; factures d'eau qui « flambent » malgré l'absence de service.",
        localite: "Gamboul (commune de Thiomby, Kaolack)",
        contact: "Ibrahima Thiam – résident local"
    },
    {
        titre: "Diaglé (Fatick) : panne du forage",
        resume: "Le forage de Diaglé/Toubacouta ne fonctionne plus « depuis très longtemps », privant plusieurs villages d'eau.",
        localite: "Diaglé – Toubacouta (Fatick)",
        contact: "Seny Senghor – habitant du village"
    },
    {
        titre: "Touba – Darou Minam 2 : grave pénurie",
        resume: "Huit quartiers de Touba, dont Darou Minam 2, vivent une pénurie d'eau insoutenable ; les familles paient jusqu'à 1 000 F CFA par jour pour des bouteilles.",
        localite: "Darou Minam 2 (Touba)",
        contact: "Tamsir Dia – 78 584 12 45"
    },
    {
        titre: "Bagadadji : forages à l'arrêt",
        resume: "Sur six forages, un seul fonctionne partiellement ; la commune sollicite la réhabilitation et la construction d'un nouveau forage.",
        localite: "Bagadadji (Kolda)",
        contact: "Dr Ibrahima Nima Seydi – auteur de la lettre"
    },
    {
        titre: "Ndoyène : un an de soif",
        resume: "Les habitants exigent un plan d'urgence et des solutions durables d'approvisionnement après un an sans eau potable.",
        localite: "Ndoyène (Kébémer, Louga)",
        contact: "Collectif des habitants de Ndoyène"
    },
    {
        titre: "Diourbel – Quartier Cheikh Anta Mbacké : 10 ans d'inondations",
        resume: "Exutoires obstrués, urbanisme anarchique ; nombreuses familles déplacées.",
        localite: "Diourbel (quartier Cheikh Anta Mbacké)",
        contact: "Ély Sy – 77 553 89 72"
    },
    {
        titre: "Thiès – Nguinth : canal inachevé dangereux",
        resume: "Chantier du canal à ciel ouvert arrêté depuis plus d'un an ; risque d'inondations et de prolifération de moustiques.",
        localite: "Nguinth (Thiès)",
        contact: "Cheikh Tidiane Ndiaye – résident"
    },
    {
        titre: "Petit Mbao : eaux stagnantes toute l'année",
        resume: "Remontée de la nappe phréatique et eaux des fosses septiques ; la population craint un hivernage catastrophique.",
        localite: "Petit Mbao (Keur Massar)",
        contact: "Mounas Diop – représentant des riverains"
    },
    {
        titre: "Yarakh Hann : coupure brutale",
        resume: "« Depuis hier, on n'a pas d'eau », alerte un habitant, demandant une solution rapide.",
        localite: "Yarakh Hann (Dakar)",
        contact: "Diockel Sarr – résident"
    },
    {
        titre: "Mbomboye (Ndondol) : absence d'eau persistante",
        resume: "Le village souffre depuis des années ; l'accès à l'eau est « le plus grand problème » de la zone.",
        localite: "Mbomboye (commune de Ndondol, Bambey)",
        contact: "Cheikh Sarr – 781 396 001"
    },
    {
        titre: "Koussanar : détresse hydrique",
        resume: "« Koussanar souffre de problème d'eau depuis des années » ; la population appelle à l'aide.",
        localite: "Koussanar (Tambacounda)",
        contact: "Mass Thiam – habitant local"
    },
    {
        titre: "Thiarène Sylla : forage hors service",
        resume: "Le village, situé entre Louga et Sakal, privé d'eau depuis des mois ; requête d'assistance.",
        localite: "Thiarène Sylla (Sakal, Louga)",
        contact: "Maramine Sylla – requérant"
    },
    {
        titre: "Ngoloum : panne répétitive du forage",
        resume: "Le forage principal tombe régulièrement en panne, plongeant Ngoloum et les villages voisins dans l'angoisse.",
        localite: "Ngoloum (Louga)",
        contact: "Papa Massaer Fall – citoyen"
    },
    {
        titre: "Gade Escale : trois ans sans forage",
        resume: "Depuis la panne du seul forage, les femmes parcourent des kilomètres pour de l'eau ; demande de réparation urgente.",
        localite: "Gade Escale (Ndindy, Diourbel)",
        contact: "Adama Diop – 77 345 22 35"
    },
    {
        titre: "Almadies 2 – canal Sedima : risque d'inondations",
        resume: "Les eaux de la zone se déversent dans un canal à ciel ouvert non curé, rendant le quartier impraticable chaque hivernage.",
        localite: "Almadies 2 (Dakar)",
        contact: "Abdou Abdou – riverain"
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