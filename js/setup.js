'use strict';

(function () {
  var dependencies = {
    utils: window.utils,
    data: window.data
  };
  var setupForm = document.querySelector('.setup');
  var wizardCoat = setupForm.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setupForm.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireBall = setupForm.querySelector('.setup-fireball-wrap');
  var inputCoatColor = setupForm.querySelector('input[name="coat-color"]');
  var inputEyesColor = setupForm.querySelector('input[name="eyes-color"]');
  var inputFireBallColor = setupForm.querySelector('input[name="fireball-color"]');

  window.setup = {
    onWizardCoatClick: onWizardCoatClick,
    onWizardEyesClick: onWizardEyesClick,
    onWizardFireBallClick: onWizardFireBallClick
  };

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
})();
