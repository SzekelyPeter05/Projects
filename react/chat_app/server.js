const express           = require("express");
var cors                = require('cors');
const http              = require("http");
var bodyParser          = require('body-parser');
var jsonParser          = bodyParser.json();
const socketIo          = require("socket.io");
const MongoClient       = require("mongodb").MongoClient;
const registerModel     = require("./server/mongoSchema");
const saveFriends       = require("./server/saveFriends");
const getUsers          = require("./server/getUsers");
const GetConversations  = require("./server/GetConversations");
const path              = require('path');


const dbConnectionUrl   = "mongodb+srv://peter:0Da56c47@cluster0-p7rus.mongodb.net/test?retryWrites=true&w=majority";
const app = express();
// Add headers
/*app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});*/
const server = http.createServer(app);
var fs = require('fs');


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'chat/build')));


app.use(cors()) // { origin: '*', credentials: true }
var users = {};
app.use(express.static('/users'));
var dbCollection;
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
  }));
  app.use(bodyParser.json({limit: "50mb"}));

  
  app.post('/saveFriends',jsonParser, (req , res) => {
    saveFriends.saveFriends(req,res,dbCollection);
  });
  app.post('/getUsers',jsonParser, (req , res) => {
    getUsers.getUsers(req,res,dbCollection);    
  });
  app.post('/GetConversations',jsonParser, (req , res) => {
    GetConversations.getConversations(req,res,dbCollection);    
  });

  

// Access the parse results as request.body
app.post('/saveAvatar',jsonParser, (req , res) => {

    let public_url = "/users/"+req.body.user+"/profile/prof.png";
    var base64Data = req.body.content.replace(/^data:image\/png;base64,/, "");
    // Assuming that 'path/file.txt' is a regular file.
    require("fs").unlink("chat/build/users/"+req.body.user+"/profile/prof.png", (err) => {
        if (err) { console.log(err) };
        
    });
    require("fs").writeFile("chat/build" + public_url, base64Data, 'base64', function(err) {
      if(err)
      {
        console.log(err)
        res.json({type : "fail"});
        
      }
      else{
        
        dbCollection.updateOne({email: req.body.user},{ $set: {profil_path : public_url}});
        dbCollection.find({"friends.email":  req.body.user})
        .project({ email: 1, _id: 0 }).toArray((err,result) => {
          result.map(arr => {
            dbCollection.updateOne({email: arr.email,"friends.email" : req.body.user },{ $set: { "friends.$.imageUrl" : public_url}});
          });
        });
        res.json({type: 'Succes', path: public_url});
        
      }
     
    });

});
// Access the parse results as request.body
app.post('/login',jsonParser, (req , res) => {
  
    dbCollection.find({email:   req.body.email.toString()}).toArray( (err,result)=> {
        if(result.length > 0)
        {   
            if(result[0].password === req.body.password.toString())
            {  
              
                 res.json({ type: "Succes", profilePath: result[0].profil_path });
            }
            else{
                res.json({ type: "BadPassword", profilePath: "" });
            }
        }
        else{
            res.json({ type: "BadEmail", profilePath: "" } );
        }
    }
    )

});
// Access the parse results as request.body
app.post('/register',jsonParser, (req , res) => {

     dbCollection.find({email:   req.body.email.toString()}).toArray( (err,result)=> {
        if(result.length > 0)
        {
            res.json("userIsExist");
        }
        else
        {
            const item =  new registerModel.registerModel({firstName:  req.body.firstName, // String is shorthand for {type: String}
                lastName: req.body.lastName,
                email:   req.body.email,
                password: req.body.password,
                profil_path: "",

                });   /*req.body;*/

                dbCollection.insertOne(item, (error, result) => { // callback of insertOne
                if (error) throw error;

                dbCollection.find().toArray((_error, _result) => { // callback of find
                if (_error) throw _error;
                
                var fs = require('fs');
                var dir = "chat/public/users/" + req.body.email;
                var dir2 = "chat/public/users/" + req.body.email + "/profile";

                if (!fs.existsSync(dir)){
                     fs.mkdirSync(dir);

                     if(fs.existsSync(dir)){
                        fs.mkdirSync(dir2);
                     }
                 }

                });
                });
                res.json("Succes");
        }
     });
    
           
});


const port = 5000;

server.listen(port, () => console.log( `Server started on port ${port} `));
const io = socketIo(server, {pingTimeout: 20000, pingInterval: 20000});/*, 'polling'*/


const dbName = "chat";
const dbCollectionName = "user";

initialize(dbName, dbCollectionName, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find({firstName: 'Peter'}).toArray(function(err, result) {
        if (err) throw err;
       
    });

    // << db CRUD routes >>

}, function(err) { // failureCallback
    throw (err);
});

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

io.use(function(socket, next){
/*  var joinServerParameters = JSON.parse(socket.handshake.query.joinServerParameters);
  if (joinServerParameters.token == "xxx" ){ */
  
    next();          
 /* } else {*/
    //next(new Error('Authentication error'));                  
 /* }*/
  return;       
});
//Allow Cross Domain Requests

io.on("connection", socket => {
  
  socket.on("disconnect", function() {
 
    if(Object.keys(users).length > 0)  
    {
      delete users[socket.email] 
    }
  });
  socket.on("log_out", function() {
   
    if(Object.keys(users).length > 0)  
    {
      delete users[socket.email] 
      
    }
  });
  socket.on("private", function(data) {  
    
    console.log(Object.keys(users).length);
    if(typeof users[data.to] !== 'undefined') 
      {  
        users[data.to].emit("private", {  msg: data.msg, from: data.from, imageUrl: data.imageUrl });
      }
      let newPrivateMessageFrom = {
        imageUrl: null,
        imageAlt: data.msg,
        messageText: data.msg,
        createdAt: 'Apr 16',
        isMyMessage: true,
              }
     let newPrivateMessageTo = {
        imageUrl: data.imageUrl,
        imageAlt: data.msg,
        messageText: data.msg,
        createdAt: 'Apr 16',
        isMyMessage: false,
            }

        dbCollection.updateOne({email: data.from, "friends.email":data.to  },{$push: { "friends.$.messages": newPrivateMessageFrom}});  
        dbCollection.updateOne({email: data.to, "friends.email":data.from  },{$push: { "friends.$.messages": newPrivateMessageTo}}); 

  });
  socket.on("login", function(data) {  
    socket.email = data.email;
    users[data.email] = socket;
    
    
  });
  socket.onerror = (evt) => {
    
  }
});
// Handles any requests that don't match the ones above
app.get('/chat', (req,res) =>{
  res.sendFile(path.join(__dirname+'/chat/build/index.html'));
});