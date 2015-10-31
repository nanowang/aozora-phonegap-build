(function() {
  var Aozora;

  if (window.Aozora == null) {
    window.Aozora = {};
  }

  Aozora = window.Aozora;

  if (Aozora.behaviors == null) {
    Aozora.behaviors = {};
  }

  Aozora.behaviors.base = {
    properties: {},
    ready: function() {
      if (this.nodeName !== 'AOZORA-APP') {
        return this.app = Aozora.app;
      }
    },
    _removeSelfDom: function() {
      return Polymer.dom(this.parentNode).removeChild(this);
    }
  };

}).call(this);
