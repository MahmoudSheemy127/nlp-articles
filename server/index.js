const express = require('express')
const api = require('./api.js');

const app = express();


const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


app.use(express.static('dist'));

app.get('/',function(req,res){
    res.sendFile('dist/index.html');
})


// post-article route for calling the api and sending the result back
app.post('/post-article',async function(req,res){
    console.log(req.body);
    await api.nlpCall(req.body);
    console.log("data from func ",api.articleData);
    res.send(api.articleData);
})

app.listen(8081,function(){
    console.log("Server is running at port 8081");
})

