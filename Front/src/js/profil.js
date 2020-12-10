const idProfil = window.location.hash.split("#")[1];

function addProfil(data){
  const contenerData = document.querySelector('.contener-profil');
  const profil = document.createElement("div");
  profil.classList.add('col');
  profil.classList.add('s5');
  profil.innerHTML = ` 
      <div class="contener-img">
      <img src="imgs/avaprofil.png">
      <span class="statut">${data.Status}</span>
      <div class="contener-text">
        <span class="card-title">${data.Name} ${data.FirstName}
        </span>
        <span class="card-subTitle"> ${data.Company} </span>
      </div>
    </div>
    <div class="contener-description">
      <h2>Description</h2>
      <p> ${data.Description}</p>
    </div>
      `;
  contenerData.appendChild(profil);
  const profilDeux = document.createElement("div");
  profilDeux.classList.add('col');
  profilDeux.classList.add('s7');
  profilDeux.innerHTML =`
      <div class="contener-message">
       
            <li><a href="#!"><i class="small material-icons">chat_bubble_outline</i>Envoyer un message</a></li>
          </div>

          <div class="contener-parametres">
            <div class="row">
              <div class="col s6">
                <h2 class="promo">Année de promo</h2>
                <p class="annee">${data.Year}</p>
                
              </div>
              <div class="col s6">
                <h2>Lieu</h2>
                <p class="ville"> ${data.Fabric} </p>
              </div>
              <div class="col s12"></div>
              <h2 class="titre-techno">Technologies
              </h2>
            <div class="techno">
            
            <span class="tech"> ${data.Techno} </span>
          </div>
          <div class="col s12"></div>
          <h2>Me suivre
          </h2>
        <div class="social">
        <a href="#"><i class="fab fa-github"></i> Github</a>
        <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
        <a href="#"><i class="fas fa-user"></i>Portfolio</a>
      </div>
            </div>
          </div>
      `;
  contenerData.appendChild(profilDeux);
}


function fetchProfil(id){
  fetch(`http://localhost:3000/profil/${id}`).then(reponse => {

    if (!reponse.ok) {

      console.log('connection is not good');

    } else {

      return reponse.json()

    }

  }).then(data => {
     addProfil(data)
  })

}


fetchProfil(idProfil);