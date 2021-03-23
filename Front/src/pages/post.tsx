import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import { Link } from 'react-router-dom';
import burger from '../js/modals/burger';
import Nav from '../js/props/navFunction';
import UserProfil from '../components/profil';
import getConnectedUser from '../js/fetchs/getConnectedUser';
import quentin from '../../src/imgs/quentin.png';
import laura from '../../src/imgs/laura.png';
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

                <div className="back">
                    <Link to="/postForum">Revenir à tout les sujets</Link>
                </div>
               
                <div style={{marginTop: "80px", height: "auto" }} className="contener-carte">
                    <div className="row">
                        
                       
                            <div className="contener-postes">
                                <div className="card-image" >
                                    <div className="contener-images">
                                        <img src={`${quentin}`}/>
                                    </div>
                                    <div className="contener-textes">
                                        <h1>FOURNIVAL</h1>
                                        <p>Quentin</p>
                                    </div>
                                </div>
                                <div className="contener-ecriture">
                                    
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, dolor hic. Magnam quibusdam, dolore suscipit illum laboriosam necessitatibus. Eligendi expedita adipisci delectus nostrum, optio ab magnam provident ipsa. Repellat autem deleniti ab doloremque veniam ea soluta eaque provident obcaecati! Ex.
                                    adipisicing elit. Natus, dolor hic. Magnam quibusdam, dolore suscipit illum laboriosam necessitatibus. Eligendi expedita adipisci delectus nostrum, optio ab magnam provident ipsa. Repellat autem deleniti ab doloremque veniam ea soluta eaque provident obcaecati! Ex.
                                    adipisicing elit. Natus, dolor hic. Magnam quibusdam, dolore suscipit illum laboriosam necessitatibus. Eligendi expedita adipisci delectus nostrum, optio ab magnam provident ipsa. Repellat autem deleniti ab doloremque veniam ea soluta eaque provident obcaecati! Ex.
                                    adipisicing elit. Natus, dolor hic. Magnam quibusdam, dolore suscipit illum laboriosam necessitatibus. Eligendi expedita adipisci delectus nostrum, optio ab magnam provident ipsa. Repellat autem deleniti ab doloremque veniam ea soluta eaque provident obcaecati! Ex.
                                    </p>
                                    <h5>23/02/2021  : 18h10</h5>
                                </div>
                         
                            </div>

                       
                            <div className="contener-postes">
                                <div className="card-image" >
                                    <div className="contener-images">
                                        <img src={`${quentin}`}/>
                                    </div>
                                    <div className="contener-textes">
                                        <h1>FOURNIVAL</h1>
                                        <p>Quentin</p>
                                    </div>
                                </div>
                                <div className="contener-ecriture">
                                    
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, dolor hic. Magnam quibusdam, dolore suscipit illum laboriosam necessitatibus. Eligendi expedita adipisci delectus nostrum, optio ab magnam provident ipsa. Repellat autem deleniti ab doloremque veniam ea soluta eaque provident obcaecati! Ex.
                                    adipisicing elit. Natus, dolor hic. Magnam quibusdam, dolore suscipit illum laboriosam necessitatibus. Eligendi expedita adipisci delectus nostrum, optio ab magnam provident ipsa. Repellat autem deleniti ab doloremque veniam ea soluta eaque provident obcaecati! Ex.
                                    adipisicing elit. Natus, dolor hic. Magnam quibusdam, dolore suscipit illum laboriosam necessitatibus. Eligendi expedita adipisci delectus nostrum, optio ab magnam provident ipsa. Repellat autem deleniti ab doloremque veniam ea soluta eaque provident obcaecati! Ex.
                                    adipisicing elit. Natus, dolor hic. Magnam quibusdam, dolore suscipit illum laboriosam necessitatibus. Eligendi expedita adipisci delectus nostrum, optio ab magnam provident ipsa. Repellat autem deleniti ab doloremque veniam ea soluta eaque provident obcaecati! Ex.
                                    </p>
                                    <h5>23/02/2021  : 18h10</h5>
                                </div>
                         
                            </div>
                            
                        </div>
                        <div className="rep">
                                    
                        <div className="row">
                            <form className="col s12">
                            <div className="row">
                               
                               
                                <textarea data-length="2000" id="text" style={{height: "200px !important"}} placeholder="Votre message"></textarea>
                                <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons right">send</i></a>

                                
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    );
}

export default UserList;





















