require("dotenv").config();

var request = require("request");

var Twitter = require("twitter")

var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
  });
  client.post('statuses/update', {status: 'I am a tweet'}, function(error, tweet) {
    if (!error) {
      console.log(tweet);
    }
  });

var Spotify = require('node-spotify-api');

var client = new Twitter({

  });
   
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });

var movieName = process.argv[2];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  });