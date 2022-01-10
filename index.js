const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // this is very important
const axios = require('axios');

app.get('/recettes', function (req, res) {
  const fetchUser1 = axios.get('https://tpnote-d015.restdb.io/rest/recettes',  {headers:
     { 'x-apikey': '1680e4fc77cb7ce11a34c4435cbb86fe40e14'
     }})
  .then(result => res.send(result.data))
  res.send('Hello World!')
})




app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})
