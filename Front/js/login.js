

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
        credentials:'include',
        mode:"cors"

    }
    const res = await fetch("http://api.app.localhost:3000/user/login", option)
    if(res.status == 201){
        console.log('tu me soules')
    // document.location.href = './annuaire.html'


    }else{
        alert('Utilisateur inconnu')

    }
})

