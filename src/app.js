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

 function searchIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)  
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

app.delete('/selecoes/:id', (req, res) => {
    let index = searchIndexSelecao(req.params.id)
    selecoes.splice(index, 1) 
    res.send(`Seleção com id ${req.params.id} excluída com sucesso!`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = searchIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    //res.send(`Seleção com id ${req.params.id} foi atualizada com sucesso!`)
    res.json(selecoes)
})

export default app