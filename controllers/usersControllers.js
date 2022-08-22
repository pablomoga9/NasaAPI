const user = require('../models/userModels');


const createUser = async(req,res)=>{
    console.log("fewfwe")
    try{
        
        let newUser = await user.createUsers(req.body,res);
        res.status(200).json(newUser);
    }
    catch(error){
        console.log(error.stack);
        res.status(400).json({"message":"el usuario no se ha creado"});
    }
}



module.exports = {
    createUser
};