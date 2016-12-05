var twitter = require('twitter');
var spotify = require('spotify');
var keys = require('./keys.js');

console.log(keys.twitterKeys.consumer_key);
 
var client = new twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.token_key,
  access_token_secret: keys.twitterKeys.token_key,
});

var params = {screen_name:'monroeki'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
   
    //For loop  
    for (var i = 2; i < tweets.length; i++);
       // console.log(JSON.stringify(tweets, null, 2));
  }
});

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
            console.log('Error occurred: ' + err);
         return;
     }
      console.log(data);
      console.log(JSON.stringify(data, null, 2));
     // Do something with 'data' 
});

  var request = require("request");

  request("http://www.omdbapi.com/?t=&y=&plot=short&r=json", function(error, 
    response, body){
    if(!error && response.statuscode ===200){
      console.log("The movie's rating is: + JSON.parse(body).imdbRating");
    }
  });


  
