(function() {
  var Aozora;

  Aozora = window.Aozora;

  Aozora.env || (Aozora.env = {});

  Aozora.env.debugging = true;

  Aozora.env.platform = {
    isPhonegap: false,
    device: void 0
  };

  document.addEventListener('deviceready', (function() {
    Aozora.env.platform.isPhonegap = true;
    return Aozora.env.device = window.device;
  }), false);

}).call(this);
