// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['renderer'], function(Renderer) {
    var MouseEvents, _ref;
    return MouseEvents = (function(_super) {
      __extends(MouseEvents, _super);

      function MouseEvents() {
        _ref = MouseEvents.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MouseEvents.prototype.init = function() {
        this.data = [];
        return this.bg = "#222222";
      };

      MouseEvents.prototype.step = function() {
        var i, _results;
        i = 0;
        _results = [];
        while (i < this.data.length) {
          if (this.data[i] != null) {
            this.data[i].scale -= .005;
            this.data[i].alpha -= .005;
            if (this.data[i].alpha < 0) {
              this.data[i] = null;
            }
          }
          _results.push(i++);
        }
        return _results;
      };

      MouseEvents.prototype.render = function() {
        var i, p, _results;
        i = 0;
        _results = [];
        while (i < this.data.length) {
          p = this.data[i];
          if (p != null) {
            this.alpha(p.alpha);
            this.color(p.color);
            this.point(p.x, p.y, p.radius * p.scale);
            this.color("#ffffff");
            this.point(p.x, p.y, p.radius * p.scale, false);
          }
          _results.push(i++);
        }
        return _results;
      };

      MouseEvents.prototype.onMouseDown = function(x, y) {
        return this.data.push({
          x: x,
          y: y,
          color: this.randomColor(),
          radius: this.random() * 20 + 5,
          alpha: 1,
          scale: 1
        });
      };

      MouseEvents.prototype.onMouseDrag = function(x, y) {
        return console.log("onMouseDrag");
      };

      return MouseEvents;

    })(Renderer);
  });

}).call(this);