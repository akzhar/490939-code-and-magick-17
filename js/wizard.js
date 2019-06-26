'use strict';

(function () {
  var dependencies = {
    data: window.data,
    utils: window.utils
  };
  var NUMBER_OF_WIZARDS = 4;
  var setupForm = document.querySelector('.setup');
  var similarWizardsBlock = setupForm.querySelector('.setup-similar');
  var similarWizardsList = setupForm.querySelector('.setup-similar-list');
  var templateWizardCard = document.getElementById('similar-wizard-template').content.querySelector('.setup-similar-item');

  function createWizards(n) {
    var wizards = [];
    for (var i = 0; i < n; i++) {
      wizards[i] = {
        name: dependencies.utils.getRandomElemInArr(dependencies.data.firstNames) + ' ' + dependencies.utils.getRandomElemInArr(dependencies.data.lastNames),
        coatColor: dependencies.utils.getRandomElemInArr(dependencies.data.coatColors),
        eyesColor: dependencies.utils.getRandomElemInArr(dependencies.data.eyesColors)
      };
    }
    return wizards;
  }

  function renderWizard(wizard) {
    var card = templateWizardCard.cloneNode(true);
    var name = card.querySelector('.setup-similar-label');
    var coat = card.querySelector('.wizard-coat');
    var eyes = card.querySelector('.wizard-eyes');
    name.textContent = wizard.name;
    coat.style.fill = wizard.coatColor;
    eyes.style.fill = wizard.eyesColor;
    return card;
  }

  window.wizard = {
    renderWizardCards: function () {
      var similarWizards = createWizards(NUMBER_OF_WIZARDS);
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < similarWizards.length; i++) {
        var wizardCard = renderWizard(similarWizards[i]);
        fragment.appendChild(wizardCard);
      }
      similarWizardsList.appendChild(fragment);
      similarWizardsBlock.classList.remove('hidden');
    }
  };
})();
