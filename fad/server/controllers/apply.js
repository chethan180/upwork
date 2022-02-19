// import staff from "../models/staff.js";
import form from "../models/form.js";

// var x = {"Emp_Id" : "23" , "Staff_Name" : "dadn"}

export const applye = 
    async (req,res) => {
        const x = req.body;
        try{
            console.log(x)
            const result = await form.create({ Email:x.Email,Age:x.Age ,DOB:x.DOB,Contact:x.Contact,Occupation:x.Occupation,Hobbies:x.Hobbies, Name:x.Name });            
        }catch(error){
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }

      }
