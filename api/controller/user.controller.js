const mongoose = require('mongoose')
const User = require('../model/user')

// deleting user record
exports.deleteUser = async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.userId);
        res.status(200).json({
            msg: "User deleted successfully",
            data: user
        })
    }catch(err){
        res.status(200).json({
            msg:"Something went wrong while deleting user",
            err: err
        })
    }
}

// updating user record
exports.updateUser = async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.userId,req.body);
        res.status(200).json({
            msg: "User updated successfully",
            data: user
        })
    }catch(err){
        res.status(200).json({
            msg:"Something went wrong while updating user",
            err: err
        })
    }
}


// creating user record
exports.createUser = async(req,res)=>{
    try{
        const user = new User({
            _id: new mongoose.Types.ObjectId,
            username: req.body.username,
            password: req.body.password
        })

        const data = await user.save();
        res.status(200).json({
            msg: "User record created successfully",
            data: data
        })
    }catch(err){
        res.status(501).json({
            msg:"Something went wrong while creating user",
            err: err
        })
    }
}

// fetching user by Id
exports.getUserById = async(req,res)=>{
    try{
        const user = await User.find(req.params.userId);
        res.status(200).json({
            msg: "User by Id fetched successfully",
            data: user
        })
    }catch(err){
        res.status(501).json({
            msg:"Something went wrong while fetching single user",
            err: err
        })
    }
}

// fetching users
exports.getUser = async(req,res)=>{
    try{
        const user = await User.find();
        res.status(200).json({
            msg: "User fetched successfully",
            data: user
        })
    }catch(err){
        res.status(200).json({
            msg:"Something went wrong while fetching user",
            err: err
        })
    }
}