import faker from 'faker';

const mount = (el) => {
  const products = Array.from({ length: 10 }, () => ({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  }));

  el.innerHTML = `
  <h1>Products</h1>
  <ul>
    ${products
      .map((product) => `<li>${product.name} - ${product.price}</li>`)
      .join('')}
  </ul>
`;
  // With React
  // import React from 'react';
  // import ReactDOM from 'react-dom';
  //
  // ReactDOM.render(
  //   <App />,
  //   el
  // );
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  if (el) {
    mount(el);
  }
}

export { mount };
