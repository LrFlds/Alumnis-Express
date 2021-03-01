  
        
        
        const filtre = document.querySelector('.filtres');
        filtre.addEventListener('click', open);
        function open() {
            const popUp = document.querySelector('.pop-up-filtre');
            popUp.classList.add('open');
        }
        const ferme = document.querySelector('.close');
        ferme.addEventListener('click', close);
        function close() {
            const popUp = document.querySelector('.pop-up-filtre');
            popUp.classList.remove('open');
        }

        const tags = document.querySelectorAll(".chips-autocomplete");
 M.Chips.init(tags,{
     placeholder:"Votre région ...",
     autocompleteOptions:{
         data:{
         'Calais': null,
         'Roubaix': null
        },
        limit:Infinity,
        minlength: 2
     }
 });
 const tagAuto = document.querySelectorAll(".chips-autocomplete-tech");
 M.Chips.init(tagAuto,{
     placeholder:"Votre techno ...",
     autocompleteOptions:{
         data:{
         'Node': null,
         'React': null
        },
        limit:Infinity,
        minlength: 2
     }
 });


 


        