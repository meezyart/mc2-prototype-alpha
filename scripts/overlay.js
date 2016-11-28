/*jshint esversion: 6 */
// overlay.js
// 
// Author: Conrad Davis Jr
// 
// library for loading content into an overlay modal
// 

window.onload = () => {

  var Overlay = {

    // init
    init: function() {
      this.state();
      this.elements();
      this.events();
    },
    // state
    state: function(){
      this.reverseAnimationCache = '';
    },
    // elements
    elements: function() {
      this.overlayView = document.querySelectorAll('.overlay-view');
      this.secondaryOverlayView = document.querySelectorAll('.secondary-overlay-view');
      this.overlayCloseBtn = document.querySelectorAll('.overlay-view__close-btn');
      this.secondaryOverlayCloseBtn = document.querySelectorAll('.secondary-overlay-view__close-btn');
    },

    // event listeners
    events: () => {
      Overlay.overlayCloseBtn[0].onclick = () => {
        Overlay.closeOverlay();
      };
      Overlay.secondaryOverlayCloseBtn[0].onclick = () => {
        Overlay.closeOverlay(true);
      };
    },

    //////////
    // PUBLIC METHODS
    /////////

    // OVERLAY ANIMATION
    // 
    // Overlay animation handler
    // 
    animate: ( animation, isSecondaryOverlayView ) => {
      var overlayElement;
      var defaultClass;
      if (isSecondaryOverlayView) {
        overlayElement = Overlay.secondaryOverlayView[0];
        defaultClass = 'secondary-overlay-view';
      }else{
        overlayElement = Overlay.overlayView[0];
        defaultClass = 'overlay-view';
      }

      // clear all animation classes from the overlay
      overlayElement.setAttribute('class', defaultClass);

      // animations are based on overlay.sass animation styles ex: 'from-right-to-left'
      overlayElement.classList.add(animation);

      // store the most recently selected animation request, and reverse its direction
      Overlay.reverseAnimationCache = animation + '-reversed';
    },

    // CLOSE OVERLAY
    // 
    // handler for closing the overlay modal
    // 
    closeOverlay: (isSecondaryOverlayView) => {
      Overlay.animate(Overlay.reverseAnimationCache, isSecondaryOverlayView);
    }

  };
  Overlay.init();
  window.Overlay = Overlay;
};
