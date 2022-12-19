import "./connection.js"; 
import RegisterSchemaModel from "../schema/registerschema.js";

class indexmodel
{
    userRegisterModel(userDetails)
    {
        return new Promise((resolve,reject)=>{
       // a document instance
       var obj = new RegisterSchemaModel(userDetails);

       // save model to database
        obj.save((err,result)=>{
            err ? reject(err) : resolve(result);
        });
    })
    }


    fetchUsers(condition_obj)
    {
        return new Promise((resolve,reject)=>{
            //to find record from collection
            RegisterSchemaModel.find(condition_obj,(err,result)=>{
                err ? reject(err) : resolve(result);
            })
        })
    }
     
}

export default new indexmodel() 




 /*return new Promise((resolve,reject)=>{
            db.collection('practice').insertOne(userDetails,(err,result)=>{
                err ? reject(err) : resolve(result)
            })
        })*/