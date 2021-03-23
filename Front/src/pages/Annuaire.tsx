import React, { FunctionComponent, useState, useEffect, Component } from 'react';
import User from '../models/user';
import UserProfil from '../components/profil';
import Nav from '../js/props/navFunction';
import filtres from '../js/modals/filtres';
import { Link } from 'react-router-dom';
import getAllUsers from '../js/fetchs/getAllUsers';
import search from '../js/functions/search';
import searchFilter from '../js/functions/searchFilters';
import clearFilter from '../js/functions/clearFilter';


const UserList: FunctionComponent = () => {


  const [users, setUsers] = useState<User[]>([]);
  const [tempUsers, setTempsUsers] = useState<User[]>([]);
  useEffect(() => {
    async function getUsers() {
      const users = await getAllUsers()
      setUsers(users)
      setTempsUsers(users)
      filtres();
      searchFilter(setUsers, users);
    }

    getUsers();

  }, []);

  return (
    <div >
      <Nav />

      <div id="test2" className="contener-global">
        <div id="slide-out" className="pop-up-filtre">
          <div className="contener-haut">
            <h1>FILTRES</h1>
            <div className="close modal-close">
              <span></span>
              <span className="deux"></span>
            </div>
          </div>
          {/* <form >
        <h2>Année de formation</h2>
        <p className="range-field">
      <input type="range" id="test5" min="0" max="100" />
    </p>
  </form> */}
          <form className="lieux" >
            <h2>Lieux de formations</h2>
            <div className="chips chips-autocomplete"></div>
            {/* <p>
      <label>
        <input type="checkbox" />
        <span>Calais</span>
      </label>

      <label>
        <input type="checkbox" />
        <span>Roubaix</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Boulogne-sur-mer</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Béthune</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Grenoble</span>
      </label>
    </p> */}
          </form>
          <form className="tech" action="#">
            <h2>Technologies</h2>
            <div className="chips chips-autocomplete-tech"></div>
            {/* <p>
      <label>
        <input type="checkbox" />
        <span>Css</span>
      </label>

      <label>
        <input type="checkbox" />
        <span>HTML</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>JAVA</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>JavaScript</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>C#</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Node.js</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>PHP</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>React</span>
      </label>
    </p> */}
          </form>

      <button onClick={()=>clearFilter()}>Réinitialiser les filtres</button>

        </div>
        <div className="contener-main">

          <div className="row contener-nav">
            <div className="col s4 end">
              <div className="container-search ">
                <div className="searchbox">
                  <input autoComplete="off" className="searchbox__input" onChange={() => search(setUsers, tempUsers)} type="text" id="search" />
                  <svg className="searchbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </div>
              </div>
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