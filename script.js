(function () {

  (function createElements() {
    var scriptTag = document.getElementsByTagName('script')[0];

    for (var index = 100; index >= 1; index--) {
      var div = createDiv(index);

      if (index % 3 === 0) {  
        createButton.call(this, div);
      }
      scriptTag.parentNode.insertBefore(div, scriptTag.nextSibling);
    }
  })();

  function createDiv(index) {
    var div = document.createElement('div');
    div.innerHTML = `Element ${index}`;
    return div;
  }

  function createButton(div) { 
    var element = document.createElement("input");
    element.type = 'button';
    element.value = 'button';
    element.onclick =  function() {
      this.parentNode.style.display = 'none';
    }
    div.appendChild(element);
  }

})()