const express = require('express')
const router = express.Router()
const teams = require('../controller/team.controller')


router.get('/',teams.getTeams)
router.get('/:teamId',teams.getTeamById)
router.post('/',teams.createTeam)
router.put('/:teamId',teams.updateTeam)
router.delete('/:teamId',teams.deleteTeam)

module.exports = router