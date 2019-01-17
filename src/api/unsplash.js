import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 125c91f224c9fd59b68a83fddaca6872907f3c0eb7d3c9427dcb5c3f8af1fa59'
  }
});
