const neas = require('../models/neasModels');

const getNeas = async(req,res)=>{
    if(req.query.class){
       try{
        let neasByClass = await neas.getNeasByClass(req.query.class);
        res.status(200).json(neasByClass)
       }
       catch(error){
        console.log(error.stack);
        res.status(404).json({"message":"neas not found"})
       }
    }
    else if(req.query.from&&req.query.to){
        try{
            let neasBoth = await neas.getNeasByPeriod(req.query.from,req.query.to);
            res.status(200).json(neasBoth); 
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"neas not found"});
        }
    }
    else if(req.query.from){
        try{
            let neasFrom = await neas.getNeasByPeriod(req.query.from, null)
            res.status(200).json(neasFrom);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"neas not found"});
        }
    }
    else if(req.query.to){
        try{
            let neasTo = await neas.getNeasByPeriod(null, req.query.to);
            res.status(200).json(neasTo);
        }
        catch(error){
            console.log(error.stack);
            res.status(404).json({"message":"neas not found"});
        }
    }
    
}

module.exports = {
    getNeas
}