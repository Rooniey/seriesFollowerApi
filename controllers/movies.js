const movieService = require('../services/movieService');
module.exports = {
    popular: async (req, res, next) => {
        const response = await movieService.popularMovies(req.query.page);
        res.status(200).json( response.data );
    },
    details: async(req, res, next) => {
        const response = await movieService.movieDetails(req.params.movieId);
        res.status(200).json(response.data);
    }
}