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
    <li className="nav-gauche tab "><Link to="/profil"><i className="small material-icons">search</i>Informations</Link></li>
    <li className="nav-gauche tab"><Link to="/formation" className="active"><i className="small material-icons">people_outline</i>Formations</Link></li>
    <li className="nav-gauche tab activ"><a><i className="small material-icons">settings</i>Technologies</a></li>
    <li className="nav-gauche tab"><a href="https://simplon.co/contact.html" ><i className="small material-icons">person_outline</i>Contact</a></li>
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
                            <div className="avatar">
                                <h2>Technologies</h2>
                                <div className="contener-picture">
                                <a href="#!" className="recherche modal-trigger"><i className="small material-icons">search</i></a>
                                    <div className="row">
                                        <div className="col s4">
                                    <div className='tech'>
                                        <p>Javascript</p>
                                    </div>
                                    </div>
                                    <div className="col s4">
                                    <div className='tech'>
                                        <p>Javascript</p>
                                    </div>
                                    </div>
                                    <div className="col s4">
                                    <div className='tech'>
                                        <p>Javascript</p>
                                    </div>
                                    </div>
                                    </div>
                                </div>
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