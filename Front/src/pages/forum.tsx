import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import Categorie from '../models/categorie';
import { Link } from 'react-router-dom';
import img from '../imgs/illu-forum.png';
import imgProf from '../imgs/laura.png';
import Nav from '../js/props/navFunction';
import burger from '../js/modals/burger';
import close from '../js/modals/close';
import CategoryCard from '../components/categorie'
import getConnectedUser from '../js/fetchs/getConnectedUser';
import getAllCategories from '../js/fetchs/getAllCategories';


const UserList: FunctionComponent = () => {
    const [users, setUser] = useState<User[]>([]);
    const [categories, setCategories] = useState<Categorie[]>([]);
    useEffect(() => {

        async function getUser() {
            const user = await getConnectedUser()
            setUser(user);
            close();
            burger();
        }
        getUser();
        async function getCategories() {
            const categories = await getAllCategories()
            setCategories(categories);
        };
        getCategories();
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

                        {categories.map(categorie => (

                            <CategoryCard key={categorie._id} categorie={categorie}/>
                        ))

                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;