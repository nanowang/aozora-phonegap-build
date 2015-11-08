(function() {
  var Aozora;

  Aozora = window.Aozora;

  if (Aozora.behaviors == null) {
    Aozora.behaviors = {};
  }

  Aozora.behaviors.base = {
    properties: {},
    created: function() {
      Aozora.utilities.log("component " + this.nodeName + " getting created");
      if (this.nodeName !== 'AOZORA-APP') {
        return this._getGlobalVars();
      }
    },
    _getGlobalVars: function() {
      return this.app = Aozora.app;
    },
    _removeSelfDom: function() {
      return Polymer.dom(this.parentNode).removeChild(this);
    }
  };

}).call(this);
