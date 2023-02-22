import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import RestaurantFavorite from '../src/scripts/data/restaurant-favorit';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantFavorite.getAllRestaurants()).forEach(async (restaurant) => {
      await RestaurantFavorite.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(RestaurantFavorite);
});
