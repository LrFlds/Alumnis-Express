import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import User from '../models/user';
import '../css/styles.css';



  
type Params = { _id: string };
  
const UserDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [user, setUser] = useState<User|null>(null);
  
  useEffect(() => {
    fetch(`http://api.app.localhost:3001/user/profil/${match.params._id}`)
  .then((response) => {
    return response.json();
  }).then(user => {
    setUser(user) 
    console.log(user)
  })
  }
  , [match.params._id]);
    
  return (
    <div>
    
    <ul className="sidenav">
      <li>
        <div className="user-view row">
          <div className="contener-image">
          <a className="image-contener-sidebar" href="#user"><img  src="../imgs/quentin.png" /> </a>
              </div>
              <span className="statut"></span>
          <a href="#name"><span className="white-text name col s12">Nom Prénom</span></a>
          <a href="#etat"><span className="white-text etat col ">en ligne</span></a>
        </div>
      </li>
      <div className="contener-nav">
        <li className="nav-gauche tab"><Link to="/user/profil"><i
              className="small material-icons">person_outline</i>Profil</Link></li>
        <li className="nav-gauche tab"><a href="#!"><i className="small material-icons">chat_bubble_outline</i>Chat</a>
        </li>
        <li className="nav-gauche tab"><a className=" active" href="#test2"><i
              className="small material-icons">search</i>Annuaire</a></li>
        <li className="nav-gauche tab"><Link to="/user/forum"><i className="small material-icons">people_outline</i>Forum</Link></li>
        <br />
        <li className="nav-gauche tab"><a href="#!"><i className="small material-icons">settings</i>Réglage</a></li>
      </div>
      <Link to="/user/login" href="" className="btn-flat">Déconnexion</Link>
    </ul>
     
     
       { user ? (
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
           
         </div>

       <div className="row">
         <div className="col white s2"></div>
         <div className="col white s10 test">
             
           <div className="contener-profil">
             <div className="col s5">

             <div className="contener-img">
                 <div className="contener-image">
              <img src={`../${user.Picture}`} />
              </div>
              <span className="statut"></span>
              <div className="contener-text">
                <span className="card-title">{user.FirstName} {user.Name}
                </span>
                <span className="card-subTitle">{user.Company}</span>
              </div>
            </div>
            <div className="contener-description">
              <h2>Description</h2>
              <p>{user.Description}</p>   
            </div>
            </div>
            <div className="col s7">
             <div className="contener-message">
       
       <li><a href="#!"><i className="small material-icons">chat_bubble_outline</i>Envoyer un message</a></li>
     </div>

     <div className="contener-parametres">
       <div className="row">
         <div className="col s6">
           <h2 className="promo">Année de promo</h2>
           <p className="annee">{user.Year}</p>
           
         </div>
         <div className="col s6">
           <h2>Lieu</h2>
           <p className="ville"> {user.Fabric} </p>
         </div>
         <div className="col s12"></div>
         <h2 className="titre-techno">Technologies
         </h2>
       <div className="techno">
   
       <span className="tech"> {user.Techno[0]} </span>
       <span className="tech"> {user.Techno[1]} </span>
       <span className="tech"> {user.Techno[2]} </span>
       <span className="tech"> {user.Techno[2]} </span>
       <span className="tech"> {user.Techno[2]} </span>
       <span className="tech"> {user.Techno[2]} </span>

     </div>
     <div className="col s12"></div>
     <h2>Me suivre
     </h2>
   <div className="social">
   <a href="#"><i className="fab fa-github"></i> Github</a>
   <a href="#"><i className="fab fa-linkedin"></i> Linkedin</a>
   <a href="#"><i className="fas fa-user"></i>Portfolio</a>
 </div>
       </div>
     </div>
     </div>
             
           </div>
         </div>
       </div>
       </div>
      ) : (
        <h4 className="center">Aucun profil à afficher !</h4>
      )}
    </div>
  );
      }

export default UserDetail;