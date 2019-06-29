'use strict';

(function () {
  window.backend = {
    load: load,
    save: save
  };

  function load(onLoad) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 10000; // 10s
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
    });
    xhr.open('GET', URL);
    xhr.send();
  }

  function save(data, onLoad) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });
    xhr.open('POST', URL);
    xhr.send(data);
  }

  function onError(msgText) {
    var header = document.querySelector('header');
    var div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.style.height = '25px';
    div.style.margin = '-25px 0 25px 0';
    div.style.color = 'black';
    div.textContent = 'ERROR: ' + msgText;
    header.insertBefore(div, header.firstChild);
  }
})();
