
const express = require('express');
const axios = require('axios')
// const fetch1 = require('node-fetch');
const app = express();
// import fetch from "node-fetch";
const querystring = require('querystring');
const path = require('path');
const cors = require('cors');


// const { request } = require('http');
// const { response } = require('express');
require('dotenv').config();
app.use(cors({origin:'http://localhost:4200'}))
// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;

// var $ = jQuery = require('jquery')(window);


var client_id = process.env.CLIENT_ID;
var redirect_uri = 'http://localhost:3001/callback';


  
    app.get('/', function(req, res) {

      var state = "";
      var scope = 'user-read-private user-read-email';
      res.send({"login_url" : "https://accounts.spotify.com/authorize?response_type=code&client_id=857d0328d11a46c8b005072bf1ede343&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Floading-home&state=&show_dialog=true"})
  });

  
    app.get('/logout' , function(req,resp){
        
        resp.redirect("https://accounts.spotify.com/en/logout?"+
        querystring.stringify({
          redirect_uri: 'http://localhost:3001/loggedOut'
      }));
    });
    async function getMe(tok){
      return axios.get('https://api.spotify.com/v1/me',{headers:{
        Authorization:"Bearer "+tok,
        ContentType: "application/json"}}).then((res)=>{
          console.log(res.data.images[0].url);
          return res
        })

      
    }
  app.get('/img',async function(req,resp){

    console.log("Here is the token"+req.query.token)
    var tok = req.query.token
    const url_1 = 'https://api.spotify.com/v1/me'

    var response1 = ''
    user = ''
    id = ''

    await axios.get('https://api.spotify.com/v1/me',{headers:{
        Authorization:"Bearer "+tok,
        ContentType: "application/json"}}).then((res)=>{
          response1 = res.data.images[0].url
          user = res.data.display_name
          id = res.data.id
          console.log(res);
          console.log("another one: "+response1)
        })

    var data = {'url':response1,'user':user,'id':id}
    console.log(data)
    resp.send(data)
});
  app.get('/callback', function(req,resp){
    
   resp.sendFile('/Users/Moulid/Desktop/code/pythonStuff/apiStuff/spot/Spotify-App/Spotify-Rest/index.html');
  });

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}/`);
  })