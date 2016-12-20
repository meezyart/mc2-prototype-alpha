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
    this.loadXMLDoc('./mock-data/data.json');
  },

  // state
  state: function(){
  },
  // elements
  elements: function() {
    this.container = document.getElementById('page');
    this.bodyElement = document.querySelector('body');
    this.profileButtons = document.querySelectorAll('[navbutton]');
    this.pageItems = document.querySelectorAll('[pageItem]');
  },

  // event listeners
  events: () => {
    // listen to all elements with the 'navbutton' attribute on it
    [...Page.profileButtons].forEach(element => element.addEventListener('click', (e) => {
      Page.changePage(e.path[1], element.getAttribute('view-path'));
    }));
  },

  // collect Json data
  loadXMLDoc: function(url) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
         if (xmlhttp.status == 200) {
            let jsonData = JSON.parse(xmlhttp.responseText);
            Page.dataStore = jsonData;
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
  changePage: (e, element) => {

    // hide all of the pages
    console.log('Page.pageItems: ', Page.pageItems);
    [...Page.container.children].forEach(x => x.classList.add('is-hidden'));

    // reveal the desired page
    console.log('element: ', element);
    console.log('e: ', e);
    document.getElementById(element).classList.remove('is-hidden');

    // serve the corresponding template(s) for the revealed page
    let thisTemplate = window.Templates[element]; //get the corresponding template
    console.log('thisTemplate: ', thisTemplate);

    // if there is a template, save its dataStore
    if (thisTemplate) {
      let targetDataStore = thisTemplate.dataStore;
    }

    // grab the prop name for the data tree
    let tableKey = thisTemplate.tableKey;

    // store the data that belongs to this template
    let pageData = Page.dataStore[tableKey];

    // get the element that will serve as the container for the template
    let targetContainer = document.querySelectorAll(thisTemplate.targetContainer);

    // setup an array to store the html collection
    let htmlCollection = [];

    // output the html for this template
    // 

    // if the element clicked has a user id, store an access point to that object
    if (e.hasAttribute('user-id')){
      let userMatch = pageData.filter(function(item){
        if (item.id == e.getAttribute('user-id')) {
          return item;
        }
      });
      // populate the collection with the template data
      console.log('userMatch[0]: ', userMatch[0]);
      let secondaryData = userMatch[0];
      let detailItems = userMatch[0].additionalDetails;

      let secondaryTargetSelector = document.querySelectorAll(thisTemplate.secondaryTarget);

      secondaryTargetSelector[0].innerHTML = thisTemplate.secondaryHtml(secondaryData);

      // populate the collection array with the details data
      detailItems.forEach(detailitem => {
        htmlCollection.push(thisTemplate.html(detailitem));
      });
    }else{
      // populate the collection with the template data
      pageData.forEach(gaurdian => {
        htmlCollection.push(thisTemplate.html(gaurdian));
      });
      
    }

    // output the standard htmlCollection
    targetContainer[0].innerHTML = htmlCollection.join('');

    // 
    // Binding elements
    // 

    // gather all of the elements with the navbutton attribute
    let navButtons = document.querySelectorAll('[navbutton]');
    
    // unbind the event listeners for the nav buttons
    navButtons.forEach(element => element.removeEventListener('click', (e) => {}));

    // add a new set of event listeners to the nav buttons 
    navButtons.forEach(element => element.addEventListener('click', (e) => {
      Page.changePage(e.path[1], element.getAttribute('view-path'));
    }));

  }

};

Page.init();
window.Page = Page;
