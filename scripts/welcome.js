/*jshint esversion: 6 */
// welcome.js
// 
// Author: Conrad Davis Jr
// 
// Scripts for managing elements on the welcome page
// 


var Welcome = {

  init: function() {
    this.state();
    this.elements();
    this.events();
  },

  state: function () {
    this.formStep = 0;
  },

  elements: function() {
    this.signUpBtn = document.querySelectorAll('.signing-content__sign-up');
    this.formStepsContainer = document.querySelectorAll('.form__steps-container');
    this.signupProgressbarSteps = document.querySelectorAll('.signup-progressbar__steps');
    this.formRowItems = document.querySelectorAll('.form__row-item');
    this.signupElement = document.querySelectorAll('.signup-element');
    this.formSubmit = document.querySelectorAll('.form__submit');
  },

  events: () => {

    // clicking the sign up button
    Welcome.signUpBtn[0].addEventListener('click', () => {
      Overlay.animate('from-right-to-left'); // pass and animation option into the overlay library
    });
    
    // clicking the Form Submit button
    Welcome.formSubmit[0].addEventListener('click', (e) => {
      e.preventDefault();

      // proceed to the next step in the form, or submit it
      Welcome.formHandler();
    });
  },

  // Travel to the remaining steps in a form
  // 
  // 
  formHandler: () => {
    // check if the required fields are filled
    // if (Welcome.signupElement) {
    //   let inputFields = Welcome.formRowItems[Welcome.formStep].children;
    //   for (let key in inputFields){
    //     console.log(inputFields[key].value);
    //   }
    // }

    // check if there are any more steps to proceed
    if (Welcome.signupProgressbarSteps.length - 1 > Welcome.formStep) {
      Welcome.formStep ++; 

      // add an 'activated' class to the proceeding step
      Welcome.signupProgressbarSteps[Welcome.formStep].classList.add('activated-step');
      Welcome.formStepsContainer[0].style.transform = "translateX(" + `-${Welcome.formStep}00%` + ")";
    } else {
      // then we're ready to proceed
      Overlay.animate('exit-left');
      window.Page.changePage('profile-page');
    }

  }

};
Welcome.init();
