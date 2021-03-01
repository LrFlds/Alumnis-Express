import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import { Link } from 'react-router-dom';
import UserProfil from '../components/profil';
import NavProf from '../js/props/navProfFunction';
import back from '../js/functions/back'
import getConnectedUser from '../js/fetchs/getConnectedUser';
const UserList: FunctionComponent = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const user = await getConnectedUser()
      setUser(user);
    }
    getUser();
  }, []);

  return (
    <div>
      <NavProf />
      { user ? (

        <div id="test2" className="contener-global">
          <div className="contener-main">
            <div className="row contener-nav">
              <div className="col  end">
                <button onClick={back} className="ret"> <i className="small material-icons">arrow_back</i> retour</button>
              </div>
              <div className="col s3 end">
                <a href="#!" className="notif"><i className="small material-icons">notifications_none</i></a>
              </div>
            </div>
            <div className="contener-carte">
              <div className="row">


                <h2>Informations personnelles</h2>
                <form className="col s5 gauche">
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="nom" type="text" className="validate"></input>
                      <label htmlFor="nom">{user.Name}</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="prenom" type="text" className="validate"></input>
                      <label htmlFor="prenom">{user.FirstName}</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="annee" type="text" className="validate"></input>
                      <label htmlFor="annee">{user.Year[0]}</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="lieu" type="text" className="validate"></input>
                      <label htmlFor="lieu">{user.Fabric}</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="occupation" type="text" className="validate"></input>
                      <label htmlFor="occupation">{user.Company}</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="pays" type="text" className="validate"></input>
                      <label htmlFor="pays">France</label>
                    </div>
                  </div>
                </form>
                <form className="droite col s5">
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">person</i>
                      <input id="mail" type="text" className="validate"></input>
                      <label htmlFor="mail">Adresse email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">person</i>
                      <input id="new_mail" type="text" className="validate"></input>
                      <label htmlFor="new_mail">Nouvelle adresse mail</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">https</i>
                      <input id="mdp" type="password" className="validate"></input>
                      <label htmlFor="mdp">Mot de passe</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">https</i>
                      <input id="newMdp" type="password" className="validate"></input>
                      <label htmlFor="newMdp">Nouveau mot de passe</label>
                    </div>
                  </div>
                </form>


              </div>
              <div className="row">
                <h2>Description</h2>
                <div className="col s12">
                  <form className="desc" method="" >
                    <textarea placeholder={user.Description}></textarea>
                  </form>

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
      ) : (
          <h4 className="center">Echec du chargement du profil</h4>
        )}
    </div>
  );
}

export default UserList;