'use strict';

(function () {
  var Url = {
    LOAD: 'https://js.dump.academy/code-and-magick/data',
    SAVE: 'https://js.dump.academy/code-and-magick'
  };
  var maxResponseTime = 10000;
  var Status = {
    OK: 200
  };
  function load(onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = maxResponseTime;
    xhr.addEventListener('load', function () {
      if (xhr.status === Status.OK) {
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
    xhr.open('GET', Url.LOAD);
    xhr.send();
  }

  function save(data, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });
    xhr.open('POST', Url.SAVE);
    xhr.send(data);
  }

  window.backend = {
    load: load,
    save: save
  };
})();
