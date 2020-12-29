import react from 'react'

const logout = ()=>{
    fetch('http://api.app.localhost:3001/user/logout',{
        credentials:'include',
        headers:{
            Cookie:document.cookie
        }
    }).then(response=>{
        if(response.status == 401){
            window.location.href = "/user/login"
        }else{
            console.log('lol')
        }

    })
}

export default logout