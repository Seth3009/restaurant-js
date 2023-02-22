import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const foods = [];
  const drinks = [];
  const reviews = [];
  restaurant.menus.foods.forEach((food) => {
    foods.push(`<li>${food.name}</li>`);
  });

  restaurant.menus.drinks.forEach((drink) => {
    drinks.push(`<li>${drink.name}</li>`);
  });

  restaurant.customerReviews.forEach((customer) => {
    reviews.push(`<div class="card_review"><h3>${customer.name}</h3><p class="date_review">review date: ${customer.date}</p><p>${customer.review}</p></div>`);
  });
  return `
        <article tabindex="0">
        <div aria-label=",Lokasi restaurant:"></div>
        
        <div class="card__restaurant">
            <div class="container_detail_restaurant">
                <img src="${CONFIG.MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="Gambar restaurant ${restaurant.name || '-'}">
                <div class="teks__restaurant">
                <div aria-label=","></div>
                
                <div aria-label=", Nama "></div>
                <p><strong>${restaurant.name}</strong></p>
                <div><p><b>Kota: ${restaurant.city}</b></p></div>
                <div aria-label=","></div>
                <p><b>Rating: ${restaurant.rating}</b></p>
                <div aria-label=","></div>
                <p><strong>Deskripsi Restoran:</strong><br>${restaurant.description}</p>
                <div class="menus">
                    <ol><strong>Menu Makanan</strong>${foods.join('')}</ol>
                    <ol><strong>Menu Minuman</strong>${drinks.join('')}</ol>
                </div>
                </div>
            </div>
        </div>
            <div class="review_container">
                <h2>Customer Review</h2>
                <div class="box_review">
                    ${reviews.join('')}
                </div>
            </div>
        </div>
        </article>
        <div class="form_review">
          <label>Nama:</label>
          <input id="review_name" type="text"></input>
          <label>Review:</label>
          <textarea id="review_note"></textarea>
          <button id="save_review_button">Simpan Review</button>
        </div>`;
};
const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item" tabindex="0">
        <div aria-label=",Lokasi restaurant:"></div>
        <div class="city__label"><p><b>${restaurant.city}</b></p></div>
        <div class="card__restaurant">
            <div class="container__restaurant">
                <div class="teks__restaurant">
                  <div aria-label=","></div>
                  <img class="lazyload" data-src="${CONFIG.MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="Gambar restaurant ${restaurant.name || '-'}">
                  <div aria-label=", Nama "></div>
                  <h3 class="restaurant__name"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
                  <div aria-label=","></div>
                  <p><b>Rating: ${restaurant.rating}</b></p>
                  <div aria-label=","></div>
                  <p><strong>Deskripsi restaurant:</strong><br>${restaurant.description || '-'}</p>
                </div>
            </div>
          </div>
    </article>
    `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
