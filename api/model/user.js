const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = schema({
    _id: schema.Types.ObjectId,
    username:{type:String,required:true},
    password:{type:String,required: true}
})

module.exports = mongoose.model("User",userSchema)