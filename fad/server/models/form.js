import mongoose from "mongoose";

const Formschema = mongoose.Schema({
  Name: { type: String, required: true },
  Email :{type:String, required : true},
  Age:{type:String,required:true},
  DOB:{type:String,required:true},
  Contact: { type: String, required: true },
  Occupation: { type: String, required: true },
  Hobbies: { type: String },
});

export default mongoose.model("form", Formschema);