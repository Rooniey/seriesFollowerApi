const axios = require('axios');

const baseUrl = 'https://api.themoviedb.org/3';
const defaultLanguage = 'en-US';
const apiKey = process.env.MOVIEDB_API_KEY;

axios.defaults.params = {};
axios.defaults.params[ 'api_key' ] = apiKey;
axios.defaults.params[ 'language' ] = defaultLanguage;

module.exports = {
    movieDbClient: axios.create({
        baseURL: baseUrl
    })
}