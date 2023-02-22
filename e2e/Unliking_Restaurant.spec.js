Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking a restaurant', async ({ I }) => {
  // shows empty favorite restaurant
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // one favorite restaurant in page
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  I.click(firstRestaurant);

  // cancel favorite restaurant
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
