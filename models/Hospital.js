const mongoose=require("mongoose");
const Patient = require("./Patient");
const {Schema}=mongoose;
const HospitalSchema=new Schema({
    name:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    licence_number:{
        type:String
    },
    pincode:{
        type:String
    },
    contact_no:{
        type:String
    },
    emergency_con:{
        type:String
    },
    director_name:{
        type:String
    },
    address:{
        type:String
    },
    email:{
        type:String,
    },
    totalCand:{
        type:Number,
        default:0
    },
    patients:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Patient"
        }
    ]
});


  
const Hospital = mongoose.model("Hospital", HospitalSchema);
module.exports = Hospital;