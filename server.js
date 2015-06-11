var express = require("express");
var bodyParser = require("body-parser");

var getRandomWord = require("./lib/getRandomWord");
var Adjective = require("./lib/adjective");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Noun = function () {
	this.Tables = true;
	this.Laptops = true;
	this.Shirts = true;
	this.Presidents = true;
	this.Genders = true;
};
var noun = new Noun();

var Verb = function () {
	this.Kick = true;
	this.Bring = true;
	this.Die = true;
	this.Love = true;
	this.Connect = true;
	this.Slay = true;
};
var verb = new Verb;

var adjective = new Adjective;

function postWord (word, wordObject) {
	var msg;
	if (wordObject.hasOwnProperty(word)) {
		msg = "We already have your word: ";
	} else {
		wordObject[word] = true;
		msg = "We saved your word: ";
	}
	return {message: msg, confirm: word};
}

app.post("/adjective", function (req, res) {
	res.json(postWord(req.body.word, adjective));
});

app.get("/adjective", function (req, res) {
	getRandomWord(adjective);
});

app.get("/verb", function (req, res) {
	getRandomWord(verb);  
});

app.get("/noun", function (req, res) {
	getRandomWord(noun);
});

app.listen(port, function () {
	console.log('server started on port', port);
});