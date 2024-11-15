import express from 'express'

const app = express()
app.use(express.json())


 const selecoes = [
       { id: 1, selecao: 'Brasil', grupo: 'G'},
       { id: 2, selecao: 'França', grupo: 'G'},
       { id: 3, selecao: 'Argentina', grupo: 'G'},
       { id: 4, selecao: 'Alemanha', grupo: 'G'},
 ]

 function searchSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id ==  id)
 }

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/selecoes",(req,  res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(searchSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrata com sucesso!')
})
export default app