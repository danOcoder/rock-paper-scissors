"use strict";

var firstTo = '';
var userChoice = '';
var compChoice = '';
var compChoiceArray = ['rock', 'paper', 'scissors'];
var userScore = 0;
var compScore = 0;
var draws = 0;
var gamesPlayed = 0;
var randomNumber;
var app = {};

app.genRandomNumber = function () {
  randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
};

app.setFirstTo = function (event) {
  event.preventDefault();
  firstTo = parseInt($('.first_to').val());

  if (isNaN(firstTo) || firstTo <= 0 || firstTo % 1 !== 0) {
    alert('Try agin');
  } else {
    $('.set').hide('.set');
    $('input').attr('disabled', 'disabled');
    return firstTo;
  }
};

app.trackGamesPlayed = function () {
  gamesPlayed++;
  $('#games_played').html(gamesPlayed.toString());
};

app.evaluateScore = function () {
  if (userScore === firstTo) {
    $(".mask").addClass("active");
    $('.modal_text').html("<h2>Computy goes ".concat(compChoice, " you win! You're first to win ").concat(firstTo, ", congratulations!</h2>\n     <span class=\"icon\"><i class=\"fas fa-trophy\"></i></span>"));
  } else if (compScore === firstTo) {
    $(".mask").addClass("active");
    $('.modal_text').html("<h2>Computy goes ".concat(compChoice, " you lose! Computy is first to win ").concat(firstTo, ", sorry about that.</h2>\n      <span class=\"icon\"><i class=\"fas fa-frown\"></i></span>"));
  }
};

app.setCompChoice = function () {
  app.genRandomNumber();
  compChoice = compChoiceArray[randomNumber];
  console.log(compChoice);
  return compChoice;
};

app.resetGame = function () {
  firstTo = 0;
  userChoice = '';
  compChoice = '';
  userScore = 0;
  compScore = 0;
  draws = 0;
  gamesPlayed = 0;
  $('#comp_choice').html('');
  $('#comp_score').html('0');
  $('#user_score').html('0');
  $('#draws').html('0');
  $('#games_played').html('0');
  $('#outcome').html('');
  $('.first_to').val('');
  $('.set').show('.set');
  $('input').removeAttr('disabled');
};

app.closeModal = function () {
  $(".mask").removeClass("active");
  app.resetGame();
};

app.setUserChoiceRock = function () {
  if (firstTo === '') {
    return undefined;
  }

  app.setCompChoice();
  userChoice = 'rock';

  if (compChoice === 'paper') {
    compScore++;
    $('#comp_choice').html(compChoice);
    $('#comp_score').html(compScore.toString());
    $('#outcome').html("Computy goes ".concat(compChoice, " you lose!"));
  } else if (compChoice === 'scissors') {
    userScore++;
    $('#comp_choice').html(compChoice);
    $('#user_score').html(userScore.toString());
    $('#outcome').html("Computy goes ".concat(compChoice, " you win!"));
  } else {
    draws++;
    $('#draws').html(draws.toString());
    $('#comp_choice').html(compChoice);
    $('#outcome').html("Computy goes ".concat(compChoice, " it's a draw!"));
  }

  app.trackGamesPlayed();
  app.evaluateScore();
};

app.setUserChoicePaper = function () {
  if (firstTo === '') {
    return undefined;
  }

  app.setCompChoice();
  userChoice = 'paper';

  if (compChoice === 'scissors') {
    compScore++;
    $('#comp_choice').html(compChoice);
    $('#comp_score').html(compScore.toString());
    $('#outcome').html("Computy goes ".concat(compChoice, " you lose!"));
  } else if (compChoice === 'rock') {
    userScore++;
    $('#comp_choice').html(compChoice);
    $('#user_score').html(userScore.toString());
    $('#outcome').html("Computy goes ".concat(compChoice, " you win!"));
  } else {
    draws++;
    $('#draws').html(draws.toString());
    $('#comp_choice').html(compChoice);
    $('#outcome').html("Computy goes ".concat(compChoice, " it's a draw!"));
  }

  app.trackGamesPlayed();
  app.evaluateScore();
};

app.setUserChoiceScissors = function () {
  if (firstTo === '') {
    return undefined;
  }

  app.setCompChoice();
  userChoice = 'scissors';

  if (compChoice === 'rock') {
    compScore++;
    $('#comp_choice').html(compChoice);
    $('#comp_score').html(compScore.toString());
    $('#outcome').html("Computy goes ".concat(compChoice, " you lose!"));
  } else if (compChoice === 'paper') {
    userScore++;
    $('#comp_choice').html(compChoice);
    $('#user_score').html(userScore.toString());
    $('#outcome').html("Computy goes ".concat(compChoice, " you win!"));
  } else {
    draws++;
    $('#draws').html(draws.toString());
    $('#comp_choice').html(compChoice);
    $('#outcome').html("Computy goes ".concat(compChoice, " it's a draw!"));
  }

  app.trackGamesPlayed();
  app.evaluateScore();
};

app.init = function () {
  $('.set').on('click', app.setFirstTo);
  $('.rock').on('click', app.setUserChoiceRock);
  $('.paper').on('click', app.setUserChoicePaper);
  $('.scissors').on('click', app.setUserChoiceScissors);
  $(".close, .mask").on("click", function () {
    app.closeModal();
  });
};

$(document).ready(function () {
  app.init();
});