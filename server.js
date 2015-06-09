var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var quotes = [
  '"The line must be drawn here! This far, no further!" -Captain Jean-Luc Picard',
  '"Brannigan\'s Law is like Brannigan\'s love: hard and fast." -Major-General-Webelo Zapp Brannigan',
  '"That\'s not soon enough!" -Phillip J. Fry'
]

var adjectives = [ 'Funny', 'Humorous', 'Gigantic', 'Mega', 'Tiny', 'Green', 'Slippery' ];

app.get("/", function (req, res) {
	var randomIndex = Math.floor(Math.random()*quotes.length);
	res.send(quotes[randomIndex]);
});

app.get("/adjective", function (req, res) {
	var randomIndex = Math.floor(Math.random()*adjectives.length);
	res.json({ word: adjectives[randomIndex]});  
});

app.listen(port, function () {
	console.log('server started on port', port);
});