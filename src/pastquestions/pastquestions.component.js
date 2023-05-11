(function () {
'use strict';

angular.module('PastQuestions')
.component('pastQuestions', {
  templateUrl: 'src/pastquestions/templates/pastquestions.template.html',
  bindings: {
    items: '<'
  }
});

})();
