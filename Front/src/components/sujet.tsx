import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';


type Props = {
    sujet: any,
    index: number
};
const SujetCard: FunctionComponent<Props> = ({ sujet, index }) => {
    return (
        <Link to="" className="contenue-post">
            <div className="contener-titre">
                <h1>{sujet.TitleSujet}</h1>
            </div>
            <div className="contener-stats">
                <div className="chiffre">
                    <p> <b>{sujet.Post.length}</b> Réponse(s)</p>
                    {/* <p><b>100</b> Vues</p> */}
                </div>
                <div className="createur">
                    <p>Crée par <b>{sujet.Author.Name} {sujet.Author.FirstName}</b> </p>
                </div>
            </div>
            <div className="contener-stats">
                <div className="datePost">
                    <p>{sujet.Post.length > 0 ? "Publié le " + sujet.Post[sujet.Post.length - 1].Date : ""}</p>

                </div>
                <div className="lastRep">
                    <p>{sujet.Post.length > 0 ? "Posté par" : ""}  <b>{sujet.Post.length > 0 ? sujet.Post[sujet.Post.length - 1].Author.Name : ""} {sujet.Post.length > 0 ? sujet.Post[sujet.Post.length - 1].Author.FirstName : ""}</b> </p>
                </div>
            </div>

        </Link>
    );
}

export default SujetCard;