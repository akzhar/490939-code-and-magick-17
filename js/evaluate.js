'use strict';

(function () {
  var dependencies = {
    data: window.data
  };

  function evaluateWizards(colorCoat, colorEyes) {
    colorCoat = colorCoat || '#6589a4';
    colorEyes = colorEyes || 'black';
    dependencies.data.wizards.forEach(function (wizard) {
      wizard.similarity = 0;
      if (wizard.colorCoat === colorCoat && wizard.colorEyes === colorEyes) {
        wizard.similarity += 3;
      } else if (wizard.colorCoat === colorCoat) {
        wizard.similarity += 2;
      } else if (wizard.colorEyes === colorEyes) {
        wizard.similarity += 1;
      }
    });
    sortWizards();
  }

  function sortWizards() {
    dependencies.data.wizards.sort(function (a, b) {
      if (a.similarity < b.similarity) {
        return 1;
      }
      if (a.similarity > b.similarity) {
        return -1;
      }
      return 0;
    });
  }

  window.evaluate = {
    evaluateWizards: evaluateWizards
  };
})();
