'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var uploadIcon = setup.querySelector('.upload');
var openBtn = document.querySelector('.setup-open');
var closeBtn = setup.querySelector('.setup-close');
var isDragged = false;
var startCoords = {};
var currentCoords = {};
var onDocumentMouseMove = function (evtMove) {
  var shift = {
    x: currentCoords.x - evtMove.clientX,
    y: currentCoords.y - evtMove.clientY
  };
  currentCoords.x = evtMove.clientX;
  currentCoords.y = evtMove.clientY;
  setup.style.top = (setup.offsetTop - shift.y) + 'px';
  setup.style.left = (setup.offsetLeft - shift.x) + 'px';
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

function resetSetupPosition() {
  setup.style.top = startCoords.x + 'px';
  setup.style.left = startCoords.y + 'px';
}

function onCloseBtnClick() {
  resetSetupPosition();
  closeBtn.removeEventListener('click', onCloseBtnClick);
}

function onCloseBtnEnterPress(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    resetSetupPosition();
    closeBtn.removeEventListener('keydown', onCloseBtnEnterPress);
  }
}

function onDocEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    resetSetupPosition();
    document.removeEventListener('keydown', onDocEscPress);
  }
}

function onUploadIconMouseDown(evtMouseDown) {
  startCoords.x = setup.offsetTop;
  startCoords.y = setup.offsetLeft;
  currentCoords.x = evtMouseDown.clientX;
  currentCoords. y = evtMouseDown.clientY;
  document.addEventListener('mousemove', onDocumentMouseMove);
  document.addEventListener('mouseup', onDocumentMouseUp);
}

uploadIcon.addEventListener('mousedown', onUploadIconMouseDown);
