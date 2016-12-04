var Twitter = require('twitter');
var Spotify = require('spotify');
var OMDB = require("OMDB");
var keys = require('./keys.js');
console.log(keys.twitterKeys);
 
var client = new Twitter({
  consumer_key: 'cANMXMokPtDt0P83kqPAFpY41',
  consumer_secret: 'tUVCapwxwaxHx6I56rSgsYLMNftiTIvG6Z6RPiEiqsS8H959fQ',
  access_token_key: '35086467-1ItNfyBBkls5vV42J4spEDiYxB1R32C7zad3GuV0y',
  access_token_secret: 'RKkUuMDVHiGQr5gQuLBsCrDqv18WwZKy7ABXaYkQkgHFJ'
});

var params = {screen_name: 'monroeki'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
 exports.twitterKeys = function {
	 this.
}

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) 
            console.log('Error occurred: ' + err);
         return;
     }
 
     Do something with 'data' 
});

var omdb = require('omdb');
 
omdb.search('saw', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
 
    // Saw (2004) 
    // Saw II (2005) 
    // Saw III (2006) 
    // Saw IV (2007) 
    // ... 
});
 
omdb.get({ title: 'Saw', year: 2004 }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);
 
    // Saw (2004) 7.6/10 
    // Two men wake up at opposite sides of a dirty, disused bathroom, chained 
    // by their ankles to pipes. Between them lies... 


