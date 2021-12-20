const fetch = require('node-fetch');
const FormData = require('form-data');
const dotenv = require("dotenv");

const articleData = {}



//Api Call to meaning cloud for NLP
async function nlpCall(data) {
  dotenv.config();
  const formdata = new FormData();

    formdata.append("key", `${process.env.API_KEY}`);
    if(data.content == "text")
    {
      formdata.append("txt", data.Article);
    }
    else
    {
      formdata.append("url", data.Article);
    }
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body:formdata,
        redirect: 'follow'
      };

      //API call to the meaning Cloud to get text analysis
      try{
      const response = await fetch("https://api.meaningcloud.com/sentiment-2.1",requestOptions);
      const data = await response.json();
      console.log(data);
      articleData["irony"] = data.irony
      articleData["polarity"] = data.score_tag
      articleData["subjectivity"] = data.subjectivity;
      articleData["code"] = data.status.code;
    }
    catch(err)
    {
      console.log("Some Error");
    }
}

module.exports ={
    nlpCall,
    articleData
} 