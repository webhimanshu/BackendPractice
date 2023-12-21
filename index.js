const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, resp)=>{
  resp.send({data:'Hello World From Express Server'});
});


app.post('/conversations', (req, resp)=>{
  console.log(req.query.msg);
  console.log(req.body)
  console.log(req.headers['authorization']);
  resp.send({data:'Hello World Post From Express Server'});
});

app.listen(3001, function(){
    console.log("Server in Running");
})