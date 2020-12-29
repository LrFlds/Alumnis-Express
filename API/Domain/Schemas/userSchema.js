const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    Name: { type: String, required: true },
    FirstName: { type: String, required: true },
    Email: { type: String, required: [true, "Email obligatoire"], unique: [true, "Mail déjà existant ..."], match: /^[a-zA-Z0-9._-][^<§!:/;,\|()"#`~&=+%µ*$£%>]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ },
    Password: { type: String, match: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,})$/ },
    ResetPass: { type: String},
    ExpirePass:{type: Date},
    Picture: { type: String },
    Cloudinary_id:{type: String},
    Fabric: { type: String, enum: ["Calais", "Boulogne-sur-mer","Béthune", "Roubaix"], required: true },
    Year: [{ type: Number, required: true }],// VOIR AVEC FRONT POUR MENU DEROULANT
    TypeFormation: [{ type: String, enum: ["Analyste cybersécurité", "Coder et déployer une application web simple","Concepteur développeur d'applications","Développeur web et web mobile","Développeur data","Objets connectés","Référent digital","Spécialisation DevOps - Administrer avec la méthode DevOps","Spécialisation DevOps - Développer avec la méthode DevOps","Spécialisation DevOps - La méthode","Technicien d’assistance en informatique","Technicien supérieur systèmes et réseaux","Artis - Culture et techniques du numérique","Cléa numérique - Les bases","Compétences numériques fondamentales","Hackeuses - Culture et techniques du numérique","Méthodes agiles de gestion et amorçage de projet","Parcours Welcode","Refugeeks","Réaliser un site internet à partir de WordPress"], required: true }],
    Techno: [{ type: String, required: true }],
    Description: { type: String },
    Company: { type: String },
    PostList: [{ type: Schema.Types.ObjectId, ref: 'PostModel' }], // VERIF LIEN
    Status: { type: Boolean },
    IsAdmin: { type: Boolean, default: "false" },
    Github:{type:String},
    Linkedin:{type:String},
    Portefolio:{type:String}
})

module.exports = UserSchema;