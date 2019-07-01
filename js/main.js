'use strict';
(function () {
  var dependencies = {
    form: window.form,
    wizard: window.wizard,
    backend: window.backend
  };
  var formOpenBtn = document.querySelector('.setup-open');
  var formOpenIcon = formOpenBtn.querySelector('.setup-open-icon');

  function onSuccess(data) {
    dependencies.wizard.renderWizardCards(data);
  }

  function onError(msgText) {
    var header = document.querySelector('header');
    var div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.style.height = '25px';
    div.style.margin = '-25px 0 25px 0';
    div.style.color = 'black';
    div.textContent = 'ERROR: ' + msgText;
    header.insertBefore(div, header.firstChild);
  }

  formOpenBtn.addEventListener('click', dependencies.form.onFormOpenBtnClick);
  formOpenIcon.addEventListener('keydown', dependencies.form.onFormOpenIconEnterPress);
  dependencies.backend.load(onSuccess, onError);
})();
