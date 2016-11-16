/*jshint esversion: 6 */
// overlay.js
// 
// Author: Conrad Davis Jr
// 
// library for loading content into an overlay modal
// 

window.onload = () => {

  var Overlay = {

    init: function() {
      this.state();
      this.elements();
    },

    state: function(){
      this.animationCache = 0;
    },
    elements: function() {
      this.overlayView = document.querySelectorAll('.overlay-view');
    },

    animate: ( animation ) => {
      Overlay.overlayView[0].classList.add(animation);

      // store the most recently selected animation request
      Overlay.animationCache = animation;
    },

    closeOverlay: () => {

    }

  };
  Overlay.init();
  window.Overlay = Overlay;
};
