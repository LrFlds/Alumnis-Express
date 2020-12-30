import React, { FunctionComponent, useState, useEffect, Component } from 'react';
import User from '../models/user';
import UserProfil from '../components/profil';
import Nav from '../js/props/navFunction';
import burger from '../js/burger';
import close from '../js/close';
import {Link} from 'react-router-dom';
import img from '../imgs/laura.png';




const UserList: FunctionComponent = () => {


const [users, setUser] = useState<User[]>([]);

 useEffect(() => {


  fetch('http://api.app.localhost:3001/user/annuaire', {
    method: "GET",
    credentials:'include',
    headers: {
      Cookie: document.cookie,
    }
  })
  .then((response) => {
    if(response.ok){
      return response.json();
    }else if(response.status == 401){
      window.location.href= "/user/redirect"
    }
  }).then((users) => {
    setUser(users)
      burger();
      close();
  })
  }, []);

  return (
  <div>
   <Nav />

    <div id="test2" className="contener-global">
      <div className="contener-main">
        <div className="row contener-nav">
          <div className="col s4 end">
            <a href="#!" className="recherche"><i className="small material-icons">search</i></a>
          </div>
          <div className="col s3 end">
            <a href="#!" className="notif"><i className="small material-icons">notifications_none</i></a>
            <a href="#modal1" className="filtres"><i className="small material-icons">filter_list</i>FILTRES</a>
          </div>
        </div>
        <div className="contener-carte">
          <div className="row">
            <div id="contenerCarte" className=" contener">
            {users.map( user => (

             <UserProfil key={user._id} user={user}  />

            ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
  }

  export default UserList;