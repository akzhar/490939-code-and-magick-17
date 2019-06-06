'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var MARGIN_X = 30;

var GIST_X = CLOUD_X + MARGIN_X;
var GIST_Y = CLOUD_Y + 90;
var GIST_WIDTH = CLOUD_WIDTH - MARGIN_X * 2;
var GIST_HEIGHT = 150;

var GIST_LOW_LEVEL = GIST_Y + GIST_HEIGHT;

function drawCloud(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + MARGIN_X, CLOUD_Y + 40);
  ctx.fillText('Список результатов:', CLOUD_X + MARGIN_X, CLOUD_Y + 60);
};

function drawColumn(ctx, name, time, i) {
  var columnColor = 'rgba(0, 0, 255, ' + Math.random() + ')'; //получаем рандомный сисний
  ctx.fillStyle = columnColor;
  // console.log(columnColor);
  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  }


  var columnX = CLOUD_X + MARGIN_X + i * (COLUMN_WIDTH + COLUMN_GAP);
  var columnHeigth = Math.round(time) / 100;
  var columnY = GIST_LOW_LEVEL - 20 - columnHeigth;
  ctx.fillRect(columnX, columnY, COLUMN_WIDTH, columnHeigth);

  ctx.fillStyle = '#000000';
  ctx.fillText(Math.round(time), columnX, columnY - 10); //вывод очков игрока
  ctx.fillText(name, columnX, GIST_LOW_LEVEL); //вывод имени игрока
};






window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);

  console.log(names);
  console.log(times);

  ctx.fillStyle = 'yellow';
  ctx.fillRect(GIST_X, GIST_Y, GIST_WIDTH, GIST_HEIGHT); //рисуем область гистограммы

  // var maxTime = Math.round(Math.max.apply(null, times));
  for(var i = 0; i < names.length; i++) {
    drawColumn(ctx, names[i], times[i], i);
  }
};
