import Restaurant from '../../data/restaurant-data';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="restaurant_page">
            <div id="restaurant_title">
                <h2 class="content__heading">Home Page</h2>
            </div>
            <div id="restaurants" class="restaurants"></div>
        </div>
      `;
  },

  async afterRender() {
    const restaurantsList = await Restaurant.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsList.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
