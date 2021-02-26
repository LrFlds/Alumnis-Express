import React, { FunctionComponent, useState, useEffect, Component } from 'react';
import User from '../models/user';
import UserProfil from '../components/profil';
import Nav from '../js/props/navFunction';
import burger from '../js/modals/burger';
import close from '../js/modals/close';
import { Link } from 'react-router-dom';
import getAllUsers from '../js/fetchs/getAllUsers';
import search from '../js/functions/search';



const UserList: FunctionComponent = () => {


  const [users, setUsers] = useState<User[]>([]);
  const [tempUsers,setTempsUsers] = useState<User[]>([]);
  useEffect(() => {
    async function getUsers() {
      const users = await getAllUsers()
      setUsers(users)
      setTempsUsers(users)
      burger();
      close();
    }

    getUsers();

  }, []);

  return (
    <div>
      <Nav />

      <div id="test2" className="contener-global">
        <div className="contener-main">
          <div className="row contener-nav">
            <div className="col s4 end">
              <a href="#!" className="recherche"><i className="small material-icons">search</i></a>
              <input onChange={()=>search(users,setUsers,tempUsers)} type="text" id="search"/>
            </div>
            <div className="col s3 end">
              <a href="#!" className="notif"><i className="small material-icons">notifications_none</i></a>
              <a href="#modal1" className="filtres"><i className="small material-icons">filter_list</i>FILTRES</a>
            </div>
          </div>
          <div className="contener-carte">
            <div className="row">
              <div id="contenerCarte" className=" contener">
                {users.map(user => (

                  <UserProfil key={user._id} user={user} />

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