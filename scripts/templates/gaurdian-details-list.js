/*jshint esversion: 6 */
//gaurdian-details-list.js
// 
// Author: Conrad Davis Jr
// 
// This js file serves a template for the Gaurdians detailed page
// 

const gaurdianDetails = {
  targetContainer: '.gaurdian-details',
  dataStore: 'gaurdianDetailsData',
  tableKey: 'gaurdians',
  html: (data) => (
    `
    <div class="gaurdian-details__details-row">
      <div class="gaurdian-details__category">Profession</div>
      <div class="gaurdian-details__info"><input placeholder="English Teacher"></div>
    </div>
    `
  )
};

// add the template to the Templates object
window.Templates.gaurdianDetails = gaurdianDetails;