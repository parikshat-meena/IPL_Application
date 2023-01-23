const express = require('express')
const router = express.Router()
const player = require('../controller/player.controller')

router.get('/',player.getPlayer)
router.get('/:playerId',player.getPlayerById)
router.post('/',player.createPlayer)
router.put('/:playerId',player.updatePlayer)
router.delete('/:playerId',player.deletePlayer)

module.exports = router