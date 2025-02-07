import faker from 'faker';

const products = Array.from({ length: 10 }, () => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
}));

console.log(products);
