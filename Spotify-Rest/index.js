var express = require('express');
var app = express()
var cors = require('cors')
const axios = require("axios");
app.use(cors({
    origin: 'http://localhost:4200'
}));


var querystring = require('querystring');
const { response } = require('express');

require('dotenv').config()



var client_id = process.env.CLIENT_ID;
var redirect_uri = 'http://localhost:4200/loading-home';


  
app.get('/', function(req, res) {

    var state = "";
    var scope = 'user-read-private user-read-email';
    res.json({login_url : "https://accounts.spotify.com/authorize?response_type=code&client_id=857d0328d11a46c8b005072bf1ede343&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Floading-home&state="})
});


app.get('/me' , async function(req,res){

    try{
        resp = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
              Authorization: 'Bearer ' + req.query.token ,
              ContentType : "application/json",
            }
           }).then()
        res.send(resp.data)
    }
    catch(e){
        console.log(e);
        res.sendStatus(500)
    }
});



  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })