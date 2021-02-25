import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import { Link } from 'react-router-dom';
import burger from '../js/burger';
import close from '../js/close';
import Nav from '../js/props/navFunction';
import UserProfil from '../components/profil';

const UserList: FunctionComponent = () => {
    const [users, setUser] = useState<User[]>([]);

    useEffect(() => {

        fetch('http://api.app.localhost:3001/user/connectedUser', {
            method: "GET",
            credentials: 'include',
            headers: {
                Cookie: document.cookie,
            }
        })
            .then((response) => {

                if (response.ok) {

                    return response.json();

                } else if (response.status == 401) {
                    window.location.href = "/user/redirect"

                }
                close();
                burger();
            })
    }, []);

    return (
        <div>
            <Nav />

            <div id="test2" className="contener-global">
                <div className="contener-main">
                    <div className="row contener-nav">
                        <div className="col  end">
                            <Link to="/user/profil" className="panneau">Panneau d'aministration</Link>
                        </div>
                        <div className="col s3 end">
                            <a href="#!" className="notif"><i className="small material-icons">notifications_none</i></a>
                        </div>
                    </div>
                    <div className="contener-carte">
                        <div className="row">
                            <h4>Bienvenue sur le <b>forum</b></h4>
                            <img className="illuForum" src="imgs/illu-forum.png" alt="" />
                            <div className="carou">
                                <h1>News</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat suscipit aperiam </p>
                                <span className="un"></span>
                                <span className="deux"></span>
                                <span className="trois"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="contener-button">
                                <a href="">voir les nouveaux messages</a>
                                <a href="">marquer tout les forums comme lus</a>
                                <a href="">voir mes messages</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="ariane">
                                <Link to="/user/forum" > <p>Accueil du forum</p> </Link>
                                <h1>Titre du topic</h1>
                            </div>
                            <div className="contener-post">
                                <div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glisser sur une banane</h1>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="chiffre">
                                            <p> <b>10</b> Réponses</p>
                                            <p><b>100</b> Vues</p>
                                        </div>
                                        <div className="createur">
                                            <p>Crée par <b>Speudo</b> </p>
                                        </div>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="datePost">
                                            <p>Aujourd'hui à 10h15</p>

                                        </div>
                                        <div className="lastRep">
                                            <p>Posté par <b>Speudo</b> </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glisser sur une banane</h1>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="chiffre">
                                            <p> <b>10</b> Réponses</p>
                                            <p><b>100</b> Vues</p>
                                        </div>
                                        <div className="createur">
                                            <p>Crée par <b>Speudo</b> </p>
                                        </div>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="datePost">
                                            <p>Aujourd'hui à 10h15</p>

                                        </div>
                                        <div className="lastRep">
                                            <p>Posté par <b>Speudo</b> </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glisser sur une banane</h1>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="chiffre">
                                            <p> <b>10</b> Réponses</p>
                                            <p><b>100</b> Vues</p>
                                        </div>
                                        <div className="createur">
                                            <p>Crée par <b>Speudo</b> </p>
                                        </div>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="datePost">
                                            <p>Aujourd'hui à 10h15</p>

                                        </div>
                                        <div className="lastRep">
                                            <p>Posté par <b>Speudo</b> </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glisser sur une banane</h1>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="chiffre">
                                            <p> <b>10</b> Réponses</p>
                                            <p><b>100</b> Vues</p>
                                        </div>
                                        <div className="createur">
                                            <p>Crée par <b>Speudo</b> </p>
                                        </div>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="datePost">
                                            <p>Aujourd'hui à 10h15</p>

                                        </div>
                                        <div className="lastRep">
                                            <p>Posté par <b>Speudo</b> </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glisser sur une banane</h1>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="chiffre">
                                            <p> <b>10</b> Réponses</p>
                                            <p><b>100</b> Vues</p>
                                        </div>
                                        <div className="createur">
                                            <p>Crée par <b>Speudo</b> </p>
                                        </div>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="datePost">
                                            <p>Aujourd'hui à 10h15</p>

                                        </div>
                                        <div className="lastRep">
                                            <p>Posté par <b>Speudo</b> </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glisser sur une banane</h1>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="chiffre">
                                            <p> <b>10</b> Réponses</p>
                                            <p><b>100</b> Vues</p>
                                        </div>
                                        <div className="createur">
                                            <p>Crée par <b>Speudo</b> </p>
                                        </div>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="datePost">
                                            <p>Aujourd'hui à 10h15</p>

                                        </div>
                                        <div className="lastRep">
                                            <p>Posté par <b>Speudo</b> </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glisser sur une banane</h1>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="chiffre">
                                            <p> <b>10</b> Réponses</p>
                                            <p><b>100</b> Vues</p>
                                        </div>
                                        <div className="createur">
                                            <p>Crée par <b>Speudo</b> </p>
                                        </div>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="datePost">
                                            <p>Aujourd'hui à 10h15</p>

                                        </div>
                                        <div className="lastRep">
                                            <p>Posté par <b>Speudo</b> </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glisser sur une banane</h1>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="chiffre">
                                            <p> <b>10</b> Réponses</p>
                                            <p><b>100</b> Vues</p>
                                        </div>
                                        <div className="createur">
                                            <p>Crée par <b>Speudo</b> </p>
                                        </div>
                                    </div>
                                    <div className="contener-stats">
                                        <div className="datePost">
                                            <p>Aujourd'hui à 10h15</p>

                                        </div>
                                        <div className="lastRep">
                                            <p>Posté par <b>Speudo</b> </p>
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