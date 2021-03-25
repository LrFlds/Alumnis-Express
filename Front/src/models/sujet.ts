export default class Sujet {
    _id: number;
    TitleSujet: String;
    Post: Array<String>;
    Author:String;



    constructor(
        _id: number,
        TitleSujet: String ,
        Post: Array<String>,
        Author:String

    ) {
     // 3. Initialisation des propiétés
     this._id = _id;
     this.TitleSujet = TitleSujet;
     this.Post = Post ;
     this.Author =Author;
    }
   }
