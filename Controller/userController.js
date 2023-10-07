const User =require("../Models/User")
module.exports.all_post=async(req,res)=>{
    const user =new User({
        name:req.body.name,
        email:req.body.email
    });
    try{
        let users=await user.save()
        res.status(200).json({status:1,data:users})
    }catch(err){
        res.status(500).json({
            Message :err.message
        })
    }
}
//find all user
module.exports.get_get=async(req,res)=>{
    try{
        let users=await User.find()
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json({
            Message:err.message
        });
    }
}
//find one user
module.exports.findUser=async(req,res)=>{
    try{
        let users=await User.findById(req.params.id)
        res.status(200).json(users)

    }
    catch(err){
        res.status(500).json({
            Message:err.message
        })
    }
}
//remove one user
module.exports.deleteUser =async(req,res)=>{
    try{
        let users =await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message:"User delete succesfully",
            Data:users
        })
    }
    catch(err){
        res.status(500).json({
            Message:err.message
        })
    }
}
//update a user with the specifies id in the request
module.exports.put =async(req,res)=>{
    try {
        let users =await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({
            message:"user update succesfully",
            Data:users
        })
    }
    catch(err){
        res.status(500).json({
            Message:err.message
        })
    }
}