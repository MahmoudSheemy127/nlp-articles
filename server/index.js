const express = require('express')
const api = require('./api.js');

const app = express();


const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('dist'));

app.get('/',function(req,res){
    res.sendFile('dist/index.html');
})

app.get('/analyze', function(req,res){
    api.nlpCall();
    
})
app.get('/get-analysis',function(req,res){
    res.send(api.articleData);    
})
app.post('/post-article',async function(req,res){
    console.log(req.body);
    await api.nlpCall(req.body.Article);
    console.log("data from func ",api.articleData);
    res.send(api.articleData);
})

app.listen(8080,function(){
    console.log("Server is running at port 8080");
})
