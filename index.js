const express = require("express");
const app = express();
app.use(express.static(__dirname + "/"));

app.listen(9090,()=>{
    console.log('app live on port 9090');
    
})