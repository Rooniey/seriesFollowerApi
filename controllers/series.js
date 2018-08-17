const seriesService = require('../services/seriesService');
module.exports = {
    popular: async (req, res, next) => {
        const response = await seriesService.popularSeries(req.query.page);
        res.status(200).json( response.data );
    },
    details: async(req, res, next) => {
        const response = await seriesService.seriesDetails(req.params.seriesId);
        res.status(200).json(response.data);
    },
    airingToday: async(req, res, next) => {
        const response = await seriesService.airingToday(req.query.page);
        res.status(200).json(response.data);
    },
    similar: async(req, res, next) => {
        const response = await seriesService.similarSeries(req.params.seriesId, req.query.page);
        res.status(200).json(response.data);
    }
}