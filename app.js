fetch("data.json")
    .then(reponse => reponse.json())
    .then(donnee => {
        afficherProduits(donnee.produits)
        afficherClients(donnee.clients)
        afficherBenefices(donnee.benefices)
    })


//role : afficher les produits dans #produits
//parametre: le tableau produits
//return : rien

function afficherProduits(tableauProduits) {
    tableauProduits.forEach(produit => {



        document.getElementById("produits").innerHTML += `

    
         <div class="mb-16 card">
                <img class="cardImg" src="${produit.imageurl}" alt="Image produits">
                <h3 class="font25">${produit.titre}</h3>
                <p class="font15">${produit.presentation}</p>
                <a class="btn" href="">dévorez-moi</a>
            </div>
    `
    });
}

//role : afficher les avis clients
// parametre : le tableau des avis clients
//return : rien

function afficherClients(tableauClients) {
    tableauClients.forEach(client => {

        document.getElementById("clients").innerHTML += `

        <div class="mb-16 flex textCenter cardAvis">
             <ul>
               <li class="font15">${client.nom}</li>
              <li class="cblue font15">${client.typePrestation}</li>
                <li>${client.commentaire}</li>
              <li class="cblue font15">${client.note}/5</li>
             </ul>
        </div>
    `
    });
}

//role : afficher la liste des bénéfices clients
// parametre : le tableau des bénéfices clients
//return : rien

function afficherBenefices(tableauBenefices) {
    tableauBenefices.forEach(benefice => {

        document.getElementById("benefices").innerHTML += `

       <div class="large-3">
            <div class=" cardBene">
                <img class="img"
                    src= ${benefice.image} alt="Photo agriculture">
                <p>${benefice.commentaire}</p>
            </div>
        </div>
    `
    });
}
