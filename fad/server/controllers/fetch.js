// import staff from "../models/staff.js";
import form from "../models/form.js";

// var x = {"Emp_Id" : "23" , "Staff_Name" : "dadn"}

export const fetche = 
    async (req,res) => {
        const x = req.body;
        try{
            // console.log(x)
            const result = await form.find();
            console.log(result); 
            res.status(200).json(result) ;          
        }catch(error){
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }

      }
