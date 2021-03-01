const getAllUsers = async () => {
    try {
        const response = await fetch('http://api.app.localhost:3001/user/annuaire', { method: "GET", credentials: 'include', headers: { Cookie: document.cookie, } });

        if (response.ok) {
            return response.json()
        } else {
            window.location.href = '/redirect'
        }
    }catch(error){
        throw new Error('Server Down')
    }
}

export default getAllUsers;