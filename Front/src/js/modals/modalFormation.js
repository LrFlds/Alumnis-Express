import React from 'react';
const burger  = () => {


    const triger = document.querySelector('.trigger');
    const pop = document.querySelector('.modal');
    const close = document.querySelector('.modal-close');
    triger.addEventListener('click', () =>{
     
        pop.style.display = "block";
        pop.style.transition = " all 0.5s";
       
    });

    close.addEventListener('click', () =>{
        pop.style.display ="none";
        pop.style.transition = " all 0.5s";
    });




            const M = window.M;
            const tag_holder = document.querySelectorAll('.chips-placeholder');
          M.Chips.init(tag_holder, {
              placeholder: 'Ajouter une formation',
              secondaryPlaceholder:'+Add_more'
          });
     


        }
export default burger;