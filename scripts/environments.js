(function() {
  var Aozora;

  Aozora = window.Aozora;

  Aozora.env || (Aozora.env = {});

  Aozora.env.platform = {
    isPhonegap: false
  };

  document.addEventListener('deviceready', (function() {
    console.log('device ready');
    return Aozora.env.platform.isPhonegap = true;
  }), false);

}).call(this);
