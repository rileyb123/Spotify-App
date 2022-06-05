var express = require('express');
var app = express()
var cors = require('cors')
app.use(cors({
    origin: 'http://localhost:4200'
}));


var querystring = require('querystring');

require('dotenv').config()



var client_id = process.env.CLIENT_ID;
var redirect_uri = 'http://localhost:4200/loading-home';


  
app.get('/', function(req, res) {

    var state = "";
    var scope = 'user-read-private user-read-email';
    res.json({login_url : "https://accounts.spotify.com/authorize?response_type=code&client_id=857d0328d11a46c8b005072bf1ede343&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Floading-home&state="})
});

  app.get('/logout' , function(req,resp){
      
      resp.redirect("https://accounts.spotify.com/en/logout?"+
      querystring.stringify({
        redirect_uri: 'http://localhost:3001/loggedOut'
    }));
  });


  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })