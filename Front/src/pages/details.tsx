import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import User from '../models/user';
import Nav from '../js/props/navFunction';
import '../css/styles.css';
import burger from '../js/modals/burger';
import close from '../js/modals/close';
import links from '../js/functions/links';
import placeholder from '../js/functions/placeholder'
import back from '../js/functions/back'
import getUserByID from '../js/fetchs/getUserById';

type Params = { _id: string };

const UserDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {

    links()
    async function getUser() {
      const user = await getUserByID(match.params._id)
      setUser(user);
      placeholder();
    }
    getUser();




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
                <button onClick={back} className="ret"> <i className="small material-icons">arrow_back</i> retour</button>
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
                <div className="col  m12 l5">

                  <div className="contener-img">
                    <div className="contener-image">
                      <img id="profilPicture" src={`${user.Picture}`} />
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
                <div className="col m12 l7">
                  <div className="contener-message">

                    <li><a href="#!"><i className="small material-icons">chat_bubble_outline</i>Envoyer un message</a></li>
                  </div>

                  <div className="contener-parametres">
                    <div className="row">
                      <div className="col s6">
                        <h2 className="promo">Année de promo</h2>
                        <p className="annee">{user.Year[0]}</p>

                      </div>
                      <div className="col s6">
                        <h2>Lieu</h2>
                        <p className="ville"> {user.Fabric} </p>
                      </div>
                      <div className="col s12"></div>
                      <h2 className="titre-techno">Technologies
         </h2>
                      <div className="techno">
                        {user.Techno.map(techno => (
                          <span className="tech"> {techno} </span>
                        ))}


                      </div>
                      <div className="col s12"></div>
                      <h2>Me suivre
     </h2>
                      <div className="social">
                        <a href="" className='links'><i className="fab fa-github"></i> Github</a>
                        <a href="" className='links'><i className="fab fa-linkedin"></i> Linkedin</a>
                        <a href="" className='links'><i className="fas fa-user"></i>Portfolio</a>
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