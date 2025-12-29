const mongoose = require("mongoose");
const pasteSchema =new mongoose.Schema({
    content:{
        type: String,
         required: true
    },
    views:{
        type: Number,
        default:null

    },
    expires:{
        type: Date,
        default:0
    }

});
module.exports = mongoose.model("Paste",pasteSchema);