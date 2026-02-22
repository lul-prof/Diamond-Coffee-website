import multer from 'multer'

//middleware for handling multipart/form-data, which is primarily used for uploading files

//disk storage engine gives you full control on storing files to disk

const storage=multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})
const upload=multer({storage})

export default upload;