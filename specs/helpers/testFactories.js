import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import RestaurantFavoriteIdb from '../../src/scripts/data/restaurant-favorit';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: RestaurantFavoriteIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
