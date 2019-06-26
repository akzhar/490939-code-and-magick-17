'use strict';

(function () {
  var dependencies = {
    utils: window.utils
  };
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var GIST_MAX_HEIGHT = 150;
  var GIST_LOW_LEVEL = CLOUD_HEIGHT - 20;
  var COLORS = {
    WHITE: '#ffffff',
    BLACK: '#000000',
    GRAY: 'rgba(0, 0, 0, 0.7)',
    RED: 'rgba(255, 0, 0, 1)'
  };
  var FONT = '16px PT Mono';
  var HEADER_TEXT = ['Ура вы победили!', 'Список результатов:'];
  var YOUR_NAME = 'Вы';

  function drawCloud(ctx, x, y) {
    ctx.fillStyle = COLORS.GRAY;
    ctx.fillRect(x + 10, y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = COLORS.WHITE;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  function drawCloudHeader(ctx, x, y) {
    ctx.fillStyle = COLORS.BLACK;
    ctx.font = FONT;
    ctx.fillText(HEADER_TEXT[0], x, y * 2);
    ctx.fillText(HEADER_TEXT[1], x, y * 3);
  }

  function drawBar(ctx, player, scoreMax) {
    var barX = CLOUD_X + 30 + (BAR_WIDTH + BAR_GAP) * player.index;
    var barHeigth = player.score / scoreMax * GIST_MAX_HEIGHT;
    var barY = GIST_LOW_LEVEL - barHeigth;
    var barColor = 'rgba(0, 0, 255, ' + dependencies.utils.getRandom(0.1, 1) + ')';
    ctx.fillStyle = barColor;
    if (player.name === YOUR_NAME) {
      ctx.fillStyle = COLORS.RED;
    }
    ctx.fillRect(barX, barY, BAR_WIDTH, barHeigth);
    ctx.fillStyle = COLORS.BLACK;
    ctx.fillText(player.score, barX, barY - 10);
    ctx.fillText(player.name, barX, GIST_LOW_LEVEL + 20);
  }

  window.renderStatistics = function (ctx, names, times) {
    var scoreMax = Math.round(Math.max.apply(null, times));
    drawCloud(ctx, CLOUD_X, CLOUD_Y);
    drawCloudHeader(ctx, CLOUD_X + 30, 20);
    for (var i = 0; i < names.length; i++) {
      var player = {
        index: i,
        name: names[i],
        score: Math.round(times[i])
      };
      drawBar(ctx, player, scoreMax);
    }
  };
})();
