import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';


type Props = {
    categorie: any,
    index:number
};
const CategoryCard: FunctionComponent<Props> = ({ categorie, index }) => {
    return (
        <div className="row">
            <div className="ennoncer">
                <h1>0{index +1}</h1>
                <p>Annonces &amp; infos</p>
            </div>
            <Link to={`/postForum/${categorie.categorie._id}`} className="contenue-annonce">
                <div className="contener-titre">
                    <h1>{categorie.categorie.Title}</h1>
                    <p>{categorie.categorie.Description}</p>

                </div>
                <div className="contener-number">
                    <div className="sujet">
                        <p>{categorie.categorie.Sujet.length}</p>
                        <span>Sujets</span>
                    </div>
                    <div className="post">
                        <p>{categorie.numberOfPost}</p>
                        <span>Posts</span>
                    </div>
                </div>
                <div className="contener-info-post">
                    <h1>{categorie.lastSubject.Title}</h1>
                    <p>{categorie.lastSubject.Date}</p>
                    <div className="contener-image-info">
                        <img src={categorie.lastSubject.Author.Picture} alt="" />
                    </div>
                    <p>par <b>{categorie.lastSubject.Author.Name} {categorie.lastSubject.Author.FirstName} </b></p>
                </div>

            </Link>
        </div>

    );
}

export default CategoryCard;