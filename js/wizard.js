'use strict';

(function () {
  var setupForm = document.querySelector('.setup');
  var similarWizardsBlock = setupForm.querySelector('.setup-similar');
  var similarWizardsList = setupForm.querySelector('.setup-similar-list');
  var templateWizardCard = document.getElementById('similar-wizard-template').content.querySelector('.setup-similar-item');

  function renderWizardCards(data) {
    var similarWizards = data.slice(0, 4);
    var fragment = document.createDocumentFragment();
    similarWizards.forEach(function (wizard) {
      var wizardCard = renderWizard(wizard);
      fragment.appendChild(wizardCard);
    });
    similarWizardsList.appendChild(fragment);
    similarWizardsBlock.classList.remove('hidden');
  }

  function renderWizard(wizard) {
    var card = templateWizardCard.cloneNode(true);
    var name = card.querySelector('.setup-similar-label');
    var coat = card.querySelector('.wizard-coat');
    var eyes = card.querySelector('.wizard-eyes');
    name.textContent = wizard.name;
    coat.style.fill = wizard.colorCoat;
    eyes.style.fill = wizard.colorEyes;
    return card;
  }

  window.wizard = {
    renderWizardCards: renderWizardCards
  };
})();
