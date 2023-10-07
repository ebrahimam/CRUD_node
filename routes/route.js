const express =require("express")
const router =express.Router()
const userController =require("../Controller/userController")
//route all paths

//inser 
router.post("/",()=>userController.all_post)
//get all 
router.get("/",()=>userController.all_get)
//find user
router.get("/:id",()=>userController.findUser)
//delete user
router.delete("/:id",()=>userController.deleteUser)
//update user
router.put("/:id",()=>userController.updateuser)




module.exports=router