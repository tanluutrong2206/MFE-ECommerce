import faker from 'faker';

const items = Array.from({ length: 5 }, () => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
}));

document.querySelector('#app-cart').innerHTML = `
    <h1>You have selected items</h1>
    <ul>
      ${items.map((item) => `<li>${item.name} - ${item.price}</li>`).join('')}
    </ul>
  `;
