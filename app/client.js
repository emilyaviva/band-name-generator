'use strict';

$(function () {

	$('form').on('submit', function (event) {
		console.log(event);
		event.preventDefault();
		var userAdjective = $('#user-adjective').val();
		$.post('/adjective', {word: userAdjective}, function (response) {
			var confirm = response.message +  " <em>" + response.confirm + "</em>";
			$('#adjective-response').html(confirm);
		})
	})

	$("button").click(function() {
		$.get('/adjective', function (response) {
			var adjective = resonse.word;
			$("#adjective").text(adjective);
		});

		$.get('/verb', function (response) {
			var verb = resonse.word;
			$("#verb").text(verb);
		});

		$.get('/noun', function (response) {
			var noun = resonse.word;
			$("#noun").text(noun);
		});
	});
});