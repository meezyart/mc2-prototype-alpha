/*jshint esversion: 6 */
//gaurdian-details-list.js
// 
// Author: Conrad Davis Jr
// 
// This js file serves a template for the Gaurdians detail page
// 

const gaurdianPage = 
  `
  <div class="gaurdian-buttons__gaurdian-button" view-path="gaurdians-detail-page" navbutton>
    <div class="gaurdian-buttons__profile-picture" style="background-image: url('images/profile-pic-mary.jpg')"></div>
    <div class="gaurdian-buttons__gaurdian-name">Mary</div>
    <div class="gaurdian-buttons__gaurdian-title">Mother</div>
  </div>

  `;

window.Templates.gaurdianPage = gaurdianPage;