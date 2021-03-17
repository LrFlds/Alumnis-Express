import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';


type Props = {
    categorie: any,
};
const CategoryCard: FunctionComponent<Props> = ({ categorie }) => {
    return (
        <div className="row">
            <div className="ennoncer">
                <h1>01</h1>
                <p>Annonces &amp; infos</p>
            </div>
            <Link to={`/postForum/${categorie._id}`} className="contenue-annonce">
                <div className="contener-titre">
                    <h1>{categorie.Title}</h1>
                    <p>{categorie.Description}</p>

                </div>
                <div className="contener-number">
                    <div className="sujet">
                        <p>{categorie.Sujet.length}</p>
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
                        <img alt="" />
                    </div>
                    <p>par <b>Pseudo</b></p>
                </div>

            </Link>
        </div>

    );
}

export default CategoryCard;