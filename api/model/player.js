const mongoose = require('mongoose')
const schema = mongoose.Schema

const playerSchema = schema({
    _id: schema.Types.ObjectId,
    Name: {type:String,required: true},
    Age:{type:Number,required:true},
    Team:{type:String,required:true},
    Plink:{type:String,required:true}
})

module.exports = mongoose.model("Player",playerSchema)