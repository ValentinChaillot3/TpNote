const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // this is very important
const axios = require('axios')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportjwt = require('passport-jwt')
const secret = 'shhhhh'


const JwtStrategy = passportjwt.Strategy
const ExtractJwt = passportjwt.ExtractJwt

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}

function getUsers() {
  const fetchUser1 = axios.get('https://tpnote-d015.restdb.io/rest/utilisateurs',  {headers:
       { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
       }})
       return fetchUser1.login
}


const users = getUsers()


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

app.use(express.json())

//Route qui récupère la liste des recettes
app.get('/recettes', function (req, res) {
  const fetchUser1 = axios.get('https://tpnote-d015.restdb.io/rest/recettes',  {headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
     }})
  .then(result => res.json(result.data))
})

//Route qui recupère une recettes
app.get('/recettes/:id', function (req, res) {
  const fetchUser1 = axios.get('https://tpnote-d015.restdb.io/rest/recettes/'+ req.params.id,  {headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
     }})
  .then(result => res.json(result.data))
})

//Route qui ajoute une recettes
app.post('/recettes', function (req, res) {
  const obj = {
    nom: "test",
    ingredients: "test"
  }
  const fetchUser1 = axios.post('https://tpnote-d015.restdb.io/rest/recettes',obj,{headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
   }})
  .then(result => res.json(result.data))
})

//Route qui supprime une recettes
app.delete('/recettes/:id', function (req, res) {
    const fetchUser1 = axios.delete('https://tpnote-d015.restdb.io/rest/recettes/'+ req.params.id,  {headers:
            { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
            }})
        .then(result => res.json(result.data))
})

//Route qui modifie une recettes
app.put('/recettes/:id', function (req, res) {
    const obj = {
        nom: "test6",
        ingredients: "test"
    }
    const fetchUser1 = axios.put('https://tpnote-d015.restdb.io/rest/recettes/' + req.params.id,obj,{headers:
            {
                'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
            }})
        .then(result => res.json(result.data))
})


//Route qui crée un compte
app.post('/utilisateurs', function (req, res) {
  const obj = {
    login: "test",
    password: "test"
  }
  const fetchUser1 = axios.post('https://tpnote-d015.restdb.io/rest/utilisateurs',obj,{headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
   }})
  .then(result => res.json(result.data))
})

//Route qui permet de se connecter
/*
app.post('/login', function(req, res) {
  const fetchUser1 = axios.get('https://tpnote-d015.restdb.io/rest/utilisateurs',{headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
   }})
  .then(result => res.json(result.data))
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
*/

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})
