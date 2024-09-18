const Zone = require('../models/zones.model')
const Plan =require('../models/plans.model')

const validatePlanName=(name)=>{
    if(!name){
        return false;
    }
    else if(typeof name !=='string'){
        return false;
    }
    else if(name.length<1){
        return false;
    }
    else if(name.length>50){
        return false;
    }
    else {
        return true;
    }

}

const validatePlanNumbers=(data)=>{
    
    
    
   if(typeof data!=='number'){
        return false;
    }
    
    else {
        return true;
    }
}



















const getAllPlans=async(req,res,next)=>{
    let plans
    try {
       plans = await Plan.find({})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({'message':'unable to get all the zones'})
    }
   
    res.status(200).json({data:plans})

}


const deletePlanById=async(req,res,next)=>{
    const {planId}= req.params;
    let plans;
    try {
       await Plan.findByIdAndDelete(planId)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"unable to delete the Plan"})
    }
   
    try {
        plans = await Plan.find({})
         
     } catch (error) {
         console.log(error)
         return res.status(500).json({message:"unable to load the remaining after deleting"})
     }


     const returnablePlans = plans
     return res.status(200).json({data:returnablePlans})
     
    
}

const postPlan= async(req,res,next)=>{

    const {planName,downPayment, allocation, possession, quarterlyInstallment,markup} =  req.body;
    if(!validatePlanName(planName)||!validatePlanNumbers(downPayment)||!validatePlanNumbers(allocation)||!validatePlanNumbers(quarterlyInstallment)||!validatePlanNumbers(possession)||!validatePlanNumbers(markup)){
        return res.status(400).json({message:"Invalid data"})
    }  
    const postingPlan = new Plan ({
        planName,downPayment,allocation,quarterlyInstallment,possession,markup
    })

    let plans;
    try{
        await postingPlan.save();

    }
    catch(err){
        console.log(err)
        return res.status(400).json({message:'Unable to save the data'})
    }
    try{
        plans = await Plan.find({})
        
      }
      catch(err){
          console.log(err)
          return res.status(400).json({message:'Unable to save the data'})
      }

     
      return res.status(200).json({data:plans})


}












module.exports ={
    postPlan,
    getAllPlans,
    deletePlanById
}