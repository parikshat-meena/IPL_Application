const mongoose= require('mongoose')
const Match = require('../model/match')

// delete match
exports.deleteMatch = async(req,res)=>{
    try{
        const match = await Match.findByIdAndDelete(req.params.matchId);
        res.status(200).json({
            msg:"match deleted successfully",
            data: match
        })
    }catch(err){
        res.status(501).json({
            msg : "something went wrong while deleting match",
            err : err
        })
    }
}

// update match 
exports.updateMatch = async(req,res)=>{
    try{
        const match = await Match.findByIdAndUpdate(req.params.matchId,req.body);
        res.status(200).json({
            msg:"match updated successfully",
            data: match
        })
    }catch(err){
        res.status(501).json({
            msg : "something went wrong while updating match",
            err : err
        })

    }
}


// fetching single match
exports.getMatchById = async(req,res)=>{
    try{
        const match = await Match.findById(req.params.matchId);
        res.status(200).json({
            msg:"single match fetched successfully",
            data: match
        })
    }catch(err){
        res.status(501).json({
            msg : "something went wrong while fetching single match",
            err : err
        })

    }
}

// creating match
exports.createMatch = async(req,res)=>{
    try{
        const match = new Match({
            _id : new mongoose.Types.ObjectId,
            Team1 : req.body.Team1,
            Team2: req.body.Team2,
            Result: req.body.Result,
            ScoreT1: req.body.ScoreT1,
            ScoreT2: req.body.ScoreT2
        })

        const data = await match.save();
        res.status(200).json({
            msg:"match saved successfully",
            product: data
        })

    }catch(err){
        res.status(501).json({
            msg:"Something went wrong while saving match",
            err:err
        })
    }
}

// fetching all matches
exports.getMatch = async(req,res)=>{
    try{
        const match = await Match.find();
        res.status(200).json({
            msg: "Match fetched successfully!!",
            data: match
        })
    }catch(err){
        res.status(501).json({
            msg: "Something went wrong while fetching matches",
            err: err
        })
    }
}