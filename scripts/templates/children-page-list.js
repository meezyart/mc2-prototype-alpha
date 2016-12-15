/*jshint esversion: 6 */
//gaurdian-details-list.js
// 
// Author: Conrad Davis Jr
// 
// This js file serves a template for the Gaurdians detail page
// 

const childrenPage = {
  targetContainer: '.children-buttons',
  dataStore: 'childrenData',
  tableKey: 'children',
  html: (data) => (
    `
    <div class="children-buttons__children-button" user-id="${data.id}" view-path="childrenDetailPage" navbutton>
      <div class="children-buttons__profile-picture" style="background-image: ${data.profilePicture}"></div>
      <div class="children-buttons__children-name">${data.firstName}</div>
    </div>
    `
  )
};

// add the template to the Templates object
window.Templates.childrenPage = childrenPage;