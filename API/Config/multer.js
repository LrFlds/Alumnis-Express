const multer = require('multer');

const MIME_TYPES= {
    'image/jpg':'jpg',
    'image/jpeg':'jpeg',
    'image/png':'png'
};
//const storage = contient la logique pour indiquer à multer ou enregistrer les fichier entrant 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {// destination sert a enregistrer les fivhiers entrant dans le dossier images
        callback(null, destination)
    }, 
    filename: (req, file, callback) => {//indique à multer d'utiliser le nom d'origine 
        const name = file.originalname.split(' ').join('_');//remplace les espaces par des _
        const extension = MIME_TYPES[file.mimetype];//constante dictionnaire de type MIME pour résoudre l'extension de fichier appropriée 
        callback(null, name + Date.now() + '.' + extension);//ajout d'un timestamp
    }
});

module.exports = multer({storage: storage}).single('image')//single gére uniquement les téléchargements de fichiers image