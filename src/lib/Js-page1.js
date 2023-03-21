const ArrayData = [{
    "fechaActual": "2022-01-01",
    "eventos": [
        {
            'id': 1,
            "image": '../assets/images/Cine7.jpg',
            "name": "Collectivities Party",
            "date": "2021-12-12",
            "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            'id': 2,
            "image": '../assets/images/Conciertodemusica1.jpg',
            "name": "Korean style",
            "date": "2021-08-12",
            "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 10
        },
        {
            'id': 3,
            "image": "../assets/images/Maraton3.jpg",
            "name": "Jurassic Park",
            "date": "2021-11-02",
            "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            'id': 4,
            "image": "../assets/images/Salidaalmuseo5.jpg",
            "name": "Parisian Museum",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            'id': 5,
            "image": "../assets/images/Salidaalmuseo5.jpg",
            "name": "Parisian 123",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            'id': 6,
            "image": "../assets/images/Salidaalmuseo5.jpg",
            "name": "Parisian 41231",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            'id': 7,
            "image": "../assets/images/fotoprueba1.jpeg",
            "name": "Parisian 41231",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        }
        ,
        {
            'id': 8,
            "image": "../assets/images/fotoprueba2.jpeg",
            "name": "Parisian 41231",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            'id': 9,
            "image": "../assets/images/fotoprueba3.jpeg",
            "name": "Parisian 41231",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        }
    ]
}]

const Card = document.getElementById('cards');
const Slider = document.getElementById('slider');

let newArrayCard = [];
let newArraySlider = [];

function CargarCarausel() {

    return ArrayData.forEach(data => {

        for (let i = 0; i < data.eventos.length; i++) {
            let contador = i;

            const SliderTemplate = `
            <button type="button" data-bs-target="#carouselExampleIndicators" class="active" data-bs-slide-to="${contador}"
            ></button>`

            const CardTemplate = `
            <div class="carousel-item" style="height: 500px;">
            <img src="${data.eventos[i].image}" class="d-block w-100" alt="${data.eventos[i].name}">

            <div class="carousel-caption d-none d-md-block">
              <h5>${data.eventos[i].name}</h5>
              <p>${data.eventos[i].description}</p>
              <a type="button" class="btn btn-primary" href="./details.html"  target="_blank" onclick="detalleCard(${data.eventos[i].id})">View Details</a>
            </div>
          </div>
         `

            newArraySlider.push(SliderTemplate)
            newArrayCard.push(CardTemplate)

        }

        Slider.innerHTML = newArraySlider;
        Card.innerHTML = newArrayCard;

        //console.log(newArrayCard);
        //console.log(newArraySlider);
    })
};



const details_card = document.querySelector('details_card');

function detalleCard(id) {

    ArrayData.forEach(data => {
        for (let i = 0; i < data.eventos.length; i++) {
            if (data.eventos[i].id === parseInt(id)) {
                localStorage.clear();
                return localStorage.setItem("detail_temp", JSON.stringify(data.eventos[i]));
            }
        }

    })
    
}
console.log(CargarCarausel(ArrayData))
