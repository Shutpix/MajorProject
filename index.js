const express = require('express');
const app = express();
const port = 8000;

app.listen(port, (err)=>{
    if(err){
        console.log(`Error in runnung the server: ${err}`);
    }
    console.log(`Server is up and runnung on port: ${port}`);

});