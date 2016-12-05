/*jshint esversion: 6 */
// page.js
// 
// Author: Conrad Davis Jr
// 
// library for handling the content on the page canvas
// 
console.log("PAGE JS");

var Page = {

  // init
  init: function() {
    this.state();
    this.elements();
    this.events();
  },
  // state
  state: function(){
  },
  // elements
  elements: function() {
    this.container = document.getElementById('page');
    this.profileButtons = document.querySelectorAll('[navbutton]');
  },

  // event listeners
  events: () => {
    // listen to all 
    [...Page.profileButtons].forEach(element => element.addEventListener('click', (e) => {
      Page.changePage(element.getAttribute('view-path'));
    }));
  },

  //////////
  // PUBLIC METHODS
  /////////

  // UPDATE PAGE CONTENT
  // 
  // handler for closing the Page modal
  // 
  updatePage: () => {
    // Page.container.innerHTML = '';
  },

  // *TEMPORARY METHOD
  // 
  // this method shows and hides pages with display:none/block
  changePage: (element) => {
    // hide all of the pages
    [...Page.container.children].forEach(x => x.classList.add('is-hidden'));

    // reveal the desired class
    document.getElementById(element).classList.remove('is-hidden');
  }

};

Page.init();
window.Page = Page;
