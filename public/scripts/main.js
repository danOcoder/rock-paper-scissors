"use strict";

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

app.trackGamesPlayed = function () {
  gamesPlayed++;
  $('#games_played').html(gamesPlayed.toString());
};

app.setCompChoice = function () {
  app.genRandomNumber();
  compChoice = compChoiceArray[randomNumber];
  return compChoice;
};

app.closeModal = function () {
  $('.modal').removeClass('visible').addClass('hidden');
};

app.openModal = function () {
  $('.modal').removeClass('hidden').addClass('visible');
};

app.setUserChoiceRock = function () {
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
  app.openModal();
};

app.setUserChoicePaper = function () {
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
};

app.setUserChoiceScissors = function () {
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
};

app.init = function () {
  $('#rock').on('click', app.setUserChoiceRock);
  $('#paper').on('click', app.setUserChoicePaper);
  $('#scissors').on('click', app.setUserChoiceScissors);
  $('.play_again').on('click', app.closeModal);
};

$(document).ready(function () {
  app.init();
});