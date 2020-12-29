import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import { Link } from 'react-router-dom';
import img from '../imgs/illu-forum.png';
import imgProf from '../imgs/laura.png';
import Nav from '../js/props/navFunction';
import burger from '../js/burger';
import close from '../js/close';
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
                            <img className="illuForum" src={img} alt="" />
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
                            <div className="ennoncer">
                                <h1>01</h1>
                                <p>Annonces &amp; infos</p>
                            </div>
                            <Link to="/user/postForum" className="contenue-annonce">
                                <div className="contener-titre">
                                    <h1>TITRE</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam maiores sint, quasi facilis exercitationem voluptatibus, assumenda quis culpa, dignissimos necessitatibus accusantium earum debitis tempora ex officiis minima voluptatum? Iste!</p>
                                    <div className="contener-lien">
                                        <a href="">sous forum</a>
                                        <a href="">sous forum</a>
                                    </div>
                                </div>
                                <div className="contener-number">
                                    <div className="sujet">
                                        <p>4</p>
                                        <span>sujets</span>
                                    </div>
                                    <div className="post">
                                        <p>4</p>
                                        <span>post</span>
                                    </div>
                                </div>
                                <div className="contener-info-post">
                                    <h1>titre du sujet</h1>
                                    <p>01/12/2020 8h30</p>
                                    <div className="contener-image-info">
                                        <img src={imgProf} alt="" />
                                    </div>
                                    <p>par <b>Pseudo</b></p>
                                </div>
                            </Link>

                        </div>
                        <div className="row">
                            <div className="ennoncer">
                                <h1>02</h1>
                                <p>Technologies</p>
                            </div>
                            <div className="contenue-annonce">
                                <div className="contener-titre">
                                    <h1>TITRE</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam maiores sint, quasi facilis exercitationem voluptatibus, assumenda quis culpa, dignissimos necessitatibus accusantium earum debitis tempora ex officiis minima voluptatum? Iste!</p>
                                    <div className="contener-lien">
                                        <a href="">sous forum</a>
                                        <a href="">sous forum</a>
                                    </div>
                                </div>
                                <div className="contener-number">
                                    <div className="sujet">
                                        <p>4</p>
                                        <span>sujets</span>
                                    </div>
                                    <div className="post">
                                        <p>4</p>
                                        <span>post</span>
                                    </div>
                                </div>
                                <div className="contener-info-post">
                                    <h1>titre du sujet</h1>
                                    <p>01/12/2020 8h30</p>
                                    <div className="contener-image-info">
                                        <img src={imgProf} alt="" />
                                    </div>
                                    <p>par <b>Pseudo</b></p>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="ennoncer">
                                <h1>03</h1>
                                <p>Recherche d'emploi</p>
                            </div>
                            <div className="contenue-annonce">
                                <div className="contener-titre">
                                    <h1>TITRE</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam maiores sint, quasi facilis exercitationem voluptatibus, assumenda quis culpa, dignissimos necessitatibus accusantium earum debitis tempora ex officiis minima voluptatum? Iste!</p>
                                    <div className="contener-lien">
                                        <a href="">sous forum</a>
                                        <a href="">sous forum</a>
                                    </div>
                                </div>
                                <div className="contener-number">
                                    <div className="sujet">
                                        <p>4</p>
                                        <span>sujets</span>
                                    </div>
                                    <div className="post">
                                        <p>4</p>
                                        <span>post</span>
                                    </div>
                                </div>
                                <div className="contener-info-post">
                                    <h1>titre du sujet</h1>
                                    <p>01/12/2020 8h30</p>
                                    <div className="contener-image-info">
                                        <img src={imgProf} alt="" />
                                    </div>
                                    <p>par <b>Pseudo</b></p>
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