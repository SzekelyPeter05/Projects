const express = require("express");
var cors = require('cors')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const MongoClient = require("mongodb").MongoClient;
const dbConnectionUrl = "mongodb+srv://peter:0Da56c47@cluster0-p7rus.mongodb.net/test?retryWrites=true&w=majority";
const app = express();


  var registerSchema = new mongoose.Schema({
    firstName:  String, // String is shorthand for {type: String}
    lastName: String,
    email:   String,
    password: String
  });
  var registerModel = mongoose.model('user', registerSchema);
app.use(cors())

var dbCollection;

app.post('/api/customers',jsonParser, (req, res) => {
    const customers = [
        {id : 1 , name : 'teszt '}
    ];
    res.json(customers);
} );
// Access the parse results as request.body
app.post('/login',jsonParser, (req , res) => {

     dbCollection.find({email:   req.body.email.toString()}).toArray( (err,result)=> {
        if(result.length > 0)
        {
            res.json("userIsExist");
        }
        else
        {
            const item =  new registerModel({firstName:  req.body.firstName, // String is shorthand for {type: String}
                lastName: req.body.lastName,
                email:   req.body.email,
                password: req.body.password
                });   /*req.body;*/

                dbCollection.insertOne(item, (error, result) => { // callback of insertOne
                if (error) throw error;

                dbCollection.find().toArray((_error, _result) => { // callback of find
                if (_error) throw _error;

                });
                });
                res.json("Succes");
        }
     });
    
           
});


const port = 5000;

app.listen(port, () => console.log( `Server started on port ${port} `));

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
