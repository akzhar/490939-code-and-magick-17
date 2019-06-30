'use strict';

(function () {
  var dependencies = {
    setup: window.setup,
    dialog: window.dialog,
    backend: window.backend
  };
  var Code = {
    ESC: 27,
    ENTER: 13
  };
  var setupForm = document.querySelector('.setup');
  var formCloseBtn = setupForm.querySelector('.setup-close');
  var formUserName = setupForm.querySelector('.setup-user-name');
  var wizardCoat = setupForm.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setupForm.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireBall = setupForm.querySelector('.setup-fireball-wrap');
  var uploadIcon = setupForm.querySelector('.upload');

  function onFormOpenBtnClick() {
    openForm();
  }

  function onFormOpenIconEnterPress(evt) {
    if (evt.keyCode === Code.ENTER) {
      openForm();
    }
  }

  function openForm() {
    setupForm.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentEscPress);
    formCloseBtn.addEventListener('keydown', onFormCloseBtnEnterPress);
    formCloseBtn.addEventListener('click', onFormCloseBtnClick);
    wizardCoat.addEventListener('click', dependencies.setup.onWizardCoatClick);
    wizardEyes.addEventListener('click', dependencies.setup.onWizardEyesClick);
    wizardFireBall.addEventListener('click', dependencies.setup.onWizardFireBallClick);
    uploadIcon.addEventListener('mousedown', dependencies.dialog.onUploadIconMouseDown);
    setupForm.addEventListener('submit', onFormSubmit);
  }

  function closeForm() {
    setupForm.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentEscPress);
    formCloseBtn.removeEventListener('keydown', onFormCloseBtnEnterPress);
    formCloseBtn.removeEventListener('click', onFormCloseBtnClick);
    wizardCoat.removeEventListener('click', dependencies.setup.onWizardCoatClick);
    wizardEyes.removeEventListener('click', dependencies.setup.onWizardEyesClick);
    wizardFireBall.removeEventListener('click', dependencies.setup.onWizardFireBallClick);
    uploadIcon.removeEventListener('mousedown', dependencies.dialog.onUploadIconMouseDown);
    setupForm.removeEventListener('submit', onFormSubmit);
  }

  function onFormCloseBtnClick() {
    closeForm();
  }

  function onFormCloseBtnEnterPress(evt) {
    if (evt.keyCode === Code.ENTER) {
      closeForm();
    }
  }

  function onDocumentEscPress(evt) {
    if (evt.keyCode === Code.ESC && evt.target !== formUserName) {
      closeForm();
    }
  }

  function onFormSubmit(evt) {
    evt.preventDefault();
    var form = setupForm.querySelector('.setup-wizard-form');
    dependencies.backend.save(new FormData(form), closeForm);
  }

  window.form = {
    onFormOpenBtnClick: onFormOpenBtnClick,
    onFormOpenIconEnterPress: onFormOpenIconEnterPress
  };
})();
