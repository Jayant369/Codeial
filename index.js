const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);   // Example of interpolation   `${}`
    }
    console.log(`Server is running on port: ${port}`);
});