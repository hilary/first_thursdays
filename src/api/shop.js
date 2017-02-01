/**
 * Mocking client-server processing
 */
import _products from './products.json'
import axios from 'axios';

const TIMEOUT = 100

//TODO fix getphotos, dealing with different ports for local server right now, not working.
export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
  getPhotos: () => {
    const request = axios.get('http://localhost:3000/images');

    return request.then((data) => {
      // return {
      //   type: GET_IMAGE_OBJECT,
      //   payload: data.data
      // };
      console.log('images gotten');
    });
  }
}
