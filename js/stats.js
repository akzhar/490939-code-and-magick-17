'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var GIST_MAX_HEIGHT = 150;
var MY_BAR_COLOR = 'rgba(255, 0, 0, 1)';

function drawCloud(ctx, x, y, bgColor) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + 10, y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = bgColor;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function drawCloudHeader(ctx, x, y, txtColor, font) {
  ctx.fillStyle = txtColor;
  ctx.font = font;
  ctx.fillText('Ура вы победили!', x, y * 2);
  ctx.fillText('Список результатов:', x, y * 3);
}

function drawBar(ctx, x, gistLowLevel, name, value, i, valueMax, txtColor) {

  var barX = x + (BAR_WIDTH + BAR_GAP) * i;
  var barHeigth = value / valueMax * GIST_MAX_HEIGHT;
  var barY = gistLowLevel - barHeigth;
  var barColor = 'rgba(0, 0, 255, ' + getRandom(0.1, 1) + ')';

  ctx.fillStyle = barColor;
  if (name === 'Вы') {
    ctx.fillStyle = MY_BAR_COLOR;
  }

  ctx.fillRect(barX, barY, BAR_WIDTH, barHeigth); // отрисовка столбца графика
  ctx.fillStyle = txtColor;
  ctx.fillText(value, barX, barY - 10); // вывод очков игрока
  ctx.fillText(name, barX, gistLowLevel + 20); // вывод имени игрока

}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

window.renderStatistics = function (ctx, names, times) {

  var valueMax = Math.round(Math.max.apply(null, times));
  var gistLowLevel = CLOUD_HEIGHT - 20;
  var contentX = CLOUD_X + 30;

  drawCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  drawCloudHeader(ctx, contentX, 20, '#000000', '16px PT Mono');

  for (var i = 0; i < names.length; i++) {
    drawBar(ctx, contentX, gistLowLevel, names[i], Math.round(times[i]), i, valueMax, '#000000');
  }

};
