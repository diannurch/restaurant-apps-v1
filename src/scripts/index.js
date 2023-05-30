import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

// navbar
const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function() {
  this.classList.toggle('change')
  sidebar.classList.toggle('change')
  bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function() {
  this.classList.remove('change')
  sidebar.classList.remove('change')
  burger.classList.remove('change')
})

// content
const restaurantListElement = document.querySelector("restaurant-list");
const footerElement = document.querySelector("footer");

console.log(data.restaurants[0].pictureId);
restaurantListElement.setAttribute("class", "grid container");
restaurantListElement.innerHTML = "";
data.restaurants.forEach(restaurant => {
    const list = document.createElement("article");
    list.setAttribute("tabindex", "0");
    list.innerHTML = `
    <div class="poster">
        <img src=${restaurant.pictureId} alt="restotop">
        <div class="text-block">
            ${restaurant.city}
        </div
    </div>
    <div class="text">
        <h4>Rating: ${restaurant.rating}</h4>
        <h3>${restaurant.name}</h3>
        <p>${restaurant.description}</p>
    </div>
    `;
    restaurantListElement.appendChild(list);
})

// footer 
footerElement.innerHTML = "";
const footer = document.createElement("div");
footer.setAttribute("class", "footer");
footer.innerHTML = `
                    Copyright &copy; 2023 - Dian Nurcahya Ningrum
                    `;
footerElement.appendChild(footer);