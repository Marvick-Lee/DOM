/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sectionList = document.getElementsByTagName('section');
const sectionQuantity = sectionList.length;
const topButton = document.getElementById("toTopBtn");
const navbarList = document.getElementById('navbar__list');
/**
* End Global Variables
* Start Helper Functions
*
*/
function buttonPopUp(){
    let popUpRange=document.documentElement.scrollTop;
    (popUpRange>800) ? topButton.style.display = 'block' : topButton.style.display = 'none';
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});    
}

/**
* End Helper Functions
* Begin Main Functions
*
*/
 
// build the nav
function createNavbar() {
    let sectionName; let aTag;
    for (let i=0; i<=sectionList.length-1; i++) {
        sectionName = document.createElement('li');
        aTag = document.createElement('a');
        aTag.className='menu__link';
        aTag.innerHTML = `${sectionList[i].getAttribute('data-nav')}`;
        aTag.href=`#${sectionList[i].getAttribute('id')}`;
        sectionName.appendChild(aTag);
        navbarList.appendChild(sectionName);
    }
}

// Add class 'active' to section when near top of viewport
// onscroll(){
//     for(let i=0; i<sectionList ;i++){
//         if 
//     }
// }
 
// Scroll to anchor ID using scrollTO event
 
/**
* End Main Functions
* Begin Events
*
*/
// Build menu
createNavbar();
window.onscroll = buttonPopUp;
// Scroll to section on link click

// Set sections as active
