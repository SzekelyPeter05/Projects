const express           = require("express");
var cors                = require('cors');
const http              = require("http");
var bodyParser          = require('body-parser');
var jsonParser          = bodyParser.json();
const socketIo          = require("socket.io");
const path              = require('path');
const MongoClient       = require("mongodb").MongoClient;

const app = express();
const server = http.createServer(app);
var fs = require('fs');


const dbConnectionUrl   = "mongodb+srv://peter:0Da56c47@cluster0-qptur.mongodb.net/shop?retryWrites=true&w=majority";
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));
app.use(cors()) // { origin: '*', credentials: true }
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
  }));
app.use(bodyParser.json({limit: "50mb"}));
app.post('/getProducts',jsonParser, (req , res) => {
    dbCollection.find().toArray( (err,result)=> {
        if(result.length > 0)
        {   
            console.log(result);
            res.json( {products: result} ); 
        }
        else{
            res.json( {resp:"there is no result"} ); 
        }
        
    })
    
  });
  const port = 5001;
  server.listen(port, () => console.log( `Server started on port ${port} `));
  const io = socketIo(server, {pingTimeout: 20000, pingInterval: 20000});/*, 'polling'*/
  io.use(function(socket, next){
    /*  var joinServerParameters = JSON.parse(socket.handshake.query.joinServerParameters);
      if (joinServerParameters.token == "xxx" ){ */
      
        next();          
     /* } else {*/
        //next(new Error('Authentication error'));                  
     /* }*/
      return;       
    });

    const dbName = "shop";
const dbCollectionName = "shop";

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
