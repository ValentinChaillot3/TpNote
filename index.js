const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // this is very important
const axios = require('axios')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportjwt = require('passport-jwt')
const bodyParser = require('body-parser')
const secret = 'shhhhh'
var cors = require('cors')


const JwtStrategy = passportjwt.Strategy
const ExtractJwt = passportjwt.ExtractJwt

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}


//app.use(bodyParser.urlencoded()); 
app.use(bodyParser.text("text/html"))
app.use(cors({
  origin: '*'
}));


function getUsers() {
  const fetchUser1 = axios.get('https://tpnote-d015.restdb.io/rest/utilisateurs',  {headers:
       { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
       }})
       return fetchUser1.login
}

passport.use(
  new JwtStrategy(jwtOptions, function(payload, next) {
    const user = users.find(user => user.login === payload.login)

    if (user) {
      next(null, user)
    } else {
      next(null, false)
    }
  })
)

app.use(passport.initialize())



//Route qui récupère la liste des recettes
app.get('/recettes', function (req, res) {
  res.header('Access-Control-Allow-Origin', 'https://upbui.csb.app')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  const fetchUser1 = axios.get('https://tpnote-d015.restdb.io/rest/recettes',  {headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
     }})

  .then(result => res.json({ recettes: result.data}))
})

//Route qui recupère une recettes
app.get('/recettes/:id', function (req, res) {
  res.header('Access-Control-Allow-Origin', 'https://upbui.csb.app')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  const fetchUser1 = axios.get('https://tpnote-d015.restdb.io/rest/recettes/'+ req.params.id,  {headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
     }})
  .then(result => res.json({ recette: result.data}))
})

//Route qui ajoute une recettes
//passport.authenticate('jwt', { session: false }),  
app.post('/recettes',function (req, res) {
  res.header('Access-Control-Allow-Origin', 'https://upbui.csb.app')
  res.header('Access-Control-Allow-Methods', 'POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  const nom = req.body.nom
  const ingredients = req.body.ingredients
  const obj = {     
    nom: nom,
    ingredients: ingredients
  }
  console.log(obj)
  const fetchUser1 = axios.post('https://tpnote-d015.restdb.io/rest/recettes',obj,{headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
   }})
  .then(result => res.json(result.data))
})

//Route qui supprime une recettes
//  passport.authenticate('jwt', { session: false }),
app.delete('/recettes/:id',  function (req, res) {
  res.header('Access-Control-Allow-Origin', 'https://upbui.csb.app')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
    const fetchUser1 = axios.delete('https://tpnote-d015.restdb.io/rest/recettes/'+ req.params.id,  {headers:
            { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
            }})
        .then(result => res.json(result.data))
})

//Route qui modifie une recettes
//  passport.authenticate('jwt', { session: false }),
app.put('/recettes/:id',  function (req, res) {
  res.header('Access-Control-Allow-Origin', 'https://upbui.csb.app')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  const nom = req.body.nom
  const ingredients = req.body.ingredients
  const obj = {     
    nom: nom,
    ingredients: ingredients
  }
    const fetchUser1 = axios.put('https://tpnote-d015.restdb.io/rest/recettes/' + req.params.id,obj,{headers:
            {
                'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
            }})
        .then(result => res.json(result.data))
})


//Route qui crée un compte
app.post('/utilisateurs', function (req, res) {
  const login = req.body.login
  const password = req.body.password
  const obj = {
    login: login,
    password: password
  }
  const fetchUser1 = axios.post('https://tpnote-d015.restdb.io/rest/utilisateurs',obj,{headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
   }})
  .then(result => res.json(result.data))
})

//Route qui permet de se connecter


app.post('/login', async function(req, res) {
  const response  = await axios.get('https://tpnote-d015.restdb.io/rest/utilisateurs',{headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
   }})
   const users = response.data
   console.log(users)
  const login = req.body.login
  const password = req.body.password
  console.log(login,password)

const user = users.find((user) =>{
  return user.login === login && user.password === password
})


if (!user) {
  res.json({error: 'error'})
  return
}

  const token = jwt.sign({login: login}, secret)
  res.json({jwt: token})


})

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})
