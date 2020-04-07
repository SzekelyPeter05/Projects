const getUsers = (req,res,dbCollection) => {
    dbCollection.find({email : {$ne:req.body.email}}).project({ firstName: 1, lastName: 1,email: 1,profil_path:1, _id: 0 }).toArray((err,result) => {
        
        dbCollection.findOne({email:req.body.email}).then(myUser => {
          
          result = result.filter(filter =>
                      !myUser.friends.find(item =>   item.email === filter.email)
             );
          
          res.json(result);
        });
          
          
      });
}


module.exports.getUsers = getUsers;