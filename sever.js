const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const axios = require('axios');
app.use(express.json());

const teste = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Ta rodando `))

app.get('/test', async(req, res)=>{
  try {
    const {data} = await teste.get("/245");

    return res.send({palavra: data.abilities[1]})
  } catch (error) {
    
  }
})