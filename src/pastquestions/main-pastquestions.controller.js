(function () {
'use strict';

angular.module('PastQuestions')
.controller('MainPastQuestionsController', MainPastQuestionsController);


MainPastQuestionsController.$inject = ['PastQuestionsService', 'items'];
function MainPastQuestionsController(PastQuestionsService, items) {
  var mainlist = this;
  mainlist.items = items;


  var index = -1;
  var question = {};

  var initOptions = function () {

    mainlist.showCorrectA = false;
    mainlist.showCorrectB = false;
    mainlist.showCorrectC = false;
    mainlist.showCorrectD = false;

    mainlist.showWrongA = false;
    mainlist.showWrongB = false;
    mainlist.showWrongC = false;
    mainlist.showWrongD = false;

    mainlist.showVideo = false;
    mainlist.videoStatusText = "Why?";
  };


  var updateQuestionNext = function () {

    index++;
    initOptions();
    mainlist.selectedOption = null;
    mainlist.question = items[index];
  };

  var updateQuestionPrev = function () {

    index--;
    initOptions();
    mainlist.selectedOption = null;
    mainlist.question = items[index];
  };

  updateQuestionNext();

  mainlist.prevClicked = function () {
    updateQuestionPrev();
  };

  mainlist.nextClicked = function () {
    updateQuestionNext();
  };

  mainlist.showVideo = false;

  mainlist.why = function () {
    if (mainlist.showVideo == true) {
      mainlist.showVideo = false;
      mainlist.videoStatusText = "Why?";

    }
    else {
      mainlist.showVideo = true;
      mainlist.videoStatusText = "Hide answer";
    }
  };

  mainlist.optionChange = function () {

    initOptions();

    if (mainlist.question.answer == "A") {
      mainlist.showCorrectA = true;
    }
    else if (mainlist.question.answer == "B") {
      mainlist.showCorrectB = true;
    }
    else if (mainlist.question.answer == "C") {
      mainlist.showCorrectC = true;
    }
    else if (mainlist.question.answer == "D") {
      mainlist.showCorrectD = true;
    }


    if (mainlist.selectedOption != mainlist.question.answer) {
      if (mainlist.selectedOption == "A") {
        mainlist.showWrongA = true;
      }
      if (mainlist.selectedOption == "B") {
        mainlist.showWrongB = true;
      }
      if (mainlist.selectedOption == "C") {
        mainlist.showWrongC = true;
      }
      if (mainlist.selectedOption == "D") {
        mainlist.showWrongD = true;
      }
    }

  };
}

})();
