const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({

    title:{
        type:String,
        required : true
    },
    body:{
        type:String,
        required:true
    },
    user:[
        {
            type :mongoose.Types.ObjectId,
            ref :"User"
        },
    ]
})

const listmodel = new mongoose.model("List",listSchema);
module.exports = listmodel;