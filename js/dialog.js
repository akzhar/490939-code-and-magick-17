'use strict';

(function () {
  var Code = {
    ESC: 27,
    ENTER: 13
  };
  var setupForm = document.querySelector('.setup');
  var uploadIcon = setupForm.querySelector('.upload');
  var closeBtn = setupForm.querySelector('.setup-close');
  var startCoords = {};

  function onUploadIconMouseDown(evtMouseDown) {
    var isDragged = false;
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
      setupForm.style.top = (setupForm.offsetTop - shift.y) + 'px';
      setupForm.style.left = (setupForm.offsetLeft - shift.x) + 'px';
      isDragged = true;
    };
    var onDocumentMouseUp = function () {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('mouseup', onDocumentMouseUp);
      if (isDragged) {
        var onUploadIconClickPreventDefault = function (evt) {
          evt.preventDefault();
          uploadIcon.removeEventListener('click', onUploadIconClickPreventDefault);
        };
        uploadIcon.addEventListener('click', onUploadIconClickPreventDefault);
        closeBtn.addEventListener('click', onCloseBtnClick);
        closeBtn.addEventListener('keydown', onCloseBtnEnterPress);
        document.addEventListener('keydown', onDocEscPress);
        isDragged = false;
      }
    };
    setStartCoords();
    document.addEventListener('mousemove', onDocumentMouseMove);
    document.addEventListener('mouseup', onDocumentMouseUp);
  }

  function resetsetupFormPosition() {
    setupForm.style.top = startCoords.x + 'px';
    setupForm.style.left = startCoords.y + 'px';
  }

  function onCloseBtnClick() {
    resetsetupFormPosition();
    closeBtn.removeEventListener('click', onCloseBtnClick);
  }

  function onCloseBtnEnterPress(evt) {
    if (evt.keyCode === Code.ENTER) {
      resetsetupFormPosition();
      closeBtn.removeEventListener('keydown', onCloseBtnEnterPress);
    }
  }

  function onDocEscPress(evt) {
    if (evt.keyCode === Code.ESC) {
      resetsetupFormPosition();
      document.removeEventListener('keydown', onDocEscPress);
    }
  }

  function setStartCoords() {
    startCoords.x = setupForm.offsetTop;
    startCoords.y = setupForm.offsetLeft;
  }

  window.dialog = {
    onUploadIconMouseDown: onUploadIconMouseDown
  };
})();
