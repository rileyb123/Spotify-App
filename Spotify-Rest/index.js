const express = require('express')
const app = express()
const querystring = require('querystring');
require('dotenv').config()


var client_id = process.env.CLIENT_ID;
var redirect_uri = 'http://localhost:3001/callback';


  
app.get('/', function(req, res) {

    var state = "HDUTIFJKEUTLAPSD";
    var scope = 'user-read-private user-read-email';
  
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }));
  });

  app.get('/callback', function(req,resp){
      console.log(req);
    resp.send('<a href="/logout">Log Out</a>')
  });

  app.get('/logout' , function(req,resp){
      
      resp.redirect("https://accounts.spotify.com/en/logout?"+
      querystring.stringify({
        redirect_uri: 'http://localhost:3001/loggedOut'
    }));
  });

  app.get('/loggedOut', function(req,resp){
    console.log(req);
  resp.send("It worked")
});



  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })