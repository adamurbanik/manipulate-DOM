(function () {
  'use strict'
  angular.module('myTestingApp', []);

  let AppController = (function () {

    // here we place dependency injects 
    AppController.$inject = ['$scope'];

    function AppController($scope) {
      this.scope = $scope;
      this.scope.elements = [];
      for (let index = 1; index <= 100; index++) {
        this.scope.elements.push({
          id: `${index}`,
          name: `element ${index}`
        })
      }
    }

    return AppController;

  })();

  angular
    .module('myTestingApp')
    .controller('appController', AppController);


  function Elements() {
    return {
      restrict: 'EA',
      transclude: true,
      replace: true,
      scope: {
        elements: '='
      },
      controller: 'elementsController',
      template: '<div class="table table">' +
      '<div ng-transclude></div>' +
      '<div ng-repeat="element in elements">' +
      '<div ng-hide="element.selected" class="element-class" ng-class="{active: element.selected}">{{ element.name }} - id: {{ element.id }}' +
      ' <button ng-if="element.id % 3 === 0" class="btn" ng-disabled="element.selected" ng-click="selectElement(element)">Hide</button>' +
      '</div>' +
      '</div>'
    }
  }

  angular
    .module('myTestingApp')
    .directive('elements', Elements);


  let ElementsController = (function () {

    // here we place dependencies injects 
    ElementsController.$inject = ['$scope'];

    function ElementsController($scope) {
      this.scope = $scope;
      let elements = this.scope.elements;

      this.scope.selectElement = function (element) {
        angular.forEach(elements, () => element.selected = false);
        element.selected = true;
      }
    }

    return ElementsController;

  })();

  angular
    .module('myTestingApp')
    .controller('elementsController', ElementsController);



})();

