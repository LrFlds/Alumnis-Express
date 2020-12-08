const option = {method:"GET", headers:{'Content-type': 'application/json; charset=UTF-8'}}

function addSimploniens(element){
    const contener = document.getElementById('contenerCarte')
    const carte = document.createElement("a")
    carte.classList.add('col')
    carte.classList.add('s4')
    carte.setAttribute('href', `./profil.html/#${element._id}`)
    carte.innerHTML = ` 
    <div class="card">
        <div class="card-image">
            <div class="contener-image"> 
          <img src="imgs/roger.jpg">
        </div>
        <span class="card-title">${element.Name} ${element.FirstName}</span>
        <span class="card-subTitle">${element.Company}</span>
        </div>
        <div class="card-content">
          <p>${element.Description}</p>
        </div>
    </div>
    ` 
    contener.appendChild(carte)
    
}



fetch("http://localhost:3000/user/annuaire", option).then(reponse => {
  

    if(!reponse.ok){

        console.log('connection is not good');

    }else{

        return reponse.json()

    }

}).then(data => {

    data.forEach(element => {

        addSimploniens(element)

    })

})


