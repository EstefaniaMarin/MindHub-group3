
const Card = document.getElementById("details_card");
const CardImg = document.getElementById("image");
const detailsCard = localStorage.getItem("detail_temp");

function CargarDetails() {
    
    let detail = JSON.parse(detailsCard);

    CardImg.innerHTML = `

    <div class='card_details' >
    <img src="${detail.image}" class='card_details' alt="${detail.name}"></img>
    </div>
    `

    details_card.innerHTML = `
     <h3 class="card-title">Category: ${detail.category}</h3>
         <h2 class="card-title">${detail.name}</h2>  
         <p class="card-text"> ${detail.description}</p>
         <p class="card-text"><i class="bi bi-building-fill-up icon_detail"></i> ${detail.place}</p>
         <p class="card-text"><i class="bi bi-people-fill icon_detail"></i> ${detail.capacity}</p>

     <h4 class="card-title mb-3"><strong><i class="bi bi-currency-exchange icon_detail"></i> ${detail.price} $</strong></h4>
                `
}

console.log( CargarDetails());