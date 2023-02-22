import UrlParser from '../../routes/url-parser';
import Restaurant from '../../data/restaurant-data';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/restaurant-favorit';

const Detail = {
  async render() {
    return `
        <div class="restaurant_page">
            <div id="restaurant_title">
                <h2 class="content__heading">Restaurant Detail</h2>
            </div>
            <div id="restaurant" class="restaurant"></div>
        </div>
        <div id="likeButtonContainer"></div>
        
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataRestaurant = await Restaurant.detailRestaurant(url.id);
    const { restaurant } = dataRestaurant;
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    const saveButton = document.querySelector('#save_review_button');
    saveButton.addEventListener('click', () => {
      const inputName = document.querySelector('#review_name');
      const inputReview = document.querySelector('#review_note');
      const data = { id: restaurant.id, name: inputName.value, review: inputReview.value };

      Restaurant.addReview(data);
    });
  },
};

export default Detail;
