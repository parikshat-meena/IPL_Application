const mongoose = require('mongoose')
const schema = mongoose.Schema

const teamSchema = schema({
    _id:schema.Types.ObjectId,
    tName:{type:String,required:true},
    img:{type:String},
})

module.exports = mongoose.model("Team",teamSchema)