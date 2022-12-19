 import indexmodel from "../model/indexmodel.js";
class admincontroller {
  userRegister(userDetails) {
    return new Promise((resolve, reject) => {
      indexmodel.fetchUsers({}).then((result) => {
          var l = result.length;
          var _id = l == 0 ? 1 : result[l - 1]._id + 1;
          userDetails = {...userDetails, _id:_id,role:"user",status:0,info:Date()};
          indexmodel.userRegisterModel(userDetails).then((result) => {resolve(result);})
            .catch((err) => {reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  userLogin(userDetails)
  {
    return new Promise((resolve,reject)=>{
      userDetails={...userDetails,'status':1}
      indexmodel.fetchUsers(userDetails).then((result)=>{
        var s=result.length==0 ? 0 :(result[0].role=="admin"?1:2);
        resolve({"s":s});
      }).catch((err)=>{
        reject(err);
      })
    })
  }



}



export default new admincontroller();

/* */
