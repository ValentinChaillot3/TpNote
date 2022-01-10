const express = require('express')
const app = express()
const axios = require('axios')

function getrecettes(req, res) {
  const fetchUser1 = axios.get('https://tpnote-d015.restdb.io/rest/recettes',  {headers:
     { 'x-apikey': '70f9440ef523be720647499c94730c2d429f8'
     }})
  .then(result => res.json(result.data))
}

module.exports = {
  getrecettes: getrecettes
}
