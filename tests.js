describe('set directive', function () {
  var elm;

  it('should create items', function () {

    var items = document.getElementsByClassName('element-class');
    expect(items.length).toBe(100);
  });

  /* Number of buttons must be the same as number of items divided by 3 */
  it('should items be clickable whenever they have the .btn class', function () {
    var items = document.getElementsByClassName('element-class');
    var buttons = document.getElementsByClassName('btnDiv');

    expect(Math.round(items.length / 3)).toBe(buttons.length);
  });

});

