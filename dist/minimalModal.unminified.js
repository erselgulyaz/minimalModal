"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var minimalModal = function () {
  function minimalModal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, minimalModal);

    var defaults = { /* parameters */
      startAnimation: "topToCenter",
      endAnimation: "centerToTop",
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

      var closeBandTemplate = this.hiddenForGradientClick ? "<div class=\"minimal-modal__close-band\"></div>" : "";

      outerTemplate += "\n      <div class=\"minimal-modal__outer-wrapper minimal-modal__outer-wrapper--hidden\">\n        " + closeBandTemplate + "\n        <div class=\"minimal-modal__inner-wrapper minimal-modal__inner-wrapper--hidden minimal-modal__inner-wrapper__vertical-" + this.yPosition + " minimal-modal__inner-wrapper__horizontal-" + this.xPosition + "\"></div>\n      </div>\n    ";

      innerTemplate += "\n      <div class=\"minimal-modal minimal-modal__animation\" style=\"max-width: " + this.maxWidth + "px; max-height: " + this.maxHeight + "px; margin: " + this.topOuterSpace + "px " + this.rightOuterSpace + "px " + this.bottomOuterSpace + "px " + this.leftOuterSpace + "px; overflow-x: " + this.overflowX + "; overflow-y: " + this.overflowY + ";\">\n        " + this.modalTemplate + "\n      </div>\n    ";

      this.open(outerTemplate, innerTemplate);

      this.hiddenForGradientClick && this.gradientClick();
    }
  }, {
    key: "open",
    value: function open(outerTemplate, innerTemplate) {
      var _this = this;

      var outer = document.createElement("div");
      var modal = document.createElement("div");

      /* add outer items */
      outer.innerHTML = outerTemplate;
      document.body.innerHTML = outerTemplate;
      this.elementVisible("minimal-modal__outer-wrapper", "minimal-modal__outer-wrapper--hidden", 250, "visible");

      /* add minimalModal content */
      modal.innerHTML = innerTemplate;
      document.querySelector(".minimal-modal__inner-wrapper").innerHTML += modal.innerHTML;
      this.elementVisible("minimal-modal__inner-wrapper", "minimal-modal__inner-wrapper--hidden", 500, "visible");

      /* add start animation class */
      var modalStartClass = this.modalAnimationClass("start");
      document.querySelector(".minimal-modal").classList.add(modalStartClass);

      /* close buttons actions */
      var closeButtons = document.querySelectorAll("[data-minimalmodal-close]");
      if (closeButtons) {
        Array.prototype.forEach.call(closeButtons, function (closeButton) {
          closeButton.addEventListener("click", function () {
            _this.close();
          });
        });
      }
    }
  }, {
    key: "elementVisible",
    value: function elementVisible(selector, actionClass, time, type) {
      setTimeout(function () {
        if (type === "visible") {
          document.querySelector("." + selector).classList.remove(actionClass);
        } else if (type === "hidden") {
          document.querySelector("." + selector).classList.add(actionClass);
        }
      }, time);
    }
  }, {
    key: "modalAnimationClass",
    value: function modalAnimationClass(type) {
      var animationClass = "";

      var animationPrefix = "minimal-modal__animation--";

      if (type === "start") {
        animationClass = "" + animationPrefix + this.startAnimation;
      } else {
        /* type === "end" */
        animationClass = "" + animationPrefix + this.endAnimation;
      }

      return animationClass;
    }
  }, {
    key: "gradientClick",
    value: function gradientClick() {
      var _this2 = this;

      document.querySelector(".minimal-modal__close-band").addEventListener("click", function () {
        _this2.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      var outer = document.querySelector(".minimal-modal__outer-wrapper");
      var modalEndClass = this.modalAnimationClass("end");
      document.querySelector(".minimal-modal").classList.add(modalEndClass);

      this.elementVisible("minimal-modal__inner-wrapper", "minimal-modal__inner-wrapper--hidden", 250, "hidden");

      this.elementVisible("minimal-modal__outer-wrapper", "minimal-modal__outer-wrapper--hidden", 500, "hidden");

      setTimeout(function () {
        outer.parentNode.removeChild(outer);
      }, 700);
    }
  }, {
    key: "init",
    value: function init() {
      this.template();
    }
  }]);

  return minimalModal;
}();