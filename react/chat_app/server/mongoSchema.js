var mongoose            = require('mongoose');

var registerSchema = new mongoose.Schema({
    firstName:  String, // String is shorthand for {type: String}
    lastName: String,   
    email:   String,
    password: String,
    profil_path: String,
    friends: [{ email : String , imageUrl : String,
                imageAlt: String, title: String, 
                createdAt: String, latestMessageText: String,
                messages: 
                            [{imageUrl: String, imageAlt: String, messageText: String,
                              createdAt: String, isMyMessage: Boolean}]
            }],
  });
  var registerModel = mongoose.model('user', registerSchema);

module.exports.registerModel = registerModel;