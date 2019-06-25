'use strict';

(function () {
  var setupForm = document.querySelector('.setup');
  var artifactsShop = setupForm.querySelector('.setup-artifacts-shop');

  function onArtifactMouseDown(evtMouseDown) {
    if (evtMouseDown.target.tagName === 'IMG') {
      evtMouseDown.target.style = 'position: absolute;';
      var currentCoords = {
        x: evtMouseDown.clientX,
        y: evtMouseDown.clientY,
      };
      var onDocumentMouseMove = function (evtMove) {
        var shift = {
          x: currentCoords.x - evtMove.clientX,
          y: currentCoords.y - evtMove.clientY
        };
        currentCoords.x = evtMove.clientX;
        currentCoords.y = evtMove.clientY;
        evtMouseDown.target.style.top = (evtMouseDown.target.offsetTop - shift.y) + 'px';
        evtMouseDown.target.style.left = (evtMouseDown.target.offsetLeft - shift.x) + 'px';
      };
      var onDocumentMouseUp = function () {
        document.removeEventListener('mousemove', onDocumentMouseMove);
        document.removeEventListener('mouseup', onDocumentMouseUp);
      };
      document.addEventListener('mousemove', onDocumentMouseMove);
      document.addEventListener('mouseup', onDocumentMouseUp);
    }
  }

  artifactsShop.addEventListener('mousedown', onArtifactMouseDown);
})();
