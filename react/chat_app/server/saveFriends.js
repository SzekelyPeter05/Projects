const saveFriends = (req , res,dbCollection ) => {
    let newFriends = [];
    dbCollection.find({ email : { $in :req.body.users} }).project({ email: 1,profil_path:1,firstName:1,lastName:1, _id: 0 }).toArray((err,resultUsers) => {

       dbCollection.findOne({email :req.body.user}).then(myUser => {
         
        resultUsers.map(item =>{
          if(!myUser.friends.some(found => found.email === item.email )) 
            {  
              
              let newFriend = { 
                                   email: item.email,
                                   firstName : item.firstName,
                                   lastName : item.lastName,
                                   imageUrl: item.profil_path,
                                   imageAlt: item.firstName + ' ' + item.lastName,
                                   title : item.firstName + ' ' + item.lastName,
                                   createdAt: "",
                                   latestMessageText : "There is no message",
                                   messages: []
                               };
               
               newFriends.push(newFriend);
             }
         });
         if(newFriends.length > 0)
          {
          dbCollection.updateOne({email: req.body.user},{$push: { friends: { $each: newFriends}}});
          var promises = newFriends.map(item => {
                let newFriend = {
                  email: myUser.email,
                  imageUrl: myUser.profil_path,
                  firstName : myUser.firstName,
                  lastName : myUser.lastName,
                  imageAlt: myUser.firstName + ' ' + myUser.lastName,
                  title : myUser.firstName + ' ' + myUser.lastName,
                  createdAt: "",
                  latestMessageText : "There is no message",
                  messages: []
                }
          dbCollection.updateOne({email: item.email},{$push: { friends: newFriend}});      
          });
          Promise.all(promises).then(function(results) {
            res.json( { type: "Succes" , friends:newFriends });
          })
         
          }
       });
    });
}


module.exports.saveFriends = saveFriends;