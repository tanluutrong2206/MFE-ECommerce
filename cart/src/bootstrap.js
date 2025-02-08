import faker from 'faker';

const mount = (el) => {
  const items = Array.from({ length: 5 }, () => ({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  }));

  el.innerHTML = `
    <h1>You have selected items</h1>
    <ul>
      ${items.map((item) => `<li>${item.name} - ${item.price}</li>`).join('')}
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
  const el = document.querySelector('#dev-cart');
  if (el) {
    mount(el);
  }
}

export { mount };
