

const btn = document.querySelector('#sub');

btn.addEventListener('click', (e) =>{
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
        body : userJson
    }
    fetch("http://localhost:3000/login", option).then(reponse => {
        if(!reponse.ok){
            alert("ton pèèèèèèèèèèèèère");
        }else{
            return reponse.json()
        }
    }).then(data => {
       window.location.href = `./annuaire.html#${data.Name}#${data.FirstName}` 
    })
})

