import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import {Link} from 'react-router-dom';
import UserProfil from '../components/profil';
import NavProf from '../js/props/navProfFunction';
import back from '../js/functions/back'
import getConnectedUser from '../js/fetchs/getConnectedUser';
const UserList: FunctionComponent = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const user =  await getConnectedUser()
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
                            <div className="avatar">
                                <h2>Technologies</h2>
                                <div className="contener-picture">
                                <a href="#!" className="recherche modal-trigger"><i className="small material-icons">search</i></a>
                                    <div className="row">
                                      {user.Techno.map(techno=>(
                                         <div className="col">
                                    <div className='tech'>
                                        <p>{techno}</p>
                                    </div>
                                    </div>
                                    
                                       ) )}
                                       <div className="col">
                                    <div className='tech'>
                                        <p>PHP</p>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className='tech'>
                                        <p>JavaScript</p>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className='tech'>
                                        <p>Angular</p>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className='tech'>
                                        <p>Angular</p>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className='tech'>
                                        <p>Angular</p>
                                    </div>
                                    </div>
                                    
                                    <div className="col">
                                    <div className='tech'>
                                        <p>Angular</p>
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
    ) : (
      <h4 className="center">Aucun profil à afficher !</h4>
    )}
  </div>
  );
  }

  export default UserList;