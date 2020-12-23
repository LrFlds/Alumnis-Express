import React from 'react';
const modalF = () => {


    const triger = document.querySelector('.trigger');
    const pop = document.querySelector('.modal');
    triger.addEventListener('click', () =>{
     
        pop.style.display = "block";
        pop.style.transition = " all 0.5s";
       
    });

        }
export default modalF;