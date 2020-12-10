import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import USERS from '../models/mock-user';
import {Link} from 'react-router-dom';
import UserProfil from '../components/profil';

const UserList: FunctionComponent = () => {
const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
  setUser(USERS);
  }, []);

  return (
  <div>
     <ul className="sidenav">
    <li><div className="user-view row">
    <div className="contener-image">
          <a className="image-contener-sidebar" href="#user"><img  src="imgs/quentin.png" /> </a>
              </div> <span className="statut"></span>
      <a href="#name"><span className="white-text name col s12">Nom Prénom</span></a>
      <a href="#etat"><span className="white-text etat col">en ligne</span></a>
    </div></li>
    <div className="contener-nav">
    <li className="nav-gauche tab"><Link to='/avatar'><i className="small material-icons">person_outline</i>Avatar</Link></li>
    <li className="nav-gauche tab activ"><a href="#!"><i className="small material-icons">search</i>Informations</a></li>
    <li className="nav-gauche tab"><Link to="/formation" className="active"><i className="small material-icons">people_outline</i>Formations</Link></li>
    <li className="nav-gauche tab"><Link to="/techno"><i className="small material-icons">settings</i>Technologies</Link></li>
    <li className="nav-gauche tab"><a href="https://simplon.co/contact.html" target="_blank"><i className="small material-icons">person_outline</i>Contact</a></li>
  </div>
  <Link to="/" href="" className="btn-flat">Déconnexion</Link>
  </ul>

    <div id="test2" className="contener-global">
      <div className="contener-main">
      <div className="row contener-nav">
          <div className="col  end">
     <Link to="/" className="ret">  <i className="small material-icons">arrow_back</i> retour</Link>
</div>
<div className="col s3 end">
      <a href="#!" className="notif"><i className="small material-icons">notifications_none</i></a>
</div>
      </div>
        <div className="contener-carte">
          <div className="row">


          <h2>Informations personnelles</h2>
    <form className="col s5 gauche">
      <div className="row">
        <div className="input-field col s6">
          <input id="nom" type="text" className="validate"></input>
          <label htmlFor="nom">Nom</label>
        </div>
        <div className="input-field col s6">
          <input id="prenom" type="text" className="validate"></input>
          <label htmlFor="prenom">Prénom</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="annee" type="text" className="validate"></input>
          <label htmlFor="annee">Année de Formation</label>
        </div>
        <div className="input-field col s6">
          <input id="lieu" type="text" className="validate"></input>
          <label htmlFor="lieu">Lieu de Formation</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="occupation" type="text" className="validate"></input>
          <label htmlFor="occupation">Occupation</label>
        </div>
        <div className="input-field col s6">
          <input id="pays" type="text" className="validate"></input>
          <label htmlFor="pays">Pays</label>
        </div>
      </div>  
    </form>
    <form className="droite col s5">
      <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">person</i>
          <input id="mail" type="text" className="validate"></input>
          <label htmlFor="mail">Adresse email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">person</i>
          <input id="new_mail" type="text" className="validate"></input>
          <label htmlFor="new_mail">Nouvelle adresse mail</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">https</i>
          <input id="mdp" type="password" className="validate"></input>
          <label htmlFor="mdp">Mot de passe</label>
        </div>
      </div>  
      <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">https</i>
          <input id="newMdp" type="password" className="validate"></input>
          <label htmlFor="newMdp">Nouveau mot de passe</label>
        </div>
      </div>
    </form>
              
           
          </div>
          <div className="row">
        <h2>Description</h2>
        <div className="col s12">
            <form className="desc" method="" >
                <textarea placeholder="lorem bla bla"></textarea>
            </form>

        </div>
  </div>
  <div className="row">
      <div className="col s12 end">
      <a href="#!" className="btn-val">Enregistrer les modifications</a>
      </div>
  </div>
        </div>
      </div>
    </div>
  </div>
  );
  }

  export default UserList;