export default class Categorie {
    _id: number;
    Title: String;
    Sujet: Array<String>;
    Description:String;



    constructor(
        _id: number,
        Title: String ,
        Sujet: Array<String>,
        Description:String

    ) {
     // 3. Initialisation des propiétés
     this._id = _id;
     this.Title = Title;
     this.Sujet = Sujet ;
     this.Description = Description;
    }
   }
