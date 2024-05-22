const mongoose = require('mongoose')

const Replyschema = new mongoose.schema({
    reply:String,
    complainId:{
        type:mongoose.schema.Types.ObjectId,
        ref:"complains"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
    

})

module.exports = mongoose.model("Replys", ReplySchema);