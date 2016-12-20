/*jshint esversion: 6 */
//gaurdian-details-list.js
// 
// Author: Conrad Davis Jr
// 
// This js file serves a template for the Gaurdians detailed page (EDIT)
// 

const gaurdianDetailsEdit = {
  targetContainer: '.gaurdianDetailsEdit__gaurdian-details',
  secondaryTarget: '.gaurdianDetailsEdit__profile-container',
  dataStore: 'gaurdianDetailsData',
  tableKey: 'gaurdians',
  html: (data) => (
    `
    <div class="gaurdianDetailsEdit__details-row">
      <div class="gaurdianDetailsEdit__category">${data.category}</div>
      <div class="gaurdianDetailsEdit__info"><input value="${data.answer}"></div>
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
      <div class="gaurdian-profile__edit" user-id="${data.id}">
        <span class="editing">Editing</span> 
        <span class="button button--save" user-id="${data.id}" view-path="gaurdianDetails" navbutton>Save</span>
        <span class="button button--cancel" user-id="${data.id}" view-path="gaurdianDetails" navbutton>Cancel</span>
      </div>
    `
  )
};

// add the template to the Templates object
window.Templates.gaurdianDetailsEdit = gaurdianDetailsEdit;