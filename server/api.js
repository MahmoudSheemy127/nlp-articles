const fetch = require('node-fetch');
const FormData = require('form-data');
const dotenv = require("dotenv");

const articleData = {}

dotenv.config();
// const Key = "ebd0baaf0f43ea0df0f0e4b26b09245e";


//Api Call to meaning cloud for NLP
async function nlpCall(data) {
  const formdata = new FormData();
  console.log(process.env.API_KEY);
    // formdata.append("key", "ebd0baaf0f43ea0df0f0e4b26b09245e");
    formdata.append("key", `${process.env.API_KEY}`);
    formdata.append("txt", data);
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body:formdata,
        redirect: 'follow'
      };

    try{
      const response = await fetch("https://api.meaningcloud.com/sentiment-2.1",requestOptions);
      const data = await response.json();
      // console.log(data);
      articleData["irony"] = data.irony
      articleData["polarity"] = data.score_tag
      articleData["subjectivity"] = data.subjectivity;
      // console.log(articleData);      
    }
    catch(err)
    {
      console.log("Some Error");
    }
      //console.log(data);
    // fetch("https://api.meaningcloud.com/sentiment-2.1",requestOptions).then(response => ({
    //     status: response.status, 
    //     body: response.json()
    //   }))
    //   .then(({ status, body }) => console.log(status, body)).catch((err) => {
    //     console.log("Err "+err);
    // })
}

module.exports ={
    nlpCall,
    articleData
} 