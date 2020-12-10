







fetch('http://localhost:3000/user/getUser').then(reponse => {
    if(!reponse.ok){

        console.log('connection is not good');

    }else{

        return reponse.json()

    }
}).then(data => {
    console.log(data)
})