export{addSimploniens}


function addSimploniens(element){
    const contener = document.getElementById('contenerCarte')
    const carte = document.createElement("div")
    carte.classList.add('col s4')
    carte.innerHTML = ` 
    <div class="card">
        <div class="card-image">
            <div class="contener-image"> 
          <img src="imgs/roger.jpg">
        </div>
        <span class="card-title">${element.Name + element.FirstName}</span>
        <span class="card-subTitle">${element.Company}</span>
        </div>
        <div class="card-content">
          <p>${element.Description}</p>
        </div>
    </div>
    ` 
    contener.appendChild(carte)
}