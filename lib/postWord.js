'use strict';

module.exports = function(word, typeOfWord, wordObject) {
  var msg;
  if (wordObject.hasOwnProperty(word)) {
    msg = 'I already have your ' + typeOfWord + ': ';
  } else {
    wordObject[word] = true;
    msg = 'I saved your ' + typeOfWord + ': ';
  }

  return {message: msg, confirm: word};
};
