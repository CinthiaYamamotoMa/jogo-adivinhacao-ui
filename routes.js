const express = require('express');
const routes = express.Router();

const rankingController = require('./controller/rankingController');

routes.get('/', async (req, res) => {
    res.render('main')
})

routes.get('/edit/:username', async (req, res) => {
    res.locals = await { username: req.params.username }
    res.render('edit')
})

routes.get('/ranking', async (req, res) => {
    var ranking = await rankingController.findAll(req, res)
    res.locals = { ranking }
    res.render('ranking')
})

routes.get('/play/:username', async (req, res) => {
    var timeStart = new Date().getTime()
    res.locals = await { username: req.params.username, timeStart: timeStart }
    await res.render('play')
})

routes.get('/attempt', async (req, res) => {
    var attempt = await attemptController.try(req, res)
})

routes.post('/win', async (req, res) => {
    rankingController.store(req, res)
})

module.exports = routes;