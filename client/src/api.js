const axios = require('axios');

const api = axios.create({
  // baseURL: 'http://localhost:5000'
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

module.exports = api ;