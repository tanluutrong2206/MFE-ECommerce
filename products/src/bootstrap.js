import faker from 'faker';

const products = Array.from({ length: 10 }, () => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
}));

document.querySelector('#app-products').innerHTML = `
  <h1>Products</h1>
  <ul>
    ${products
      .map((product) => `<li>${product.name} - ${product.price}</li>`)
      .join('')}
  </ul>
`;
