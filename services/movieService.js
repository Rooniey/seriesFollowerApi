const { movieDbClient } = require('../configuration/externalApiConfig');

module.exports = {
    popularMovies: async (page) => {
        return await movieDbClient.get('/movie/popular', { params: { page: page } });
    },
    movieDetails: async (movieId) => {
        return await movieDbClient.get('/movie/'+movieId);
    },
    searchMovies: async (partName, page) => {
        return await movieDbClient.get('/search/movie', { params: { query: partName, page: page } })
    }
}