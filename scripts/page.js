/*jshint esversion: 6 */
// page.js
// 
// Author: Conrad Davis Jr
// 
// library for handling the content on the page canvas
//
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
    this.bodyElement = document.querySelector('body');
    this.profileButtons = document.querySelectorAll('[navbutton]');
    console.log('profileButtons: ', Page.profileButtons);
  },

  // event listeners
  events: () => {
    // listen to all elements with the 'navbutton' attribute on it
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

  // *TEMPORARY METHODS
  // 
  // this method shows and hides pages with display:none/block
  changePage: (element) => {
    // hide all of the pages
    [...Page.container.children].forEach(x => x.classList.add('is-hidden'));

    // reveal the desired page
    document.getElementById(element).classList.remove('is-hidden');

    // serve the corresponding template(s) for the revealed page
    console.log('element: ', element);
    let thisTemplate = window.Templates[element]; //get the template
    console.log('thisTemplate: ', thisTemplate);
    let targetSelector = thisTemplate.targetContainer;
    let targetContainer = document.querySelectorAll(targetSelector);

    // for each row of data, output the matching html template
    targetContainer[0].innerHTML = thisTemplate.html;
    
    // add a listener to the added element
    let navButtons = document.querySelectorAll('[navbutton]');

    // unbind the event listeners for the nav buttons
    navButtons.forEach(element => element.removeEventListener('click', (e) => {}));

    // add a new set of event listeners to the nav buttons 
    navButtons.forEach(element => element.addEventListener('click', (e) => {
      Page.changePage(element.getAttribute('view-path'));
    }));

  }

};

Page.init();
window.Page = Page;
