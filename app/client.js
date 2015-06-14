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
	})

	$('#input-verb').on('submit', function (event) {
		console.log(event);
		event.preventDefault();
		var userVerb = $('#user-verb').val();
		$.post('/verb', {word: userVerb}, function (response) {
			var confirm = response.message + " <em>" + response.confirm + "</em>";
			$('#word-add-response').html(confirm);
		});
	})

	$('#input-noun').on('submit', function (event) {
		console.log(event);
		event.preventDefault();
		var userAdjective = $('#user-adjective').val();
		$.post('/noun', {word: userNoun}, function (response) {
			var confirm = response.message + " <em>" + response.confirm + "</em>";
			$('#word-add-response').html(confirm);
		});
	})

	$('#get-name').click(function() {
		$.get('/adjective', function (response) {
			var adjective = response.word;
			$("#adjective").text(adjective);
		});

		$.get('/verb', function (response) {
			var verb = response.word;
			$("#verb").text(verb);
		});

		$.get('/noun', function (response) {
			var noun = response.word;
			$("#noun").text(noun);
		});

		$('#band-name').html(adjective + verb + noun);
	});
})