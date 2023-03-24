
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
         <div class="card-body">
         <ul class="list-group list-group-flush">
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Date"><i class="bi bi-calendar-event-fill icon_detail"></i> ${detail.date}</p>
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Category"><i class="bi bi-bookmark-star-fill icon_detail"></i> ${detail.category}</p>
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Capacity"><i class="bi bi-people-fill icon_detail"></i> ${detail.capacity}</p>
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Place"><i class="bi bi-geo-alt-fill icon_detail"></i> ${detail.place}</p>
         <p class="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Price"><strong><i class="bi bi-currency-exchange icon_detail"></i> ${detail.price}</strong></p>
         </ul>
         <div class="card-body">
         <a class="btn background-color text-light w-100 "  data-toggle="tooltip" data-placement="bottom" title="Contact For - ${detail.name}" href="./contact.html" target='_blank'"> <i class="bi bi-send-check-fill icon_view"></i></a>
         </div>
     `
}



console.log(CargarDetails());