'use strict';

(function () {
  window.utils = {
    getRandomElemInArr: function (arr) {
      return arr[Math.round(Math.random() * (arr.length - 1))];
    },
    getRandom: function (min, max) {
      return Math.random() * (max - min) + min;
    }
  };
})();
