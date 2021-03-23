import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import { Link } from 'react-router-dom';
import burger from '../js/modals/burger';
import Nav from '../js/props/navFunction';
import UserProfil from '../components/profil';
import getConnectedUser from '../js/fetchs/getConnectedUser';

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
                    <div className="row contener-nav">
                        <div className="col  end">
                            <Link to="/profil" className="panneau">Panneau d'aministration</Link>
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
                                <Link to="/forum" > <p>Accueil du forum</p> </Link>
                                <h1>Titre du topic</h1>
                            </div>
                            <div className="contener-post">
                                <Link to="/post"><div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glissé sur une banane</h1>
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
                                </Link>
                                <div className="contenue-post">
                                    <div className="contener-titre">
                                        <h1>Martine à glissé sur une banane</h1>
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
                                        <h1>Martine à glissé sur une banane</h1>
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
                                        <h1>Martine à glissé sur une banane</h1>
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
                                        <h1>Martine à glissé sur une banane</h1>
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
                                        <h1>Martine à glissé sur une banane</h1>
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
                                        <h1>Martine à glissé sur une banane</h1>
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
                                        <h1>Martine à glissé sur une banane</h1>
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