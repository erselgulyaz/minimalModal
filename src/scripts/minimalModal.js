class minimalModal {

  constructor(options = {}) {
    const defaults = { /* parameters */
      startAnimation : "topToCenter",
      endAnimation : "top",
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
  
    outerTemplate += `
      <div class="minimal-modal__outer-wrapper minimal-modal__outer-wrapper--hidden">
        <div class="minimal-modal__inner-wrapper minimal-modal__inner-wrapper--hidden"></div>
      </div>
    `;

    innerTemplate += `
      <div class="minimal-modal minimal-modal__animation" style="max-width: ${this.maxWidth}px; max-height: ${this.maxHeight}px; margin: ${this.topOuterSpace}px ${this.rightOuterSpace}px ${this.bottomOuterSpace}px ${this.leftOuterSpace}px; overflow-x: ${this.overflowX}; overflow-y: ${this.overflowY};">
        ${this.modalTemplate}
      </div>
    `;

    this.open(outerTemplate, innerTemplate);
  }
  
  open(outerTemplate, innerTemplate) {
    let outer = document.createElement("div");
    let modal = document.createElement("div");

    /* add outer items */
    outer.innerHTML = outerTemplate;
    document.body.innerHTML = outerTemplate;
    this.elementVisible("minimal-modal__outer-wrapper--hidden", 250);
    
    /* add minimalModal content */
    modal.innerHTML = innerTemplate;
    document.querySelector(".minimal-modal__inner-wrapper").innerHTML += modal.innerHTML;
    this.elementVisible("minimal-modal__inner-wrapper--hidden", 500);
    
    /* add start animation class */
    const modalStartClass = this.firstAnimation();
    document.querySelector(".minimal-modal").classList.add(modalStartClass);
  }

  elementVisible(elementClass, time) {
    setTimeout(() => {
      document.querySelector(`.${elementClass}`).classList.remove(elementClass);
    }, time);
  }

  firstAnimation() {
    let animationClass = "";

    if ( this.startAnimation === "topToCenter" ) {
      animationClass = "minimal-modal__animation--topToCenter";
    } else if ( this.startAnimation === "bottomToCenter" ) {
      animationClass = "minimal-modal__animation--bottomToCenter";
    } else if ( this.startAnimation === "leftToCenter" ) {
      animationClass = "minimal-modal__animation--leftToCenter";
    } else if ( this.startAnimation === "rightToCenter" ) {
      animationClass = "minimal-modal__animation--rightToCenter";
    }

    return animationClass;
  }

  lastAnimation() {}
  
  close() {}
  
  init() {
    this.template();
  }

}