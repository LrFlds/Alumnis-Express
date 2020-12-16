import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import {Link} from 'react-router-dom';
import UserProfil from '../components/profil';
import NavProf from '../js/props/navProf';

const UserList: FunctionComponent = () => {
const [users, setUser] = useState<User[]>([]);

  useEffect(() => {

  }, []);

  return (
  <div>
    <NavProf />

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
        <div className="contener-carte">
        <div className="row">
                            <div className="avatar">
                                <h2>Technologies</h2>
                                <div className="contener-picture">
                                <a href="#!" className="recherche modal-trigger"><i className="small material-icons">search</i></a>
                                    <div className="row">
                                        <div className="col s4">
                                    <div className='tech'>
                                        <p>Javascript</p>
                                    </div>
                                    </div>
                                    <div className="col s4">
                                    <div className='tech'>
                                        <p>Javascript</p>
                                    </div>
                                    </div>
                                    <div className="col s4">
                                    <div className='tech'>
                                        <p>Javascript</p>
                                    </div>
                                    </div>
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
  </div>
  );
  }

  export default UserList;