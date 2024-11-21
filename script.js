const restaurants = [
    {
        name: "Changa Brothers",
        description: "Fresh Pizza and pasta.",
        image: "restImg1.jpg"
    },
    {
        name: "Mango Biryani",
        description: "Authentic Briyani dishes.",
        image: "restImg2.jpg"
    },
    {
        name: "Chai Wala",
        description: "Chandu Chai Wala.",
        image: "restImg3.jpg"
    },
    {
        name: "Gattu na Gota",
        description: "Yummy gotta's of Gattu.",
        image: "restImg4.jpg"
    }
];

function renderRestaurants(filter = '') {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';

    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredRestaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        restaurantDiv.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>${restaurant.description}</p>
            <img src="${restaurant.image}" alt="${restaurant.name}" />
        `;
        restaurantList.appendChild(restaurantDiv);
    });
}

renderRestaurants();

document.getElementById('search').addEventListener('input', (event) => {
    renderRestaurants(event.target.value);
});