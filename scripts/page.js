/*jshint esversion: 6 */
// page.js
// 
// Author: Conrad Davis Jr
// 
// library for handling the content on the page canvas
//

const Page = {

  // init
  init: function() {
    this.getJson();
    this.state();
    this.elements();
    this.events();
  },

  // get initial json data
  getJson: function(){
    this.loadXMLDoc("./mock-data/data.json", 'gaurdianData');
  },

  // state
  state: function(){
  },
  // elements
  elements: function() {
    this.container = document.getElementById('page');
    this.bodyElement = document.querySelector('body');
    this.profileButtons = document.querySelectorAll('[navbutton]');
  },

  // event listeners
  events: () => {
    // listen to all elements with the 'navbutton' attribute on it
    [...Page.profileButtons].forEach(element => element.addEventListener('click', (e) => {
      Page.changePage(element.getAttribute('view-path'));
    }));
  },

  // collect Json data
  loadXMLDoc: function(url, dataStore) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
         if (xmlhttp.status == 200) {
            let getData = JSON.parse(xmlhttp.responseText);
            console.log('dataStore: ', dataStore);
            Page[dataStore] = getData;
         }
         else if (xmlhttp.status == 400) {
            alert('There was an error 400');
         }
         else {
            alert('something else other than 200 was returned');
         }
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
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

    let targetDataStore = thisTemplate.dataStore;

    // get the JSON data for the selected template
    Page.loadXMLDoc("./mock-data/data.json", targetDataStore);

    // store the data the belongs to this template
    let pageData = Page[targetDataStore].gaurdians;
    let targetSelector = thisTemplate.targetContainer;

    // get the element container element
    let targetContainer = document.querySelectorAll(targetSelector);

    // setup an array to store the html collection
    let htmlCollection = [];

    // 
    // populate the collection with the template data
    // 
    pageData.forEach(gaurdian => {
      htmlCollection.push(thisTemplate.html(gaurdian));
    });

    // output the html for this template
    targetContainer[0].innerHTML = htmlCollection.join('');

    // gather all of the elements with the navbutton attribute
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
