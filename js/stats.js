'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var PADDING_X = 30;
var STEP_Y = 20;
var CONTENT_X = CLOUD_X + PADDING_X;
var GIST_HEIGHT = 150;
var GIST_LOW_LEVEL = STEP_Y * 5 + GIST_HEIGHT;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function drawCloud(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CONTENT_X, STEP_Y * 2);
  ctx.fillText('Список результатов:', CONTENT_X, STEP_Y * 3);
}

function drawBar(ctx, name, time, i, barHeigthMax) {
  var barColor = 'rgba(0, 0, 255, ' + getRandom(0.1, 1) + ')';
  ctx.fillStyle = barColor;
  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  }
  var barX = CONTENT_X + (BAR_WIDTH + BAR_GAP) * i;
  var barHeigth = Math.round(time) / barHeigthMax * GIST_HEIGHT;
  var barY = GIST_LOW_LEVEL - barHeigth;
  ctx.fillRect(barX, barY, BAR_WIDTH, barHeigth); // отрисовка стобца графика
  ctx.fillStyle = '#000000';
  ctx.fillText(Math.round(time), barX, barY - STEP_Y / 2); // вывод очков игрока
  ctx.fillText(name, barX, GIST_LOW_LEVEL + STEP_Y); // вывод имени игрока
}

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);

  var barHeigthMax = Math.round(Math.max.apply(null, times));

  for (var i = 0; i < names.length; i++) {
    drawBar(ctx, names[i], times[i], i, barHeigthMax);
  }
};
