'use strict';

(function () {
  var dependencies = {
    setup: window.setup
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

  function openForm() {
    setupForm.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentEscPress);
    formCloseBtn.addEventListener('keydown', onFormCloseBtnEnterPress);
    formCloseBtn.addEventListener('click', onFormCloseBtnClick);
    wizardCoat.addEventListener('click', dependencies.setup.onWizardCoatClick);
    wizardEyes.addEventListener('click', dependencies.setup.onWizardEyesClick);
    wizardFireBall.addEventListener('click', dependencies.setup.onWizardFireBallClick);
  }

  function closeForm() {
    setupForm.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentEscPress);
    formCloseBtn.removeEventListener('keydown', onFormCloseBtnEnterPress);
    formCloseBtn.removeEventListener('click', onFormCloseBtnClick);
    wizardCoat.removeEventListener('click', dependencies.setup.onWizardCoatClick);
    wizardEyes.removeEventListener('click', dependencies.setup.onWizardEyesClick);
    wizardFireBall.removeEventListener('click', dependencies.setup.onWizardFireBallClick);
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

  formOpenBtn.addEventListener('click', onFormOpenBtnClick);
  formOpenIcon.addEventListener('keydown', onFormOpenIconEnterPress);
})();
