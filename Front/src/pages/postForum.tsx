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
        <li className="nav-gauche tab"><Link to="/" className="active" ><i
              className="small material-icons">search</i>Annuaire</Link></li>
        <li className="nav-gauche tab activ"><a href="#!"><i className="small material-icons">people_outline</i>Forum</a></li>
        <br />
        <li className="nav-gauche tab"><a href="#!"><i className="small material-icons">settings</i>Réglage</a></li>
      </div>
      <Link to="/" href="" className="btn-flat">Déconnexion</Link>
    </ul>

    <div id="test2" className="contener-global">
      <div className="contener-main">
      <div className="row contener-nav">
          <div className="col  end">
     <Link to="/profil" className="panneau">Panneau d'aministration</Link>
</div>
<div className="col s3 end">
      <a href="#!" className="notif"><i className="small material-icons">notifications_none</i></a>
</div>
      </div>
        <div className="contener-carte">
        <div className="row">
            <h4>Bienvenue sur le <b>forum</b></h4>   
            <img className="illuForum" src="imgs/illu-forum.png" alt=""/> 
            <div className="carou">
                <h1>News</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat suscipit aperiam </p>
                <span className="un"></span>
                <span className="deux"></span>
                <span className="trois"></span>
            </div>
            </div>
            <div className="row">
            <div className="contener-button">
                <a href="">voir les nouveaux messages</a>
                <a href="">marquer tout les forums comme lus</a>
                <a href="">voir mes messages</a>
            </div>
            </div>
            <div className="row">
               <div className="ariane">
                   <Link to="/forum" > <p>Accueil du forum</p> </Link>
                   <h1>Titre du topic</h1>
               </div>
               <div className="contener-post">
                <div className="contenue-post">
                    <div className="contener-titre">
                        <h1>Martine à glisser sur une banane</h1>
                    </div> 
                    <div className="contener-stats">
                            <div className="chiffre">
                                <p> <b>10</b> Réponses</p>
                                <p><b>100</b> Vues</p>
                            </div>
                            <div className="createur">
                                <p>Crée par <b>Speudo</b> </p>
                            </div>
                    </div>
                    <div className="contener-stats">
                            <div className="datePost">
                                <p>Aujourd'hui à 10h15</p>
                                
                            </div>
                            <div className="lastRep">
                                <p>Posté par <b>Speudo</b> </p>
                            </div>
                    </div>
                   
                </div>
                <div className="contenue-post">
                    <div className="contener-titre">
                        <h1>Martine à glisser sur une banane</h1>
                    </div> 
                    <div className="contener-stats">
                            <div className="chiffre">
                                <p> <b>10</b> Réponses</p>
                                <p><b>100</b> Vues</p>
                            </div>
                            <div className="createur">
                                <p>Crée par <b>Speudo</b> </p>
                            </div>
                    </div>
                    <div className="contener-stats">
                            <div className="datePost">
                                <p>Aujourd'hui à 10h15</p>
                                
                            </div>
                            <div className="lastRep">
                                <p>Posté par <b>Speudo</b> </p>
                            </div>
                    </div>
                   
                </div>
                <div className="contenue-post">
                    <div className="contener-titre">
                        <h1>Martine à glisser sur une banane</h1>
                    </div> 
                    <div className="contener-stats">
                            <div className="chiffre">
                                <p> <b>10</b> Réponses</p>
                                <p><b>100</b> Vues</p>
                            </div>
                            <div className="createur">
                                <p>Crée par <b>Speudo</b> </p>
                            </div>
                    </div>
                    <div className="contener-stats">
                            <div className="datePost">
                                <p>Aujourd'hui à 10h15</p>
                                
                            </div>
                            <div className="lastRep">
                                <p>Posté par <b>Speudo</b> </p>
                            </div>
                    </div>
                   
                </div>
                <div className="contenue-post">
                    <div className="contener-titre">
                        <h1>Martine à glisser sur une banane</h1>
                    </div> 
                    <div className="contener-stats">
                            <div className="chiffre">
                                <p> <b>10</b> Réponses</p>
                                <p><b>100</b> Vues</p>
                            </div>
                            <div className="createur">
                                <p>Crée par <b>Speudo</b> </p>
                            </div>
                    </div>
                    <div className="contener-stats">
                            <div className="datePost">
                                <p>Aujourd'hui à 10h15</p>
                                
                            </div>
                            <div className="lastRep">
                                <p>Posté par <b>Speudo</b> </p>
                            </div>
                    </div>
                   
                </div>
                <div className="contenue-post">
                    <div className="contener-titre">
                        <h1>Martine à glisser sur une banane</h1>
                    </div> 
                    <div className="contener-stats">
                            <div className="chiffre">
                                <p> <b>10</b> Réponses</p>
                                <p><b>100</b> Vues</p>
                            </div>
                            <div className="createur">
                                <p>Crée par <b>Speudo</b> </p>
                            </div>
                    </div>
                    <div className="contener-stats">
                            <div className="datePost">
                                <p>Aujourd'hui à 10h15</p>
                                
                            </div>
                            <div className="lastRep">
                                <p>Posté par <b>Speudo</b> </p>
                            </div>
                    </div>
                   
                </div>
                <div className="contenue-post">
                    <div className="contener-titre">
                        <h1>Martine à glisser sur une banane</h1>
                    </div> 
                    <div className="contener-stats">
                            <div className="chiffre">
                                <p> <b>10</b> Réponses</p>
                                <p><b>100</b> Vues</p>
                            </div>
                            <div className="createur">
                                <p>Crée par <b>Speudo</b> </p>
                            </div>
                    </div>
                    <div className="contener-stats">
                            <div className="datePost">
                                <p>Aujourd'hui à 10h15</p>
                                
                            </div>
                            <div className="lastRep">
                                <p>Posté par <b>Speudo</b> </p>
                            </div>
                    </div>
                   
                </div>
                <div className="contenue-post">
                    <div className="contener-titre">
                        <h1>Martine à glisser sur une banane</h1>
                    </div> 
                    <div className="contener-stats">
                            <div className="chiffre">
                                <p> <b>10</b> Réponses</p>
                                <p><b>100</b> Vues</p>
                            </div>
                            <div className="createur">
                                <p>Crée par <b>Speudo</b> </p>
                            </div>
                    </div>
                    <div className="contener-stats">
                            <div className="datePost">
                                <p>Aujourd'hui à 10h15</p>
                                
                            </div>
                            <div className="lastRep">
                                <p>Posté par <b>Speudo</b> </p>
                            </div>
                    </div>
                   
                </div>
                <div className="contenue-post">
                    <div className="contener-titre">
                        <h1>Martine à glisser sur une banane</h1>
                    </div> 
                    <div className="contener-stats">
                            <div className="chiffre">
                                <p> <b>10</b> Réponses</p>
                                <p><b>100</b> Vues</p>
                            </div>
                            <div className="createur">
                                <p>Crée par <b>Speudo</b> </p>
                            </div>
                    </div>
                    <div className="contener-stats">
                            <div className="datePost">
                                <p>Aujourd'hui à 10h15</p>
                                
                            </div>
                            <div className="lastRep">
                                <p>Posté par <b>Speudo</b> </p>
                            </div>
                    </div>
                   
                </div>
                </div>
                
            </div>
            

       
          
 
        </div>
      </div>
    </div>
  </div>
  );
  }

  export default UserList;