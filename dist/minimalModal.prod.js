"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var minimalModal = function () {
  function minimalModal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, minimalModal);

    var defaults = { /* parameters */
      startAnimation: "topToCenter",
      endAnimation: "top",
      maxWidth: 600,
      maxHeight: 400,
      xPosition: "center",
      yPosition: "center",
      topOuterSpace: 0,
      rightOuterSpace: 0,
      bottomOuterSpace: 0,
      leftOuterSpace: 0,
      hiddenForGradientClick: true,
      overflowX: "hidden",
      overflowY: "auto",
      modalTemplate: ""
    };

    var extend = Object.assign(defaults, options);

    for (var key in extend) {
      if (extend.hasOwnProperty(key)) {
        this[key] = extend[key];
      }
    }
  }

  _createClass(minimalModal, [{
    key: "template",
    value: function template() {
      var outerTemplate = "",
          innerTemplate = "";

      outerTemplate += "\n      <div class=\"minimal-modal__outer-wrapper minimal-modal__outer-wrapper--hidden\">\n        <div class=\"minimal-modal__inner-wrapper minimal-modal__inner-wrapper--hidden\"></div>\n      </div>\n    ";

      innerTemplate += "\n      <div class=\"minimal-modal minimal-modal__animation\" style=\"max-width: " + this.maxWidth + "px; max-height: " + this.maxHeight + "px; margin: " + this.topOuterSpace + "px " + this.rightOuterSpace + "px " + this.bottomOuterSpace + "px " + this.leftOuterSpace + "px; overflow-x: " + this.overflowX + "; overflow-y: " + this.overflowY + ";\">\n        " + this.modalTemplate + "\n      </div>\n    ";

      this.open(outerTemplate, innerTemplate);
    }
  }, {
    key: "open",
    value: function open(outerTemplate, innerTemplate) {
      var outer = document.createElement("div");
      var modal = document.createElement("div");

      /* add outer items */
      outer.innerHTML = outerTemplate;
      document.body.innerHTML = outerTemplate;
      this.elementVisible("minimal-modal__outer-wrapper--hidden", 250);

      /* add minimalModal content */
      modal.innerHTML = innerTemplate;
      document.querySelector(".minimal-modal__inner-wrapper").innerHTML += modal.innerHTML;
      this.elementVisible("minimal-modal__inner-wrapper--hidden", 500);

      /* add start animation class */
      var modalStartClass = this.firstAnimation();
      document.querySelector(".minimal-modal").classList.add(modalStartClass);
    }
  }, {
    key: "elementVisible",
    value: function elementVisible(elementClass, time) {
      setTimeout(function () {
        document.querySelector("." + elementClass).classList.remove(elementClass);
      }, time);
    }
  }, {
    key: "firstAnimation",
    value: function firstAnimation() {
      var animationClass = "";

      if (this.startAnimation === "topToCenter") {
        animationClass = "minimal-modal__animation--topToCenter";
      } else if (this.startAnimation === "bottomToCenter") {
        animationClass = "minimal-modal__animation--bottomToCenter";
      } else if (this.startAnimation === "leftToCenter") {
        animationClass = "minimal-modal__animation--leftToCenter";
      } else if (this.startAnimation === "rightToCenter") {
        animationClass = "minimal-modal__animation--rightToCenter";
      }

      return animationClass;
    }
  }, {
    key: "lastAnimation",
    value: function lastAnimation() {}
  }, {
    key: "close",
    value: function close() {}
  }, {
    key: "init",
    value: function init() {
      this.template();
    }
  }]);

  return minimalModal;
}();