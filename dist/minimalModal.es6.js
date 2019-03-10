class minimalModal {

  constructor(options = {}) {
    const defaults = { /* parameters */
      startAnimation : "topToCenter",
      endAnimation : "centerToTop",
      maxWidth : 600,
      maxHeight : 400,
      xPosition : "center",
      yPosition : "center",
      topOuterSpace : 0,
      rightOuterSpace : 0,
      bottomOuterSpace : 0,
      leftOuterSpace : 0,
      hiddenForGradientClick : true,
      overflowX : "hidden",
      overflowY : "auto",
      modalTemplate: ``
    };
    
    const extend = Object.assign(defaults, options);

    for ( const key in extend ) {
      if ( extend.hasOwnProperty(key) ) {
        this[key] = extend[key]
      }
    }
  }

  template() {
    let outerTemplate = "", innerTemplate = "";

    const closeBandTemplate = this.hiddenForGradientClick ? `<div class="minimal-modal__close-band"></div>` : "";
    
  
    outerTemplate += `
      <div class="minimal-modal__outer-wrapper minimal-modal__outer-wrapper--hidden">
        ${closeBandTemplate}
        <div class="minimal-modal__inner-wrapper minimal-modal__inner-wrapper--hidden minimal-modal__inner-wrapper__vertical-${this.yPosition} minimal-modal__inner-wrapper__horizontal-${this.xPosition}"></div>
      </div>
    `;

    innerTemplate += `
      <div class="minimal-modal minimal-modal__animation" style="max-width: ${this.maxWidth}px; max-height: ${this.maxHeight}px; margin: ${this.topOuterSpace}px ${this.rightOuterSpace}px ${this.bottomOuterSpace}px ${this.leftOuterSpace}px; overflow-x: ${this.overflowX}; overflow-y: ${this.overflowY};">
        ${this.modalTemplate}
      </div>
    `;

    this.open(outerTemplate, innerTemplate);

    this.hiddenForGradientClick && this.gradientClick();
  }
  
  open(outerTemplate, innerTemplate) {
    let outer = document.createElement("div");
    let modal = document.createElement("div");

    /* add outer items */
    outer.innerHTML = outerTemplate;
    document.body.innerHTML = outerTemplate;
    this.elementVisible("minimal-modal__outer-wrapper", "minimal-modal__outer-wrapper--hidden", 250, "visible");
    
    /* add minimalModal content */
    modal.innerHTML = innerTemplate;
    document.querySelector(".minimal-modal__inner-wrapper").innerHTML += modal.innerHTML;
    this.elementVisible("minimal-modal__inner-wrapper", "minimal-modal__inner-wrapper--hidden", 500, "visible");
    
    /* add start animation class */
    const modalStartClass = this.modalAnimationClass("start");
    document.querySelector(".minimal-modal").classList.add(modalStartClass);

    /* close buttons actions */
    const closeButtons = document.querySelectorAll(`[data-minimalmodal-close]`);
    if (closeButtons) {
      Array.prototype.forEach.call(closeButtons, closeButton => {
        closeButton.addEventListener("click", () => {
          this.close();
        });
      })
    }

  }

  elementVisible(selector, actionClass, time, type) {
    setTimeout(() => {
      if ( type === "visible" ) {
        document.querySelector(`.${selector}`).classList.remove(actionClass);
      } else if ( type === "hidden" ) {
        document.querySelector(`.${selector}`).classList.add(actionClass);
      }
    }, time);
  }

  modalAnimationClass(type) {
    let animationClass = "";

    const animationPrefix = "minimal-modal__animation--";

    if ( type === "start" ) {
      animationClass = `${animationPrefix}${this.startAnimation}`;
    } else { /* type === "end" */
      animationClass = `${animationPrefix}${this.endAnimation}`;
    }

    return animationClass;

  }

  gradientClick() {
    document.querySelector(".minimal-modal__close-band").addEventListener("click", () => {
      this.close();
    });
  }
  
  close() {
    const outer = document.querySelector(".minimal-modal__outer-wrapper");
    const modalEndClass = this.modalAnimationClass("end");
    document.querySelector(".minimal-modal").classList.add(modalEndClass);

    this.elementVisible("minimal-modal__inner-wrapper", "minimal-modal__inner-wrapper--hidden", 250, "hidden");

    this.elementVisible("minimal-modal__outer-wrapper", "minimal-modal__outer-wrapper--hidden", 500, "hidden");
    
    setTimeout(() => {
      outer.parentNode.removeChild(outer);
    },700);

  }
  
  init() {
    this.template();
  }

}