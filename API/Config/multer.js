const multer = require('multer');
const path = require('path');
const sharp = require('sharp');

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        sharp(ext).resize(2000)
        if(ext !==".jpg" && ext !==".jpeg" && ext !==".png"){
            cb(new Error("Le type de fichier n'est pas supporté"), false);
            return;
        }
        cb(null, true)
    }
});


