import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
        <div class="content">
            <h2 class="content__heading">Your Favorite Restaurants</h2>
            <div class="search-box">
                <label>Find restaurant</label>
                <input id="query" type="text">
            </div>
            <div id="restaurants" class="restaurants"></div>
        </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
