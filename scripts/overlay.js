/*jshint esversion: 6 */
// overlay.js
// 
// Author: Conrad Davis Jr
// 
// library for loading content into an overlay modal
// 

window.onload = () => {

  // var RS_img_handler = {

  //   init: function(){
  //     this.setupVariables();
  //     this.setupElements();
  //     this.bpCheck();
  //     this.eventHandlers();
  //   },

  var Overlay = {


    init: function() {
      console.log('this: ', this);
      this.elements();
    },

    elements: function() {
      this.overlayView = document.querySelectorAll('.overlay-view');
    },

    animate: ( animation ) => {
      console.log('overlayView: ', Overlay.overlayView);
      switch (animation){
        case 'fromRightToLeft':
          console.log("Logged fromRightToLeft");
          break;
      }
      
    }

  };
  Overlay.init();
  window.Overlay = Overlay;
};
