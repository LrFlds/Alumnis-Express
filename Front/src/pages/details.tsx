import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import User from '../models/user';
import Nav from '../js/props/nav';
import '../css/styles.css';
import burger from '../js/burger';
import close from '../js/close';



  
type Params = { _id: string };
  
const UserDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [user, setUser] = useState<User|null>(null);
  
  useEffect(() => {
    close();
    burger();
    
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
    
   <Nav />
     
     
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