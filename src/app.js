import express from 'express'

const app = express()
app.use(express.json())


 const selecoes = [
       { id: 1, selecao: 'Brasil', grupo: 'G'},
       { id: 1, selecao: 'França', grupo: 'G'},
       { id: 1, selecao: 'Argentina', grupo: 'G'},
       { id: 1, selecao: 'Alemanha', grupo: 'G'},
 ]

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/selecoes",(req,  res) => {
    res.status(200).send(selecoes)
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrata com sucesso!')
})
export default app