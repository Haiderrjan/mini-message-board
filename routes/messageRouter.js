const express = require('express')

const messageRouter = express.Router()

const dateUk = (new Date()).toLocaleDateString('en-UK')

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: dateUk
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: dateUk
  }
];





messageRouter.get('/', (req, res) => {
    res.render('message/index', {messages})
})



messageRouter.get('/new', (req,res) => {
    res.render('message/new')
})


messageRouter.post('/new', (req,res) => {
    // const messages = req.body;

    messages.push({text: req.body.message, user: req.body.user, added: dateUk})
    res.redirect('/message')
    
})

module.exports = messageRouter;