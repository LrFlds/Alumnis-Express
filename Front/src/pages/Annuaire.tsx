import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import USERS from '../models/mock-user';
import UserProfil from '../components/profil';
import {Link} from 'react-router-dom';


const UserList: FunctionComponent = () => {


const [users, setUser] = useState<User[]>([]);

 useEffect(() => {
  
    fetch('http://localhost:3001/user/annuaire')
    .then(response => response.json())
    .then((users) => {
      setUser(users)
    });
    console.log(users)
  }, []);

  return (
  <div>
    <ul className="sidenav"> 
      <li>
        <div className="user-view row">
          <div className="contener-image">
          <a className="image-contener-sidebar" href="#user"><img  src="imgs/quentin.png" /> </a>
              </div>
              <span className="statut"></span>
          <a href="#name"><span className="white-text name col s12">Nom Prénom</span></a>
          <a href="#etat"><span className="white-text etat col ">en ligne</span></a>
        </div>
      </li>
      <div className="contener-nav">
        <li className="nav-gauche tab"><Link to="/profil"><i
              className="small material-icons">person_outline</i>Profil</Link></li>
        <li className="nav-gauche tab"><a href="#!"><i className="small material-icons">chat_bubble_outline</i>Chat</a>
        </li>
        <li className="nav-gauche tab activ"><a className="active" href="#test2"><i
              className="small material-icons">search</i>Annuaire</a></li>
        <li className="nav-gauche tab"><Link to="/forum"><i className="small material-icons">people_outline</i>Forum</Link></li>
        <br />
        <li className="nav-gauche tab"><a href="#!"><i className="small material-icons">settings</i>Réglage</a></li>
      </div>
      <Link to="/" href="" className="btn-flat">Déconnexion</Link>
    </ul>

    <div id="test2" className="contener-global">
      <div className="contener-main">
        <div className="row contener-nav">
          <div className="col s4 end">
            <a href="#!" className="recherche"><i className="small material-icons">search</i></a>
          </div>
          <div className="col s3 end">
            <a href="#!" className="notif"><i className="small material-icons">notifications_none</i></a>
            <a href="#modal1" className="filtres"><i className="small material-icons">filter_list</i>FILTRES</a>
          </div>
        </div>
        <div className="contener-carte">
          <div className="row">
            <div id="contenerCarte" className=" contener">
            {users.map( user => (
             <UserProfil key={user.id} user={user} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  }

  export default UserList;