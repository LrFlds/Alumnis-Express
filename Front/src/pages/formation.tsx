import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import { Link } from 'react-router-dom';
import modal from '../js/modalFormation.js';
import NavProf from '../js/props/navProfFunction';
import back from '../js/back'



const UserList: FunctionComponent = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    fetch('http://api.app.localhost:3001/user/connectedUser', {
      method: "GET",
      credentials: 'include',
      headers: {
        Cookie: document.cookie,
      }
    })
      .then((response) => {

        if (response.ok) {

          return response.json();

        } else if (response.status == 401) {
          window.location.href = "/user/redirect"

        }

      }).then(data => {
        setUser(data)

      })

  }, []);

  return (

    <div>
      <NavProf />
      {user ? (
        <div>
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
                  <div className="avatar">
                    <h2>Formation suivies</h2>
                    <div className="contener-picture">
                      <a data-target="modal1" className="trigger recherche" href="#modal1"><i
                        className="small material-icons ">search</i></a>
                      {user.TypeFormation.map(formation=>(
                          <div className='formation'>
                        <p>{formation}</p>
                      </div>
                      )

                      )}

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
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Ajouter une formation</h4>

              <div className="row">
                <div className="col s12">
                  <div className="row">
                    <div className="chips chips-placeholder"></div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green  stop">Annuler</a>
                <a href="#!" className="modal-close waves-effect waves-green  val">Valider</a>
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

export default UserList;