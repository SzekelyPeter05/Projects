const getConversations = (req,res,dbCollection) => {
  let result = dbCollection.findOne({email : req.body.email}).then(resp =>{
    if(resp !== null && resp !== 'undefined')
    {
      res.json({converstations: resp.friends,
                 profile_path: resp.profil_path,
                firstName: resp.firstName,
                lastName : resp.lastName});
    }
    else{
      res.json("Empty");
    }
    
  });
  
  
        
}


module.exports.getConversations = getConversations;