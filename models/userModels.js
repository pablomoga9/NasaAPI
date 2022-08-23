const userSchema = require('../schemas/usersSchema')

const createUsers = async (req,res)=>{
    const newUser = req;//Con el body que pasamos desde el controller con el param "req"
    
    try{
        
        let user = new userSchema(newUser);
        console.log(user);
        let saving = await user.save();
        console.log("pasado");
        res.status(200).json({"message":saving}); 
    }
    catch(error){
        console.log(error.stack);
        res.status(404).json({"message":"there was an error creating user"})
    }
}

module.exports = {
    createUsers
}