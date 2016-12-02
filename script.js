'use strict';

var config = {
  element: 'section',
  place: 'main-content',
  style: 'color: #0060fc'

}


var ManipulateDomModule = (function () {

  function createElements() {
    for (var index = 1; index <= 100; index++) {
      var element = createElement(index);

      if (index % 3 === 0) {
        createButton.call(this, element);
      }
      locateMainTag().appendChild(element);
    }
  }

  function locateMainTag() {
    return document.getElementsByClassName(config.place)[0];
  }

  function createElement(index) {
    var element = document.createElement(config.element);
    element.innerHTML = 'Element ' + index;
    return element;
  }

  function createButton(div) {
    var element = document.createElement("input");
    element.type = 'button';
    element.value = 'button';
    element.onclick = function () {
      this.parentNode.setAttribute('style', config.style);
    }
    div.appendChild(element);
  }
  createElements();

  return {
    createElements: createElements,
  }

})();





