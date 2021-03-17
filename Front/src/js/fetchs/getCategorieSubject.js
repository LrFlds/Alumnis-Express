async function getCategoryByID(id) {
    try {
        const response = await fetch(`http://api.app.localhost:3001/forum/${id}`, { method: "GET", credentials: 'include', headers: { Cookie: document.cookie, } });

        if (response.ok) {
            return response.json()
        } else {
            window.location.href = '/redirect'
        }
    }catch(error){
        throw new Error('Server Down')
    }
}

export default getCategoryByID;