const mongoose = require('mongoose');
const { Schema } = mongoose;
const BankSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  image:{
    type:String,
    //required:true
  },
  age:{
    type:Number,
  },
  bloodGroup:{
    type:String,
    //required:true
  },
  city:{
    type:String,
    required:true
  },
  certificate:{
    type:String,
    //required:true
  },
  description:{
    type:String
  },
  hospital:{
    type:String,
    required:true
  }
});
module.exports=mongoose.model('Bank',BankSchema)
