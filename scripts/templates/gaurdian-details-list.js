/*jshint esversion: 6 */
//gaurdian-details-list.js
// 
// Author: Conrad Davis Jr
// 
// This js file serves a template for the Gaurdians detailed page
// 

const gaurdianDetails = {
  targetContainer: '.gaurdian-details',
  secondaryTarget: '.gaurdianDetails__profile-container',
  dataStore: 'gaurdianDetailsData',
  tableKey: 'gaurdians',
  html: (data) => (
    `
    <div class="gaurdian-details__details-row">
      <div class="gaurdian-details__category">${data.category}</div>
      <div class="gaurdian-details__info">${data.answer}</div>
    </div>
    `
  ),
  secondaryHtml: (data) => (
    `
    <div class="page-banner gaurdians-detail-page__banner"><span></span>gaurdians - ${data.firstName}</div>
    <section class="gaurdian-profile">
      <div class="gaurdian-profile__profile-picture" style="background-image: ${data.profilePicture}"></div>
      <div class="gaurdian-profile__information">
        <div class="gaurdian-profile__gaurdian-name">${data.firstName} ${data.lastName}</div>
        <div class="gaurdian-profile__gaurdian-title">${data.gaurdianStatus}</div>
      </div>
    </section>
    `
  )
};

// add the template to the Templates object
window.Templates.gaurdianDetails = gaurdianDetails;