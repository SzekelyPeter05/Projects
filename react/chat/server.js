const express = require("express");

const app = express();


app.get('/api/customers', (req,res)  =>
 {
     const customers = [{ id:1, name: "Jhon Doe" }];

     res.json(customers);
 }
);




const port = 5000;

app.listen(port, () => console.log(`Console started on ${port}`));
