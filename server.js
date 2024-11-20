
import app from './src/app.js'
import conexao from './db/conexao.js'

const PORT = 3000

conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log("Conexão realizada com sucesso!")

        app.listen(PORT,() => {
            console.log(`Server running in port http:localhost${PORT}`)
        })
   }
})


