'use strict';
var dependencies = {
  form: window.form,
  wizard: window.wizard,
  dialog: window.dialog
};
var setupForm = document.querySelector('.setup');
var uploadIcon = setupForm.querySelector('.upload');
var formOpenBtn = document.querySelector('.setup-open');
var formOpenIcon = formOpenBtn.querySelector('.setup-open-icon');

uploadIcon.addEventListener('mousedown', dependencies.dialog.onUploadIconMouseDown);
formOpenBtn.addEventListener('click', dependencies.form.onFormOpenBtnClick);
formOpenIcon.addEventListener('keydown', dependencies.form.onFormOpenIconEnterPress);
dependencies.wizard.renderWizardCards();
