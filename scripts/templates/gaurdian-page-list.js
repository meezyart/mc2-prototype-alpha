/*jshint esversion: 6 */
//gaurdian-details-list.js
// 
// Author: Conrad Davis Jr
// 
// This js file serves a template for the Gaurdians detail page
// 

const gaurdiansPage = {
  targetContainer: '.gaurdian-buttons',
  dataStore: 'gaurdianData',
  html: 
        `<div class="gaurdian-buttons__gaurdian-button" view-path="gaurdiansDetailPage" navbutton>
          <div class="gaurdian-buttons__profile-picture" style="background-image: url('images/profile-pic-mary.jpg')"></div>
          <div class="gaurdian-buttons__gaurdian-name">Mary</div>
          <div class="gaurdian-buttons__gaurdian-title">Mother</div>
        </div>`
};

// add the template to the Templates object
window.Templates.gaurdiansPage = gaurdiansPage;