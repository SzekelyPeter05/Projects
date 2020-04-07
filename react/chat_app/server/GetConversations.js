const getConversations = (req,res,dbCollection) => {
  let result = dbCollection.findOne({email : req.body.email}).then(resp =>{
    if(resp !== null && resp !== 'undefined')
    {
      res.json(resp.friends);
    }
    else{
      res.json("Empty");
    }
    
  });
  
  
        
}


module.exports.getConversations = getConversations;