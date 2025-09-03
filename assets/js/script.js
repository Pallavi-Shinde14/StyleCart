'use strict';

// --------------------
// MODAL (Newsletter)
// --------------------
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');
const newsletterForm = document.querySelector('.newsletter form');

// close modal function
const modalCloseFunc = function () { 
  modal.classList.add('closed');
  // remember that the user closed or subscribed
  localStorage.setItem('newsletterClosed', 'true');
}

// close modal events
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// when user submits email, close and remember
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();  // stop page reload
    modalCloseFunc();
  });
}

// show modal only on first visit
window.addEventListener('load', function () {
  const isClosed = localStorage.getItem('newsletterClosed');
  if (!isClosed) {
    modal.classList.remove('closed'); // show it first time
  } else {
    modal.classList.add('closed'); // keep hidden next time
  }
});


// --------------------
// NOTIFICATION TOAST
// --------------------
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});


// --------------------
// MOBILE MENU
// --------------------
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}


// --------------------
// ACCORDION
// --------------------
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
