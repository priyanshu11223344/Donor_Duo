const mongoose=require("mongoose")
const {Schema}=mongoose;
const PatientSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    city:{
      type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    image:{
      type:String,
    },
    certificate:{
      type:String
    }
});
module.exports=mongoose.model('Patient',PatientSchema)