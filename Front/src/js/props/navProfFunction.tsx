import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../../models/user'
import { Link } from 'react-router-dom';


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
                if(response.ok){

                    return response.json();

                  }else if(response.status == 401){
                    window.location.href= "/redirect"

                  }

            }).then((data) => {
                setUserBis(data)


            })
    }, []);

    return (
        <div>
            {user ? (
               <ul className="sidenav">
               <li><div className="user-view row">
               <div className="contener-image">
                     <Link className="image-contener-sidebar" to={`/getUser/${user._id}`}><img id="prof"  src={`${user.Picture}`} /> </Link>
                         </div> <span className="statut"></span>
                 <Link to={`/getUser/${user._id}`}><span className="white-text name col s12">{user.Name}  {user.FirstName}</span></Link>
                 <a href="#etat"><span className="white-text etat col">en ligne</span></a>
               </div></li>
               <div className="contener-nav">
               <li className="nav-gauche tab"><Link to="/avatar"><i className="small material-icons">person_outline</i>Avatar</Link></li>
               <li className="nav-gauche tab"><Link to="/profil"><i className="small material-icons">search</i>Informations</Link></li>
               <li className="nav-gauche tab"><Link to="/formation" className=" active" href=""><i className="small material-icons">people_outline</i>Formations</Link></li>
               <li className="nav-gauche tab"><Link to="/techno"><i className="small material-icons">settings</i>Technologies</Link></li>
               <li className="nav-gauche tab"><a href="https://simplon.co/contact.html" target="_blank"><i className="small material-icons">person_outline</i>Contact</a></li>
             </div>
             <Link to="/" href="" className="btn-flat">Déconnexion</Link>
             </ul>
            ) : (
                    <h4 className="center">Aucun profil à afficher !</h4>
                )}
        </div>
    )
}

export default Nav