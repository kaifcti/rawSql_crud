const { insertIntoDb,fetchIntoDb,updateIntoDb,deleteIntoDb,fetchDetails } = require("../models/userModel");

exports.insertIntoDb = async (req, res) => {
  try {
    let { u_id, u_name, u_sal } = req.body;

    let data = {
      u_id:u_id,
      u_name:u_name,
      u_sal:u_sal,
    };

    console.log("data", data);

    const result = await insertIntoDb(data);
    console.log("result", result);
   return res.status(200).json({
      msg: "User insert successfully!",
      data: result,
    });
  } catch (err) {
   return res.status(500).json(err);
  }
};


exports.getData = async (req, res) => {
  try {
      let {id} =req.params
    const data = await fetchIntoDb(id);
   
    console.log("data===>",data)
    res.status(200).json({
      msg:"Data fetch successfully!",
       data :data
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateData = async(req,res)=>{
  try{
    let{id}=req.params;
    let {u_sal,u_name} = req.body;

    let data={
      u_sal:u_sal,
      u_name:u_name
      
    }
    const result = await updateIntoDb(data,id);
    res.status(200).json({
      msg:"Data update successfully!",
       data :result
      });
  }catch(error){
    res.status(500).json({ error: error.message });
  }
}

exports.deleteData =async(req,res)=>{
  try {
    let{id}=req.params;

    let result = await deleteIntoDb(id)
    res.status(200).json({
      msg:"Data delete successfully!",
       data :result
      });
    
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.allDetails = async(req,res)=>{
  try {
    let result = await fetchDetails();
    res.status(200).json({
      msg:"Data fetch successfully!",
       data :result
      });
    
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
