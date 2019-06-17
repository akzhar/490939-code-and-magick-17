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

function getRandomElemInArr(arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
}

function createWizards(n) {
  var wizards = [];
  for (var i = 0; i < n; i++) {
    wizards[i] = {
      name: getRandomElemInArr(firstNames) + ' ' + getRandomElemInArr(lastNames),
      coatColor: getRandomElemInArr(coatColors),
      eyesColor: getRandomElemInArr(eyesColors)
    };
  }
  return wizards;
}

function renderWizard(wizard) {
  var wizardCard = templateWizardCard.cloneNode(true);
  var wizardName = wizardCard.querySelector('.setup-similar-label');
  var wizardCoat = wizardCard.querySelector('.wizard-coat');
  var wizardEyes = wizardCard.querySelector('.wizard-eyes');
  wizardName.textContent = wizard.name;
  wizardCoat.style.fill = wizard.coatColor;
  wizardEyes.style.fill = wizard.eyesColor;
  return wizardCard;
}

var similarWizards = createWizards(NUMBER_OF_WIZARDS);
var fragment = document.createDocumentFragment();
for (var i = 0; i < similarWizards.length; i++) {
  var wizardCard = renderWizard(similarWizards[i]);
  fragment.appendChild(wizardCard);
}
similarWizardsList.appendChild(fragment);
similarWizardsBlock.classList.remove('hidden');


// --------------------------
// --------------------------

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var formOpenBtn = document.querySelector('.setup-open');
var formCloseBtn = setupForm.querySelector('.setup-close');
var formOpenIcon = formOpenBtn.querySelector('.setup-open-icon');
var formUserName = setupForm.querySelector('.setup-user-name');

function formOpenBtnClickHandler() {
  openForm();
}

function formCloseBtnClickHandler() {
  closeForm();
}

function formEnterPressHandler(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    if (evt.target === formCloseBtn) {
      closeForm();
    } else {
      openForm();
    }
  }
}

function formEscPressHandler(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target !== formUserName) {
      closeForm();
    }
  }
}

function openForm() {
  setupForm.classList.remove('hidden');
  document.addEventListener('keydown', formEscPressHandler);
  formCloseBtn.addEventListener('keydown', formEnterPressHandler);
}

function closeForm() {
  setupForm.classList.add('hidden');
}

formOpenBtn.addEventListener('click', formOpenBtnClickHandler);
formCloseBtn.addEventListener('click', formCloseBtnClickHandler);
formOpenIcon.addEventListener('keydown', formEnterPressHandler);
