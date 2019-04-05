"use strict";

var app = {};

app.compChoice = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  var compChoiceArray = ['rock', 'paper', 'scissors'];
  var setCompChoice = compChoiceArray[randomNumber];
  return setCompChoice;
};

app.closeModal = function () {
  $('.modal').removeClass('visible').addClass('hidden');
};

app.openModal = function () {
  $('.modal').removeClass('hidden').addClass('visible');
};

app.userScore = 0;
app.compScore = 0;
app.draws = 0;
app.gamesPlayed = 0;

app.setUserChoice = function (compChoice, userChoice) {
  console.log('compChoice: ', compChoice);
  console.log('userChoice: ', userChoice);
  $('#comp_choice').html("<img src=\"./public/assets/".concat(compChoice, ".png\" alt=\"cartoon hand indicating ").concat(compChoice, "\" />"));

  if (compChoice === 'rock' && userChoice === 'scissors' || compChoice === 'paper' && userChoice === 'rock' || compChoice === 'scissors' && userChoice === 'paper') {
    console.log('computy wins');
    app.compScore++;
    console.log('userScore: ', app.userScore);
    console.log('compScore: ', app.compScore);
    $('#comp_score').html(app.compScore.toString());
    $('#outcome').html("".concat(compChoice, " you lose!"));
  } else if (userChoice === 'rock' && compChoice === 'scissors' || userChoice === 'paper' && compChoice === 'rock' || userChoice === 'scissors' && compChoice === 'paper') {
    console.log('user wins');
    app.userScore++;
    console.log('compScore: ', app.compScore);
    console.log('userScore: ', app.userScore);
    $('#user_score').html(app.userScore.toString());
    $('#outcome').html("".concat(compChoice, " you win!"));
  } else {
    console.log('draw');
    app.draws++;
    console.log('draws: ', app.draws);
    $('#draws').html(app.draws.toString());
    $('#outcome').html("".concat(compChoice, " it's a draw!"));
  }

  app.gamesPlayed++;
  $('#games_played').html(app.gamesPlayed.toString());
  app.openModal();
};

app.init = function () {
  $('#rock').on('click', function () {
    app.setUserChoice(app.compChoice(), this.id);
  });
  $('#paper').on('click', function () {
    app.setUserChoice(app.compChoice(), this.id);
  });
  $('#scissors').on('click', function () {
    app.setUserChoice(app.compChoice(), this.id);
  });
  $('.play_again').on('click', app.closeModal);
};

$(document).ready(function () {
  app.init();
});