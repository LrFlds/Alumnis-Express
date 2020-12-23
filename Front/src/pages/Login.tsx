import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import Login from '../js/login.js';
import img from '../imgs/illu-acceuil.png';
import {Link} from 'react-router-dom';
import UserProfil from '../components/profil';

const UserList: FunctionComponent = () => {
const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
  Login();
  }, []);

  return (
  <div>
        <div className="acceuil">
    <div className="row">
        <div className="container">
        <div className="col l7 m12 container-bienvenue">
            <h1>BIENVENUE SUR <br /> <span>SIMPLONPLON</span></h1>
            <div className="container-illu">
                <img src={img} alt="" />
            </div>
        </div>

        <div className="col m12 l5">
            <div className="droite">
            <div className="suis">
                <h2>je suis :</h2>
                <div className="container-button ">
                    <span className="al">Simplonnien</span>
                    <span className="re">Recruteur</span>
                </div>
            </div>
            <form action="">
                <div className="box">
                
                <input id="mail" type="mail" name="mail" required></input>
                <label htmlFor="mail">Adresse Email</label>
            </div>
            <div className="box">
                
                <input id="pass" className="pass" type="password" name="passe" required></input>
                <label htmlFor="passe">Mot de passe </label>
            </div>
                <div className="container-oublie">
                     <Link to="/user/forgot">Mot de passe oublié ? </Link>
                 </div>
                <input id="sub" type="submit" value="connexion"></input>
            </form>
        </div>
    </div>
</div>
    </div>
</div>

<footer className="page-footer">
 
      <div className="row">
        <div className="col l4 offset-l2 s6">
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">à propos</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Conditions generales d’utilisation</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">nous contacter</a></li>
          </ul>
        </div>
        <div className="col l6 s6">
           <div className="container-picto">
               <a><i className="fab fa-facebook-square"></i></a>
               <a><i className="fab fa-instagram-square"></i></a>
               <a><i className="fab fa-twitter-square"></i></a>
               <a href=""><i className="fab fa-linkedin"></i></a>
           </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
     Simplon 2020
      </div>
      </div>
  </footer>
  </div>
  );
  }

  export default UserList;