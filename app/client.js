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

	var generatedBandName = ['', '', ''];
	$('#get-name').click(function() {
		var adjExists = false;
		var nounExists = false;
		var verbExists = false;

		$.get('/adjective', function (response) {
			generatedBandName[0] = response.word;
			adjExists = true;
			if (verbExists && nounExists) {
				$('#band-name').html(generatedBandName[0] + ' ' generatedBandName[1] + ' ' + generatedBandName[2]);
			}
		});

		$.get('/verb', function (response) {
			generatedBandName[1] = response.word;
			verbExists = true;
			if (adjExists && nounExists) {
				$('#band-name').html(generatedBandName[0] + ' ' generatedBandName[1] + ' ' + generatedBandName[2]);
			}
		});

		$.get('/noun', function (response) {
			generatedBandName[2] = response.word;
			nounExists = true;
			if (adjExists && verbExists) {
				$('#band-name').html(generatedBandName[0] + ' ' generatedBandName[1] + ' ' + generatedBandName[2]);
			}
		});
	});
})