/*jshint esversion: 6 */
// overlay.js
// 
// Author: Conrad Davis Jr
// 
// library for loading content into an overlay modal
// 

window.onload = () => {

  const Overlay = {

    init: function(){
      this.elements();
    },

    elements: function(){
      var blah = document.querySelectorAll('.blah');
    }
  };
  Overlay.init();
  window.Overlay = Overlay;
};
