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
      console.log('this: ', this);
      this.elements();
    },

    elements: function() {
      this.overlayView = document.querySelectorAll('.overlay-view');
    },

    animate: ( animation ) => {
      switch (animation){
        case 'fromRightToLeft':
          Overlay.overlayView[0].classList.add('from-right-to-left');
          break;
      }
    }

  };
  Overlay.init();
  window.Overlay = Overlay;
};
