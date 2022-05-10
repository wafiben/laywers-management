const avocat=require('../Models/Avocat')
const addAvocat=async(req,res)=>{
    const avocat=req.body
    try {
        
        const newAvocat=new ({})
        newAvocat.save()
    } catch (error) {
        
    }
}