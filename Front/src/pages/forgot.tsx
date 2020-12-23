import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import {Link} from 'react-router-dom';
import modalF from '../js/modalForgot.js';
import img from '../imgs/illu-forgot.png';

const UserList: FunctionComponent = () => {
const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    modalF();
  }, []);

  return (
  <div>
    <div className="barre-un"></div>
    <div className="barre-deux"></div>
    <h1 className="plonplon">Simpl'<b>only</b></h1>
  <div className="englo">
    <div className="row">
  <div className="illus col s6 l6 m6">
  
  <img  src={img} />
  
  </div>
   <div className="contener-new">
    <form className="droites col s12">
      <h1>Réinitialiser votre mot de passe !</h1>
      <div className="row">
        <div className="input-field col s8">
        <i className="material-icons prefix">person</i>
          <input id="mail" type="text" className="validate"></input>
          <label htmlFor="mail">Adresse email</label>
        </div>
      </div>
      
       
      <div className="row">
        <div className="input-field col s8">
        <i className="material-icons prefix">https</i>
          <input id="newMdp" type="password" className="validate"></input>
          <label htmlFor="newMdp">Nouveau mot de passe</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8">
        <i className="material-icons prefix">https</i>
          <input id="mdp" type="password" className="validate"></input>
          <label htmlFor="mdp">Confirmez le nouveau mot de passe</label>
        </div>
      </div> 
      <div className="contener-btn col s8">
            <Link to="/user/login" className="btn retour modal-trigger" type="submit">Retour </Link>
      <Link to="/user/login"  className="trigger btn newMdp modal-trigger" type="submit">Enregistrer mon nouveau mot de passe </Link>
      </div>
    </form>
    </div>
           
</div>
</div>

<div id="modal4" className="modal Forgot">
    <div className="modal-content">
      <h4>Votre mot de passe a été réinitialisé !</h4>
      <p>Vous allez être redirigé dans peu de temps.</p>
  </div>
        </div>

      </div>

  );
  }

  export default UserList;