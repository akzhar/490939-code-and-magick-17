'use strict';

var NUMBER_OF_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupForm = document.querySelector('.setup');
var similarWizardsBlock = setupForm.querySelector('.setup-similar');
var similarWizardsList = setupForm.querySelector('.setup-similar-list');
var templateWizardCard = document.getElementById('similar-wizard-template').content.querySelector('.setup-similar-item');
var formOpenBtn = document.querySelector('.setup-open');
var formCloseBtn = setupForm.querySelector('.setup-close');
var formOpenIcon = formOpenBtn.querySelector('.setup-open-icon');
var formUserName = setupForm.querySelector('.setup-user-name');
var wizardCoat = setupForm.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setupForm.querySelector('.setup-wizard .wizard-eyes');
var wizardFireBall = setupForm.querySelector('.setup-fireball-wrap');
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
var fireBallColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
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
  var card = templateWizardCard.cloneNode(true);
  var name = card.querySelector('.setup-similar-label');
  var coat = card.querySelector('.wizard-coat');
  var eyes = card.querySelector('.wizard-eyes');
  name.textContent = wizard.name;
  coat.style.fill = wizard.coatColor;
  eyes.style.fill = wizard.eyesColor;
  return card;
}

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

function setCoatColor() {
  var inputCoatColor = setupForm.querySelector('input[name="coat-color"]');
  var newCoatColor = getRandomElemInArr(coatColors);
  wizardCoat.style.fill = newCoatColor;
  inputCoatColor.value = newCoatColor;
}

function setEyesColor() {
  var inputEyesColor = setupForm.querySelector('input[name="eyes-color"]');
  var newEyesColor = getRandomElemInArr(eyesColors);
  wizardEyes.style.fill = newEyesColor;
  inputEyesColor.value = newEyesColor;
}

function setFireBallColor() {
  var inputFireBallColor = setupForm.querySelector('input[name="fireball-color"]');
  var newFireBallColor = getRandomElemInArr(fireBallColors);
  wizardFireBall.style.backgroundColor = newFireBallColor;
  inputFireBallColor.value = newFireBallColor;
}

var similarWizards = createWizards(NUMBER_OF_WIZARDS);
var fragment = document.createDocumentFragment();
for (var i = 0; i < similarWizards.length; i++) {
  var wizardCard = renderWizard(similarWizards[i]);
  fragment.appendChild(wizardCard);
}
similarWizardsList.appendChild(fragment);
similarWizardsBlock.classList.remove('hidden');

formOpenBtn.addEventListener('click', formOpenBtnClickHandler);
formCloseBtn.addEventListener('click', formCloseBtnClickHandler);
formOpenIcon.addEventListener('keydown', formEnterPressHandler);
wizardCoat.addEventListener('click', setCoatColor);
wizardEyes.addEventListener('click', setEyesColor);
wizardFireBall.addEventListener('click', setFireBallColor);
