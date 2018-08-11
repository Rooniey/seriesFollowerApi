const { movieDbClient } = require('../configuration/externalApiConfig');

module.exports = {
    popularMovies: async (page) => {
        return await movieDbClient.get('/movie/popular', { params: { page: page } });
    },
    movieDetails: async (movieId) => {
        return await movieDbClient.get('/movie/'+movieId);
    }
}