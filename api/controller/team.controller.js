const mongoose = require('mongoose')
const Team = require('../model/team')

//deleting Team record
exports.deleteTeam = async(req,res)=>{
    try{
        const team = await Team.findByIdAndDelete(req.params.teamId);
       res.status(200).json({
        msg:"Team Data Deleted Successfully",
        data: team
       }) 
    }catch(err){
        res.status(501).json({
            msg:"something went wrong while deleting team data",
            err: err
        })
    }
}

// update Team record
exports.updateTeam = async(req,res)=>{
    try{
        const team = await Team.findByIdAndUpdate(req.params.teamId,req.body);
       res.status(200).json({
        msg:"Team Data updated successfully",
        data: team
       }) 
    }catch(err){
        res.status(501).json({
            msg:"something went wrong while updating teams data",
            err: err
        })
    }
}

// creating team record
exports.createTeam = async(req,res)=>{
    
    try{
        const team = new Team({
            _id: new mongoose.Types.ObjectId,
            tName:req.body.tName,
            img:req.body.img
        })
        const data = await team.save();
       res.status(200).json({
        msg:"Team record created successfully",
        product: data
       }) 
    }catch(err){
        res.status(501).json({
            msg:"something went wrong while fetching teams data",
            err: err
        })
    }
}


// fetching team by id
exports.getTeamById = async(req,res)=>{
    try{
        const team = await Team.findById(req.params.teamId);
       res.status(200).json({
        msg:"Single Team Data fetched successfully",
        data: team
       }) 
    }catch(err){
        res.status(501).json({
            msg:"something went wrong while fetching team by id",
            err: err
        })
    }
}

// fetching teams
exports.getTeams = async(req,res)=>{
    try{
        const team = await Team.find();
       res.status(200).json({
        msg:"Team Data fetched successfully",
        data: team
       }) 
    }catch(err){
        res.status(501).json({
            msg:"something went wrong while fetching teams data",
            err: err
        })
    }
}