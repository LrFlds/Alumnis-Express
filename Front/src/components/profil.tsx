import React, { FunctionComponent } from 'react';
import User from '../models/user';
import {Link} from 'react-router-dom';

type Props = {
    user : User,
    borderColor?: string;
};
const UserProfil: FunctionComponent <Props> = ({user}) => {
    return (
        <div>
             
                <div className="card col s6 m4" key={user.id} >
                <Link to={`/users/${user.id}`}>
                <div className="card-image" >
                    <div className="contener-image"> 
                  <img src={user.picture}/>
                </div>
                
                </div>
                <span className="card-title">{user.firstName} {user.name}</span>
                <span className="card-subTitle">{user.company}</span>
                <div className="card-content">
                  <p>{user.description}</p>
                </div>
                </Link>
                </div>
               
        </div>
    );
}

export default UserProfil;