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
      this.overlayCloseBtn = document.querySelectorAll('.overlay-view__close-btn');
    },

    // event listeners
    events: () => {
      Overlay.overlayCloseBtn[0].onclick = () => {
        Overlay.closeOverlay();
      };
    },

    //////////
    // PUBLIC METHODS
    /////////

    // OVERLAY ANIMATION
    // 
    // Overlay animation handler
    // 
    animate: ( animation ) => {
      // clear all animation classes from the overlay
      Overlay.overlayView[0].setAttribute('class', 'overlay-view');

      // animations are based on overlay.sass animation styles ex: 'from-right-to-left'
      Overlay.overlayView[0].classList.add(animation);

      // store the most recently selected animation request, and reverse its direction
      Overlay.reverseAnimationCache = animation + '-reversed';
    },

    // CLOSE OVERLAY
    // 
    // handler for closing the overlay modal
    // 
    closeOverlay: () => {
      Overlay.animate(Overlay.reverseAnimationCache);
    }

  };
  Overlay.init();
  window.Overlay = Overlay;
};
