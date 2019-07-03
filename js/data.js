'use strict';

(function () {
  var dependencies = {
    backend: window.backend,
    wizard: window.wizard
  };

  function onSuccess(data) {
    window.data.wizards = data;
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

  dependencies.backend.load(onSuccess, onError);

  window.data = {
    coatColors: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    eyesColors: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    fireBallColors: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };
})();
