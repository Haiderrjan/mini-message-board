const express = require('express');
const app = express();
const port = 3000;
const path = require('node:path')
const {body, validationRessult} = require('express-validator')


const messageRouter = require('./routes/messageRouter')



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))






app.get('/', (req,res) => {
    res.send('hello')
})



app.use('/message', messageRouter);

app.listen(port,() => {
    console.log(`listening on port ${port}`);
})


