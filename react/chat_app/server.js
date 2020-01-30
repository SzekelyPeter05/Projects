const express = require("express");


const app = express();


app.get('/api/customers', (req, res) => {

    const customers = [
        {id : 1 , name : 'teszt '}
    ];

    res.json(customers);
} );
// Access the parse results as request.body
app.post('/', (req , res) => {

});


const port = 5000;

app.listen(port, () => console.log( `Server started on port ${port} `));