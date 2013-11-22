// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['renderer'], function(Renderer) {
    var Basic, _ref;
    return Basic = (function(_super) {
      __extends(Basic, _super);

      function Basic() {
        _ref = Basic.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Basic.prototype.init = function() {
        return this.bg_color = "#222222";
      };

      Basic.prototype.render = function() {
        this.font("bold 80pt Baskerville");
        this.color("#ffffff");
        this.text(45, 200, "SPECTRUM", false);
        this.color("#d13737");
        this.polygon(this.width * .5 - 25, this.height * .5 + 20, 10, 30);
        this.color("45d137");
        this.polygon(this.width * .5, this.height * .5 + 20, 10, 30);
        this.color("#3762d1");
        return this.polygon(this.width * .5 + 25, this.height * .5 + 20, 10, 30);
      };

      return Basic;

    })(Renderer);
  });

}).call(this);
