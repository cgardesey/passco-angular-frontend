(function () {
'use strict';

angular.module('PastQuestions')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/index.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list/{path}',
    templateUrl: 'src/pastquestions/templates/main-pastquestions.template.html',
    controller: 'MainPastQuestionsController as mainList',
    resolve: {
      items: ['PastQuestionsService', '$stateParams', function (PastQuestionsService, $stateParams) {
        return PastQuestionsService.getQuestions($stateParams.path);
      }]
    }
  })

  .state('mainList.itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/pastquestions/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail"
  });

}

})();
