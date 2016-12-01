describe('set directive', function () {
  var elm;

  it('should create items', function () {


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

