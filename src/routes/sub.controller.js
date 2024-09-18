const sub =require('../models/submissions.model')



















const getAllsubmissions=async(req,res,next)=>{
    let subs
    try {
       subs = await sub.find({})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({'message':'unable to get all the zones'})
    }
   
    res.status(200).json({data:subs})

}


const deletesub=async(req,res,next)=>{
    const {subid}= req.params;
    let subs;
    try {
       await sub.findByIdAndDelete(subid)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"unable to delete the Plan"})
    }
   
    try {
        subs = await sub.find({})
         
     } catch (error) {
         console.log(error)
         return res.status(500).json({message:"unable to load the remaining after deleting"})
     }


     const returnablePlans = subs
     return res.status(200).json({data:returnablePlans})
     
    
}

const postsub= async(req,res,next)=>{

   
    const postingPlan = new sub (req.body)

    let plans;
    try{
        await postingPlan.save();

    }
    catch(err){
        console.log(err)
        return res.status(400).json({message:'Unable to save the data'})
    }
    try{
        subs = await sub.find({})
        
      }
      catch(err){
          console.log(err)
          return res.status(400).json({message:'Unable to save the data'})
      }

     
      return res.status(200).json({data:subs})


}












module.exports ={
    postsub,
    getAllsubmissions,
    deletesub
}