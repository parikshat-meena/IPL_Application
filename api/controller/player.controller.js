const mongoose = require('mongoose')
const Player = require('../model/player')

// deleting player record
exports.deletePlayer = async(req,res)=>{
    try{
        const player = await Player.findByIdAndDelete(req.params.playerId)
        res.status(200).json({
            msg : "Player Deleted successfully",
            data: player
        }) 
    }catch(err){
        res.status(501).json({
            msg : "something went wrong while deleting player information",
            err : err
        }) 
    }
}

//updating player record
exports.updatePlayer = async(req,res)=>{
    try{
        const player = await Player.findByIdAndUpdate(req.params.playerId,req.body)
        res.status(200).json({
            msg : "Player updated successfully",
            data: player
        }) 
    }catch(err){
        res.status(501).json({
            msg : "something went wrong while updating player information",
            err : err
        }) 
    }
}

// creating player record
exports.createPlayer = async(req,res)=>{
    try{
        const player = new Player({
            _id: new mongoose.Types.ObjectId,
            Name: req.body.Name,
            Age: req.body.Age,
            Team: req.body.Team,
            Plink: req.body.Plink
        })

        const data = await player.save();
        res.status(200).json({
            msg : "Player added successfully",
            product: data
        })  
    }catch(err){
        res.status(501).json({
            msg : "something went wrong while adding player",
            err : err
        }) 
    }
}

// fetching single player information
exports.getPlayerById = async(req,res)=>{
    try{
        const player = await Player.findById(req.params.playerId);
        res.status(200).json({
            msg : "Single player information fetched successfully",
            data: player
        })
    }catch(err){
        res.status(501).json({
            msg : "something went wrong while fetching single player information",
            err : err
        }) 
    }
}

// fetching all players
exports.getPlayer = async(req,res)=>{
    try{
        const player = await Player.find();
        res.status(200).json({
            msg : "Player information fetched successfully",
            data: player
        })
    }catch(err){
        res.status(501).json({
            msg : "something went wrong while fetching player records",
            err : err
        })
    }
}
