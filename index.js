const express = require('express');
const app = express();

app.get('/', (req, resp)=>{
  resp.send('Hello World From Express Server');
});

app.listen(3000, function(){
    console.log("Server in Running");
})