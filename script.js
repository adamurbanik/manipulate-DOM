(function createElements() {
  var scriptTag = document.getElementsByTagName('script')[0];
  console.log(scriptTag.parentNode)
  for (var index = 1; index <= 100; index++) {
    var div = document.createElement('div');
    if (index % 3 === 0) {
      var element = document.createElement("input");
      element.type = 'button';
      element.value = 'button';
      element.onclick = function () {
        alert("blabla");
      };
      div.appendChild(element);
    }
    scriptTag.parentNode.insertBefore(div, scriptTag.nextSibling);


  }

})();