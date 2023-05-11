(function() {
  'use strict';

  angular.module('PastQuestions')
    .service('PastQuestionsService', PastQuestionsService)
    .constant('ApiBasePath', "http://localhost/2cl/public/api");


  PastQuestionsService.$inject = ['$http', 'ApiBasePath'];

      function PastQuestionsService($http, ApiBasePath) {
      var service = this;

      service.getQuestions = function(path) {

        return $http({
          method: "GET",
          url: (ApiBasePath + "/year_questions/" + path)
        }).
        then(function(result) {
          return result.data;
        });
      };
    }


})();
