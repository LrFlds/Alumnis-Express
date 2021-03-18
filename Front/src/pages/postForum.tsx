import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import Categorie from '../models/categorie';
import Sujet from '../models/sujet';
import { RouteComponentProps,Link } from 'react-router-dom';
import burger from '../js/modals/burger';
import close from '../js/modals/close';
import Nav from '../js/props/navFunction';
import getConnectedUser from '../js/fetchs/getConnectedUser';
import getCategoryByID from '../js/fetchs/getCategorieSubject';
import SujetCard from '../components/sujet';

type Params = { _id: string };

const UserList: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    const [users, setUser] = useState<User[]>([]);
    const [sujets,setSujets] = useState<Sujet[]>([]);
    const [category,setCategory] = useState<Categorie|undefined>();
    useEffect(() => {
        async function getUser() {
            const user = await getConnectedUser()
            setUser(user)
        }
        async function getSujetByCategoryId(){
            const thePath = window.location.href;
            const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)
            const categorie = await getCategoryByID(lastItem);
            setCategory(categorie.message);
            setSujets(categorie.message.Sujet);
        }
        getUser();
        // close();
        // burger();

        getSujetByCategoryId();
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
                                <h1>{category? category.Title : "Le titre du topic"}</h1>
                            </div>
                            <div className="contener-post">
                            {sujets.length >0 ? sujets.map((sujet,index) =>(
                                   <SujetCard sujet={sujet} index={index}/>
                               )):<h1>Pas de sujet dans cette catégorie</h1>}
                            </div>

                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;