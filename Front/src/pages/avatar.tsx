import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import {Link} from 'react-router-dom';
import UserProfil from '../components/profil';
import file from '../js/picture.js';

const UserList: FunctionComponent = () => {
const [users, setUser] = useState<User[]>([]);







  useEffect(() => {
  file();

  }, []);


  return (
  <div>
     <ul className="sidenav">
    <li><div className="user-view row">
    <div className="contener-image">
          <a className="image-contener-sidebar" href="#user"><img id="prof"  src="imgs/quentin.png" /> </a>
              </div> <span className="statut"></span>
      <a href="#name"><span className="white-text name col s12">Nom Prénom</span></a>
      <a href="#etat"><span className="white-text etat col">en ligne</span></a>
    </div></li>
    <div className="contener-nav">
    <li className="nav-gauche tab activ"><a><i className="small material-icons">person_outline</i>Avatar</a></li>
    <li className="nav-gauche tab"><Link to="/user/profil"><i className="small material-icons">search</i>Informations</Link></li>
    <li className="nav-gauche tab"><Link to="/user/formation" className=" active" href=""><i className="small material-icons">people_outline</i>Formations</Link></li>
    <li className="nav-gauche tab"><Link to="/user/techno"><i className="small material-icons">settings</i>Technologies</Link></li>
    <li className="nav-gauche tab"><a href="https://simplon.co/contact.html" target="_blank"><i className="small material-icons">person_outline</i>Contact</a></li>
  </div>
  <Link to="/user/login" href="" className="btn-flat">Déconnexion</Link>
  </ul>

    <div id="test2" className="contener-global">
      <div className="contener-main">
      <div className="row contener-nav">
          <div className="col  end">
     <Link to="/user/annuaire" className="ret">  <i className="small material-icons">arrow_back</i> retour</Link>
</div>
<div className="col s3 end">
      <a href="#!" className="notif"><i className="small material-icons">notifications_none</i></a>
</div>
      </div>
      <div className="contener-carte">
                        <div className="row">
                            <div className="avatar">
                                <h2>Avatar</h2>
                                <div className="contener-picture">
                                    <div className="contener-image">
                                    <img id="photo" src="imgs/quentin.png" />
                                    </div>
                                    <form action="#">
                                    <div className="file-field input-field">
                                    <div className="btn">
                                        <span id="up">parcourir ...</span>
                                        <input id="file" type="file"></input>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" placeholder="aucun fichier sélectionné"></input>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 end">
                                <a id="save" href="#!" className="btn-val">Enregistrer les modifications</a>
                            </div>
                        </div>
                    </div>
        
      </div>
    </div>
  </div>
  );
  }

  export default UserList;