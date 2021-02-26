import React from 'react';

const burger = () => {




const burger = document.querySelector('.burger');
const navbar = document.querySelector('.sidenav');


burger.addEventListener('click', () => {
    navbar.style.left = 0 + "px";
    navbar.style.transition = " all 0.5s";
    burger.style.display = "none";
 

});




}
export default burger ;