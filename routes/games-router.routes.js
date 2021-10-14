const router = require('express').Router(); 
const get_gamesController = require('../controllers/games-controller')

router.get('/', get_gamesController)

module.exports = router