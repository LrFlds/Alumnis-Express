import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import { Link } from 'react-router-dom';
import burger from '../js/modals/burger';
import Nav from '../js/props/navFunction';
import UserProfil from '../components/profil';
import getConnectedUser from '../js/fetchs/getConnectedUser';
import quentin from '../../src/imgs/quentin.png';
const UserList: FunctionComponent = () => {
    const [users, setUser] = useState<User[]>([]);

    useEffect(() => {
        async function getUser() {
            const user = await getConnectedUser()
            setUser(user)
        }

    }, []);

    return (
        <div>
        <Nav />
        <div id="test2" className="contener-global">
            <div className="contener-main">
               
                <div className="contener-carte">
                    <div className="row">
                        
                        <div className="contener-post">
                            <div className="contener-post">
                            <div className="card-image" >
                <div className="contener-image">
              <img src={`${quentin}`}/>
            </div>
        
            </div>
                              
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default UserList;





















