import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import {Link} from 'react-router-dom';
import modal from '../js/modalFormation.js';
import NavProf from '../js/props/navProf';




const UserList: FunctionComponent = () => {
  
     
const [users, setUser] = useState<User[]>([]);

    useEffect(() => {
    modal();
   
    }, []);

    return (
        
    <div>
      
       <NavProf />
        <div id="test2" className="contener-global">
            <div className="contener-main">
                <div className="row contener-nav">
                    <div className="col  end">
                        <Link to="/user/annuaire" className="ret"> <i className="small material-icons">arrow_back</i> retour</Link>
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

                                <div className='formation'>
                                    <p>Apple Fondation</p>
                                </div>
                                <div className='formation'>
                                    <p>Développeur web et web mobile</p>
                                </div>
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
    );
    }

    export default UserList;