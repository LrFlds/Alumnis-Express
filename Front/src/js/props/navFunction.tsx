import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../../models/user'
import { Link } from 'react-router-dom';
import logout from '../logout'


const Nav: FunctionComponent = () => {

    const [user, setUserBis] = useState<User | null>(null);
    useEffect(() => {

        fetch('http://api.app.localhost:3001/user/connectedUser', {
            method: "GET",
            credentials: 'include',
            headers: {
                Cookie: document.cookie,
            }
        })
            .then((response) => {
                return response.json()

            }).then((data) => {
                setUserBis(data)


            })
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <ul className="sidenav">
                        <div id="ferme" className="closerespo">
                            <span></span>
                            <span></span>
                        </div>
                        <li>
                            <div className="user-view row">
                                <div className="contener-image">
                                <Link to={`/user/getUser/${user._id}`} className="image-contener-sidebar" ><img src={`${user.Picture}`} /></Link>
                                </div>
                                <span className="statut"></span>
                                <Link to={`/user/getUser/${user._id}`}><span className="white-text name col s12">{user.Name}  {user.FirstName}</span></Link>
                                <span className="white-text etat col ">en ligne</span>
                            </div>
                        </li>
                        <div className="contener-nav">
                            <li className="nav-gauche tab"><Link to="/user/profil"><i
                                className="small material-icons">person_outline</i>Modifier son Profil</Link></li>
                            <li className="nav-gauche tab"><a href=""><i className="small material-icons">chat_bubble_outline</i>Chat</a>
                            </li>
                            <li className="nav-gauche tab"><Link to="/user/annuaire" className="active" href="#test2"><i
                                className="small material-icons">search</i>Annuaire</Link></li>
                            <li className="nav-gauche tab"><Link to="/user/forum"><i className="small material-icons">people_outline</i>Forum</Link></li>
                            <br />
                            <li className="nav-gauche tab"><a href=""><i className="small material-icons">settings</i>Réglage</a></li>
                        </div>
                        <button onClick={logout} className="btn-flat">Déconnexion</button>
                    </ul>
                    <div className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            ) : (
                    <h4 className="center">Aucun profil à afficher !</h4>
                )}
        </div>
    )
}

export default Nav