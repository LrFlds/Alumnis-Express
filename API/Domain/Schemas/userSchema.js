const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new User ({
    Name: { type: String, required: true },
    FirstName: { type: String, required: true },
    Email: { type: String, required: [true, "Email obligatoire"], unique: [true, "Mail déjà existant ..."], match: /^[a-zA-Z0-9._-][^<§!:/;,\|()"#`~&=+%µ*$£%>]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ },
    Password: { type: String, match: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,})$/ },
    Picture: { type: String }, // A MODIFIER
    Fabric: { type: String, enum: ["Liste à définir", "Liste à définir"], required: true },
    Year: [{ type: Number, required: true }],// VOIR AVEC FRONT POUR MENU DEROULANT
    TypeFormation: [{ type: String, enum: ["liste à définir", "liste à définir"], required: true }],
    Techno: [{ type: String, required: true }],
    Description: { type: String }, // DESCRIPTION VIDEO A VOIR
    Company: { type: String },
    PostList: [{ type: Schema.Types.ObjectId, ref: 'PostModel' }], // VERIF LIEN
    Status: { type: Boolean, required: true },
    IsAdmin: { type: Boolean, default: "false"  },
})

module.exports = UserSchema;