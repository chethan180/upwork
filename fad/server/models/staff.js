import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    Emp_Id: { type: String, required:  true  },
    Staff_Name: { type: String, required: true },
    Dept: { type: String, required: true },
    Sub_Dept: { type: String, required: true },
    Doj: { type: String, required: true },
    Designation: { type: String, required: true },
    Contact: { type: String, required: true },
    Email: { type: String, required: true },
    Type: { type: String, required: true },
    Password: { type: String, required: true },
    Reset_Token: { type: String, required: true },
    Reset_Expire: { type: Boolean, default:false ,required: true },
    
});

export default mongoose.model("staff", staffSchema);


