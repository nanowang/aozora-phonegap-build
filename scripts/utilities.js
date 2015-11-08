(function() {
  var Aozora;

  Aozora = window.Aozora;

  Aozora.utilities || (Aozora.utilities = {});

  Aozora.utilities.log = function(message) {
    if (Aozora.env.debugging) {
      return console.log(message);
    }
  };

}).call(this);
