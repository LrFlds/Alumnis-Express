import React, { FunctionComponent } from 'react';
import img from '../imgs/laura.png';
import User from '../models/user';
import {Link} from 'react-router-dom';

type Props = {
    user : any,
    borderColor?: string;
};
const UserProfil: FunctionComponent <Props> = ({user}) => {
    return (
        <div>

                <div className="card col s12 m6 l4" key={user._id} >
                <Link to={`/user/getUser/${user._id}`}>
                <div className="card-image" >
                    <div className="contener-image">
                  <img src={user.Picture}/>
                </div>

                </div>
                <span className="card-title">{user.FirstName} {user.Name}</span>
                <span className="card-subTitle">{user.Company}</span>
                <div className="card-content">
                  <p>{user.Description}</p>
                </div>
                </Link>
                </div>

        </div>
    );
}

export default UserProfil;