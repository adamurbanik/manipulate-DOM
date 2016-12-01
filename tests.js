describe('set directive', function () {
  var elm, scope;

  beforeEach(module('myTestingApp'));

  beforeEach(inject(function ($rootScope, $compile) {
    elm = angular.element(
      '<div>' +
      '<set elements="elements">' +
      '</set>' +
      '</div>');

    scope = $rootScope.$new();
    scope.elements = [];
    for (let index = 1; index <= 100; index++) {
      scope.elements.push({
        id: `${index}`,
        name: `element ${index}`
      })
    }

    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should create items', function () {
    var result = elm[0].querySelectorAll('.element-class');
    var elements = angular.element(result);

    expect(elements.length).toBe(100);
  });

  /* Number of buttons must be the same as number of items divided by 3 */
  it('should items be clickable whenever they have the .btn class', function () {
    var resultElements = elm[0].querySelectorAll('.element-class');
    var elements = angular.element(resultElements);

    var resultButtons = elm[0].querySelectorAll('.btn');
    var buttons = angular.element(resultButtons);
    expect(Math.round(elements.length / 3)).toBe(buttons.length);
  });

});

