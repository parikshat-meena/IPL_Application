const express = require('express')
const router = express.Router()

const match = require('../controller/match.controller')

router.get('/',match.getMatch)
router.post('/',match.createMatch)
router.get('/:matchId',match.getMatchById)
router.put('/:matchId',match.updateMatch)
router.delete('/:matchId',match.deleteMatch)

module.exports= router