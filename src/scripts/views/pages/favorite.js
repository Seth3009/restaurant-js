import RestaurantFavoritIdb from '../../data/restaurant-favorit';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: RestaurantFavoritIdb });
    // eslint-disable-next-line no-new
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: RestaurantFavoritIdb });
  },
};

export default Favorite;
