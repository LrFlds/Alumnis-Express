
import React, { FunctionComponent, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import img from '../../imgs/laura.png';
import User from '../../models/user';



function Nav(props: any) {
  const [user, setUserBis] = useState<User>();

  useEffect(() => {

   fetch('http://api.app.localhost:3001/user/connectedUser', {
     method: "GET",
     credentials:'include',
     headers: {
       Cookie: document.cookie,
     }
   })
   .then((response) => {
    return response.json()

   }).then((data) => {
    setUserBis(data)


   })
   }, []);



    return (

<div>

      <ul className="sidenav">
      <div id="ferme" className="closerespo">
         <span></span>
         <span></span>
     </div>
      <li>
        <div className="user-view row">
          <div className="contener-image">
          <a className="image-contener-sidebar" href="#user"><img src={"`${user.Picture}`"} /></a>
              </div>
              <span className="statut"></span>
          <a href="#name"><span className="white-text name col s12">Nom Prénom</span></a>
          <a href="#etat"><span className="white-text etat col ">en ligne</span></a>
        </div>
      </li>
      <div className="contener-nav">
        <li  className="nav-gauche tab"><Link to="/user/profil"><i
              className="small material-icons">person_outline</i>Profil</Link></li>
        <li className="nav-gauche tab"><a href=""><i className="small material-icons">chat_bubble_outline</i>Chat</a>
        </li>
        <li className="nav-gauche tab"><Link to="/user/annuaire" className="active" href="#test2"><i
              className="small material-icons">search</i>Annuaire</Link></li>
        <li className="nav-gauche tab"><Link to="/user/forum"><i className="small material-icons">people_outline</i>Forum</Link></li>
        <br />
        <li className="nav-gauche tab"><a href=""><i className="small material-icons">settings</i>Réglage</a></li>
      </div>
      <Link to="/user/login" href="" className="btn-flat">Déconnexion</Link>
    </ul>
    <div className="burger">
    <span></span>
    <span></span>
    <span></span>
</div>
</div>





    );
  }


  export default Nav;