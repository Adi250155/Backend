import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      //can update the file name or replace it with some unique name 
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})