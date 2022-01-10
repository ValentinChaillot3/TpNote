const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // this is very important
const axios = require('axios')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportjwt = require('passport-jwt')

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


//Route qui permet de se connecter


app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})
