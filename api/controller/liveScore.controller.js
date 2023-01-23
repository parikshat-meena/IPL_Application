const mongoose = require('mongoose')
const LiveScore = require('../model/liveScore')

// Creating live score
exports.createScore = async(req,res)=>{
    try{
        const liveScore = new LiveScore({
            _id: new mongoose.Types.ObjectId,
            Team1: req.body.Team1,
            Team2: req.body.Team2,
            Result: req.body.Result,
            ScoreT1: req.body.ScoreT1,
            ScoreT2: req.body.ScoreT2
        })

        const data = await liveScore.save();
        res.status(200).json({
            msg: "Live score updated successfully",
            product: data
        })
    }catch(err){
        res.status(501).json({
            msg :"something went wrong while creating live scores",
            err : err
            
        })
    }
}

// deleting score
exports.deleteScore = async(req,res)=>{
    try{
        const score = await LiveScore.findByIdAndDelete(req.params.liveScoreId);
        res.status(200).json({
            msg: "Live score deleted successfully",
            data: score
        })
    }catch(err){
        res.status(200).json({
            msg:"something went wrong while deleting live scores",
            err: err
        })
    }
}

// update live scores
exports.updateScore = async(req,res)=>{
    try{
        const score = await LiveScore.findByIdAndUpdate(req.params.liveScoreId,req.body);
        res.status(200).json({
            msg: "Live score updated successfully",
            data: score
        })
    }catch(err){
        res.status(200).json({
            msg:"something went wrong while updating live scores",
            err: err
        })
    }
}

// fetching  live score
exports.getScore = async(req,res)=>{
    try{
        const score = await LiveScore.findById(req.params.liveScoreId);
        res.status(200).json({
            msg: "single live score fetched successfully",
            data: score
        })
    }catch(err){
        res.status(200).json({
            msg:"something went wrong while fetching single live scores",
            err: err
        })
    }
}

// fetching all live scores
exports.getScores = async(req,res)=>{
    try{
        const score = await LiveScore.find();
        res.status(200).json({
            msg: "Live score fetched successfully",
            data: score
        })
    }catch(err){
        res.status(200).json({
            msg:"something went wrong while fetching live scores",
            err: err
        })
    }
}