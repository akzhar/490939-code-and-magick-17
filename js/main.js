'use strict';
(function () {
  var dependencies = {
    form: window.form,
    wizard: window.wizard,
    backend: window.backend
  };
  var formOpenBtn = document.querySelector('.setup-open');
  var formOpenIcon = formOpenBtn.querySelector('.setup-open-icon');

  formOpenBtn.addEventListener('click', dependencies.form.onFormOpenBtnClick);
  formOpenIcon.addEventListener('keydown', dependencies.form.onFormOpenIconEnterPress);
  dependencies.backend.load(function (data) {
    dependencies.wizard.renderWizardCards(data);
  });
})();
