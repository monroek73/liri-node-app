var Twitter = require('twitter');
var spotify = require('spotify');
var keys = require('./keys.js');

console.log(keys.twitterKeys);
 
var client = new Twitter({
  consumer_key: 'cANMXMokPtDt0P83kqPAFpY41',
  consumer_secret: 'tUVCapwxwaxHx6I56rSgsYLMNftiTIvG6Z6RPiEiqsS8H959fQ',
  access_token_key: '35086467-1ItNfyBBkls5vV42J4spEDiYxB1R32C7zad3GuV0y',
  access_token_secret: 'RKkUuMDVHiGQr5gQuLBsCrDqv18WwZKy7ABXaYkQkgHFJ'
});

var params = {screen_name:'monroeki'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
            console.log('Error occurred: ' + err);
         return;
     }
 
     // Do something with 'data' 
});

