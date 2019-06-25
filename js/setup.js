'use strict';

(function () {
  var dependencies = {
    data: window.data,
    utils: window.utils
  };
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setupForm = document.querySelector('.setup');
  var formOpenBtn = document.querySelector('.setup-open');
  var formCloseBtn = setupForm.querySelector('.setup-close');
  var formOpenIcon = formOpenBtn.querySelector('.setup-open-icon');
  var formUserName = setupForm.querySelector('.setup-user-name');
  var wizardCoat = setupForm.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setupForm.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireBall = setupForm.querySelector('.setup-fireball-wrap');
  var inputCoatColor = setupForm.querySelector('input[name="coat-color"]');
  var inputEyesColor = setupForm.querySelector('input[name="eyes-color"]');
  var inputFireBallColor = setupForm.querySelector('input[name="fireball-color"]');

  function openForm() {
    setupForm.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentEscPress);
    formCloseBtn.addEventListener('keydown', onFormCloseBtnEnterPress);
    formCloseBtn.addEventListener('click', onFormCloseBtnClick);
    wizardCoat.addEventListener('click', onWizardCoatClick);
    wizardEyes.addEventListener('click', onWizardEyesClick);
    wizardFireBall.addEventListener('click', onWizardFireBallClick);
  }

  function closeForm() {
    setupForm.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentEscPress);
    formCloseBtn.removeEventListener('keydown', onFormCloseBtnEnterPress);
    formCloseBtn.removeEventListener('click', onFormCloseBtnClick);
    wizardCoat.removeEventListener('click', onWizardCoatClick);
    wizardEyes.removeEventListener('click', onWizardEyesClick);
    wizardFireBall.removeEventListener('click', onWizardFireBallClick);
  }

  function onFormOpenBtnClick() {
    openForm();
  }

  function onFormCloseBtnClick() {
    closeForm();
  }

  function onFormOpenIconEnterPress(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openForm();
    }
  }
  function onFormCloseBtnEnterPress(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeForm();
    }
  }

  function onDocumentEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== formUserName) {
      closeForm();
    }
  }

  function onWizardCoatClick() {
    var newCoatColor = dependencies.utils.getRandomElemInArr(dependencies.data.coatColors);
    wizardCoat.style.fill = newCoatColor;
    inputCoatColor.value = newCoatColor;
  }

  function onWizardEyesClick() {
    var newEyesColor = dependencies.utils.getRandomElemInArr(dependencies.data.eyesColors);
    wizardEyes.style.fill = newEyesColor;
    inputEyesColor.value = newEyesColor;
  }

  function onWizardFireBallClick() {
    var newFireBallColor = dependencies.utils.getRandomElemInArr(dependencies.data.fireBallColors);
    wizardFireBall.style.backgroundColor = newFireBallColor;
    inputFireBallColor.value = newFireBallColor;
  }

  formOpenBtn.addEventListener('click', onFormOpenBtnClick);
  formOpenIcon.addEventListener('keydown', onFormOpenIconEnterPress);
})();
