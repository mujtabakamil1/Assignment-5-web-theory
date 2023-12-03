const mongoose=require("mongoose");
const Schema = mongoose.Schema({
   Name: String,
   Club : String,
   contractSalary:Number
});
const playerModel=mongoose.model("playerModel",Schema);
module.exports=playerModel;