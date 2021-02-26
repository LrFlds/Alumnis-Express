
function search(data,callback,temp){
    const search = document.getElementById('search')
    const value = search.value.toLowerCase().replace(/\s/g, "")
    let filteredData = temp.filter((element)=>{
        if(element.Name.toLowerCase().includes(search.value.toLowerCase())|| element.FirstName.toLowerCase().includes(search.value.toLowerCase())||element.Company.toLowerCase().includes(search.value.toLowerCase())){
            return element
        }else{
           for(let techno of element.Techno){
            if(techno.toLowerCase().includes(value)){
                return element
            }
        }
        }
    })
    if(value.length ==0){
        callback(temp)
    }else{
        callback(filteredData);
    }


}

export default search;