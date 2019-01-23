import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f795ea18808e07402d5e161ccb9d3f05e626f090d260ec5b2b5588cc35981e69'
  }
});
