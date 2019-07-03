'use strict';

(function () {
  var dependencies = {
    data: window.data,
    form: window.form
  };

  var formOpenBtn = document.querySelector('.setup-open');
  var formOpenIcon = formOpenBtn.querySelector('.setup-open-icon');

  formOpenBtn.addEventListener('click', dependencies.form.onFormOpenBtnClick);
  formOpenIcon.addEventListener('keydown', dependencies.form.onFormOpenIconEnterPress);
})();
