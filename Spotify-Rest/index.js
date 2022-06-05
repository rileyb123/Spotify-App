const express = require('express');
const app = express();
const querystring = require('querystring');
const path = require('path');
const cors = require('cors')
require('dotenv').config();
app.use(cors({origin:'http://localhost:4200'}))


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
  app.get('/img',function(req,resp){
    
    var url = {'url':'https://i.scdn.co/image/ab6775700000ee853a5519cdbcb458213299e79d'}

    resp.send(url)
  })
  app.get('/callback', function(req,resp){
    //resp.send("Moulids")
   resp.sendFile('/Users/Moulid/Desktop/code/pythonStuff/apiStuff/spot/Spotify-App/Spotify-Rest/index.html');
  });

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}/`);
  })