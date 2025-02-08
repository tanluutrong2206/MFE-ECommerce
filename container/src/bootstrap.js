import { mount as mountProduct } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

console.log('Container');
mountProduct(document.querySelector('#app-products'));
mountCart(document.querySelector('#app-cart'));
