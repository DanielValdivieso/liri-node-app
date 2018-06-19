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
   
  function getTweets(){
    client.get('statuses/home_timeline',{count:4}, function(error, tweets, response) {
       for(i=0;i<4;i++){
        console.log(tweets[i].created_at+" : "+tweets[i].text);
       }
       if(error){
           console.log(error);
       }
       write("my-tweets()\n")
     });
    };

var movieName = process.argv[2];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  });