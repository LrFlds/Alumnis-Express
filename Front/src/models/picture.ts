export default class Picture {
    _id: number;
    Picture: string;
    cloudinary_id : string;



    constructor(
        _id: number,
        Picture: string = "src" ,
        cloudinary_id : string ='nclzk,fl' ,



    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this._id = _id;
     this.Picture = Picture;
     this.cloudinary_id = cloudinary_id;

    }
   }
