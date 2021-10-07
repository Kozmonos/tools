var textToImgRouter = require('./routes/textToImg');

module.exports= (app)=>{
    app.use('/textToImg', textToImgRouter);
}