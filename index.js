const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = process.env.port || 9000;
const users = require('./users')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  
app.get('/', (req, res) => {
    res.send('<h1>Hello Node.js</h1>')
  })
  
  app.get('/user', (req, res) =>{
    res.json(users.findAll())
  })
  
  app.get('/user/:id', (req, res) =>{
    var id = req.params.id
    res.json(users.findById(id))
  })
  
  app.post('/newuser', (req, res) =>{
    var json = req.body
    res.send('Add new ' + json.name + ' Completed!')
  })
  
  app.get('/json',(req,res) =>{
    res.json({message:"thanakorn"});
  })
  
app.listen(9000, () =>{
    console.log('start server ' + port);
})

