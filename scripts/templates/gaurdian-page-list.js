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
  html: (data) => (
    `<div class="gaurdian-buttons__gaurdian-button" view-path="gaurdiansDetailPage" navbutton>
      <div class="gaurdian-buttons__profile-picture" style="background-image: ${data.profilePicture}"></div>
      <div class="gaurdian-buttons__gaurdian-name">${data.firstName} ${data.lastName}</div>
      <div class="gaurdian-buttons__gaurdian-title">${data.gaurdianStatus}</div>
    </div>`
  )
};

// add the template to the Templates object
window.Templates.gaurdiansPage = gaurdiansPage;