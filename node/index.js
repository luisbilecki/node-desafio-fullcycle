const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'desafio'
}
const connection = mysql.createConnection(dbConfig)

const handleIndex = async (_, res) => {
  connection.query(
    'SELECT * FROM people',
    function(_, results, _) {
      const texts = [
        '<h1>Full Cycle Rocks!</h1>',
        '<br>',
        '<ul>'
      ]

      for (let i = 0; i < results.length; i++) {
        const row = results[i]
        texts.push(`<li>${row.name}</li>`)
      }

      texts.push('</ul>')

      res.send(texts.join(''))
    }
  )
}
app.get('/', handleIndex)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
