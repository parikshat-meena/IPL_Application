const express = require('express')
const router = express.Router()
const liveScoreController = require('../controller/liveScore.controller')

router.get('/',liveScoreController.getScores)
router.get('/:liveScoreId',liveScoreController.getScore)
router.put('/:liveScoreId',liveScoreController.updateScore)
router.delete('/:liveScoreId',liveScoreController.deleteScore)
router.post('/',liveScoreController.createScore)

module.exports = router