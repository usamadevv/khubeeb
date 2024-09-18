const Zone = require('../models/zones.model')


const validateZoneName=(name)=>{
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

const validateZoneData=(data)=>{
    
    
    if(!data){
        return false;
    }
   else if(typeof data!=='object'){
        return false;
    }
    else if(data.length===0){
        return false
    }
    else {
        return true;
    }
}




   const calculateRange=(data)=>{
    let min=Number(data[0]['price']);
    let max=Number(data[0]['price']);
    data.forEach(element => {
        if(Number(element['price'])<min){
            min=Number(element['price'])
        }
        if(Number(element['price'])>max){
            max = Number(element['price'])
        }
    });
  
    return {
        min,max
    }

}



const GetTableData=(zones)=>{

   return zones.map((zone)=>{
        let obj ={
            zoneId:zone['_id'],
            zoneName:zone['name'],
            propertyTypes:zone['data'].length,
            priceRange:calculateRange(zone['data'])
        }
        return obj
    })
}














const getAllZones=async(req,res,next)=>{
    let zones
    try {
       zones = await Zone.find({})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({'message':'unable to get all the zones'})
    }
   const returnableZones = GetTableData(zones)
    res.status(200).json({data:returnableZones})

}





const getEveryZone=async(req,res,next)=>{
    let zones
    try {
       zones = await Zone.find({})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({'message':'unable to get all the zones'})
    }
    res.status(200).json({data:zones})

}


const deleteZoneById=async(req,res,next)=>{
    const {zoneId}= req.params;
    let zones;
    try {
       await Zone.findByIdAndDelete(zoneId)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"unable to delete the zone"})
    }
   
    try {
        zones = await Zone.find({})
         
     } catch (error) {
         console.log(error)
         return res.status(500).json({message:"unable to load the remaining after deleting"})
     }


     const returnableZones = GetTableData(zones)
     return res.status(200).json({data:returnableZones})
     
    
}

const postZone= async(req,res,next)=>{

    const {zoneName,zoneData} =  req.body;
    if(!validateZoneName(zoneName)||!validateZoneData(zoneData)){
        return res.status(400).json({message:"Invalid data"})
    }  
    const postingZone = new Zone ({ 
        name:zoneName,
        data:zoneData,
    })

    let zones;
    try{
        await postingZone.save();

    }
    catch(err){
        console.log(err)
        return res.status(400).json({message:'Unable to save the data'})
    }
    try{
        zones = await Zone.find({})
        
      }
      catch(err){
          console.log(err)
          return res.status(400).json({message:'Unable to save the data'})
      }

      const returnableZones = GetTableData(zones)
      return res.status(200).json({data:returnableZones})

    // return res.status(200).json({zone})

}












module.exports ={
    postZone,
    getAllZones,
    deleteZoneById,getEveryZone
}