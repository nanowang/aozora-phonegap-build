(function() {
  var onDeviceReady;

  document.addEventListener('deviceready', onDeviceReady, false);

  onDeviceReady = function() {
    return alert('device ready');
  };

}).call(this);
