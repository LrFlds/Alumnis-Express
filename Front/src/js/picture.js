import React from 'react';

const file = () =>{
    const img = document.querySelector('#photo');
    const file = document.querySelector('#file');
    const upload = document.querySelector('#up');
    const save = document.querySelector('#save');

    file.addEventListener('change', function(){
        const choosedFile = this.files[0];
        if(choosedFile) {
            const reader = new FileReader();
            reader.addEventListener('load', function () {
                img.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(choosedFile);
        }
    })

   
}

export default file;