'use strict';

$(function () {

	$('#input-adjective').on('submit', function (event) {
		console.log(event);
		event.preventDefault();
		var userAdjective = $('#user-adjective').val();
		$.post('/adjective', {word: userAdjective}, function (response) {
			var confirm = response.message + " <em>" + response.confirm + "</em>";
			$('#word-add-response').html(confirm);
		});
	});

	$('#input-verb').on('submit', function (event) {
		console.log(event);
		event.preventDefault();
		var userVerb = $('#user-verb').val();
		$.post('/verb', {word: userVerb}, function (response) {
			var confirm = response.message + " <em>" + response.confirm + "</em>";
			$('#word-add-response').html(confirm);
		});
	});

	$('#input-noun').on('submit', function (event) {
		console.log(event);
		event.preventDefault();
		var userNoun = $('#user-noun').val();
		$.post('/noun', {word: userNoun}, function (response) {
			var confirm = response.message + " <em>" + response.confirm + "</em>";
			$('#word-add-response').html(confirm);
		});
	});

	var generatedBandName = '';
	$('#get-name').click(function() {
		$.get('/adjective', function (response) {
			generatedBandName = response.word;
		});

		$.get('/verb', function (response) {
			generatedBandName = generatedBandName + " " + response.word;
		});

		$.get('/noun', function (response) {
			generatedBandName = generatedBandName + " " + response.word;
		});

		$('#band-name').html(generatedBandName);
	});
})