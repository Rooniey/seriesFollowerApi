const { movieDbClient } = require('../configuration/externalApiConfig');

module.exports = {
    popularSeries: async (page) => {
        return await movieDbClient.get('/tv/popular', { params: { page: page } });
    },
    seriesDetails: async (seriesId) => {
        return await movieDbClient.get('/tv/'+seriesId);
    }
}