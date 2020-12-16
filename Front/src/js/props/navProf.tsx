import React, { FunctionComponent, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';



function NavProf(props: any) {
    return (
        <ul className="sidenav">
        <li><div className="user-view row">
        <div className="contener-image">
              <a className="image-contener-sidebar" href="#user"><img id="prof"  src="imgs/quentin.png" /> </a>
                  </div> <span className="statut"></span>
          <a href="#name"><span className="white-text name col s12">Nom Prénom</span></a>
          <a href="#etat"><span className="white-text etat col">en ligne</span></a>
        </div></li>
        <div className="contener-nav">
        <li className="nav-gauche tab"><Link to="/user/avatar"><i className="small material-icons">person_outline</i>Avatar</Link></li>
        <li className="nav-gauche tab"><Link to="/user/profil"><i className="small material-icons">search</i>Informations</Link></li>
        <li className="nav-gauche tab"><Link to="/user/formation" className=" active" href=""><i className="small material-icons">people_outline</i>Formations</Link></li>
        <li className="nav-gauche tab"><Link to="/user/techno"><i className="small material-icons">settings</i>Technologies</Link></li>
        <li className="nav-gauche tab"><a href="https://simplon.co/contact.html" target="_blank"><i className="small material-icons">person_outline</i>Contact</a></li>
      </div>
      <Link to="/user/login" href="" className="btn-flat">Déconnexion</Link>
      </ul>
    );
  }

  export default NavProf;