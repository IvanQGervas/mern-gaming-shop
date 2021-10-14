const Game = require('../models/mdb_games.model')
const Provider = require('../models/mdb_providers.model')


const get_gamesController = async (req, res) => {

    try {
        const dataGames = await Game.find();
    
        const gamesWithProv = await Promise.all(
            dataGames.map(async (game) => {
                const dataProv = await Provider.findById(game.platform)
                game.platform = dataProv
                return game
            })
        )

        res.json(gamesWithProv)
    } catch (err) {
        res.json({ err: true, message: err })
    }
}

module.exports = get_gamesController