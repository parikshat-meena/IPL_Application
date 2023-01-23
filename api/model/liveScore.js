const mongoose = require('mongoose')
const schema = mongoose.Schema

const liveScoreSchema = schema({
    _id:schema.Types.ObjectId,
    Team1:{type:String, required: true},
    Team2:{type:String,required:true},
    Result:{type:String,required:true},
    ScoreT1:{type:String,required:true},
    ScoreT2:{type:String,required:true}
})

module.exports = mongoose.model("LiveScore",liveScoreSchema)