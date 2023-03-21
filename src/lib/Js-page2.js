
const Card = document.getElementById("details_card");
const CardImg = document.getElementById("image");
const detailsCard = localStorage.getItem("detail_temp");

function CargarDetails() {
    
    let detail = JSON.parse(detailsCard);

    CardImg.innerHTML = `
    <img src="${detail.image}" class="card-img img-fluid rounded-start" alt="${detail.name}"></img>
    `

    details_card.innerHTML = `
     <h3 class="card-title">${detail.category}</h3>
         <h2 class="card-title">${detail.name}</h2>  
         <p class="card-text">${detail.description}</p>
     <h4 class="card-title mb-3"><strong>Emphasis</strong></h4>
                `
}

CargarDetails();