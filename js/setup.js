'use strict';

var NUMBER_OF_WIZARDS = 4;
var setupForm = document.querySelector('.setup');
var similarWizardsBlock = setupForm.querySelector('.setup-similar');
var similarWizardsList = setupForm.querySelector('.setup-similar-list');
var templateWizardCard = document.getElementById('similar-wizard-template').content.querySelector('.setup-similar-item');
var firstNames = [
'Иван',
'Хуан Себастьян',
'Мария',
'Кристоф',
'Виктор',
'Юлия',
'Люпита',
'Вашингтон'
];
var lastNames = [
'да Марья',
'Верон',
'Мирабелла',
'Вальц',
'Онопко',
'Топольницкая',
'Нионго',
'Ирвинг'
];
var coatColors = [
'rgb(101, 137, 164)',
'rgb(241, 43, 107)',
'rgb(146, 100, 161)',
'rgb(56, 159, 117)',
'rgb(215, 210, 55)',
'rgb(0, 0, 0)'
];
var eyesColors = [
'black',
'red',
'blue',
'yellow',
'green'
];

function createWizzards(n) {
  var wizards = [];
  for (var i = 0; i < n; i++) {
    var wizard = {
      name: firstNames[Math.round(getRandom(0, firstNames.length - 1))] + ' ' + lastNames[Math.round(getRandom(0, lastNames.length - 1))],
      coatColor: coatColors[Math.round(getRandom(0, coatColors.length - 1))],
      eyesColor: eyesColors[Math.round(getRandom(0, eyesColors.length - 1))]
    }
    wizards.push(wizard);
  };
  return wizards;
}

function fillInWizzardsCards(wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    var wizardCard = templateWizardCard.cloneNode(true);
    var wizardName = wizardCard.querySelector('.setup-similar-label');
    var wizardCoat = wizardCard.querySelector('.wizard-coat');
    var wizardEyes = wizardCard.querySelector('.wizard-eyes');
    wizardName.textContent = wizards[i].name;
    wizardCoat.style = 'fill:' + wizards[i].coatColor + ';';
    wizardEyes.style = 'fill:' + wizards[i].eyesColor + ';';
    fragment.appendChild(wizardCard);
  }
  return fragment;
}

setupForm.classList.remove('hidden');
var similarWizards = createWizzards(NUMBER_OF_WIZARDS);
var similarWizardsCards = fillInWizzardsCards(similarWizards);
similarWizardsList.appendChild(similarWizardsCards);
similarWizardsBlock.classList.remove('hidden');
