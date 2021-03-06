import React from 'react';
const Login = () => {

const btn = document.querySelector('#sub');

btn.addEventListener('click', async (e) =>{
    e.preventDefault()
    const mail = document.querySelector('#mail');
    const pass = document.querySelector('#pass');

    const user = {
        Email: mail.value,
        Password : pass.value
    }

    const userJson = JSON.stringify(user)

    const option = {
        method : "POST",
        headers : {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body : userJson,
        withCredentials: true,
        credentials:'include', //Permet de définir de quel domaine on reçoit les cookies
        mode: "cors",
    }

    const res = await fetch("http://api.app.localhost:3001/user/login", option)

    if(res.ok){
        window.location.href="/annuaire"
    }else{
        alert('Utilisateur inconnu')
    }
})

}
export default Login;

