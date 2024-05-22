const mongoose = require('mongoose')



const Complainschema = new mongoose.Schema({
    complainName:String,
    complainUrl:String,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    replys: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reply",
      },
      user: Object,

})

module.exports = mongoose.model("Complains", Complainschema );