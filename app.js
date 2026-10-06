const express = require('express')
const app = express
const port = 5000
const path = require('path')
const methodOverride = require(methodOverride)
const logger = require('../Middlewares/logger.js')
const prisma = require('../lib/prisma.js')
app.use(express.json())
app.use(methodOverride)//Deve esta faltando uma parte, não lembrei o restante
app.use(logger)
app.post("/usuarios", async(req,res) =>{
   const {nome, idade} = req.body;
   try{
    if(nome && idade){
       usuario = await prisma.usuario.create(
        data = {
            nome: nome,
            idade: Number(idade)
    } )
    res.json({
        mensagem: 'Usuario cadastrado com sucesso'
   }).res.render('index.html', mensagem)
    }}catch(erro){
        res.json({
            erro: 'Erro ao cadastrar usuario, confira se todos os campos estão preenchidos.'
        })   
    }
}
)
    
    
app.get('usuarios', (req,res) =>{
     const usuarios = prisma.usuario.findMany()
    if(usuarios){
        res.json(usuarios)
    }
})
app.put('/usuarios/:id', async(req,res) =>{
    const novaInfo = req.body
    const id = req.params.id
    if(novaInfo){
                if(novaInfo === nome){
            try{
                usuario 
                =
                await prisma.usuario.update({where: {
                    id: id
                },
                data:{
                    nome:novaInfo
                } 
            });
              res.json({
                mensagem: "Usuario atualizado com sucesso"})
            } catch(erro){
                res.json({
                    erro:'Erro ao adicionar nome, tente novamente.'
                })
            }
            }
        else{
                try{
                    usuario = await
                prisma.usuario.update({where: {
                    id: id
                },
                data:{
                    idade:novaInfo
                } 
            }); res.json({
                mensagem: 'Idade aatualizada com sucesso'
            })
            } catch(erro){
                res.json({
                    erro:'Erro ao adicionar nome, tente novamente.'
                })
            }
        }
    }else{
        res.json({
            mensagem :  'Informe qual informação que deseja alterar'
        })
           
    }

});
app.delete('usuarios/:id', async (req,res)=>{
    const id = decodeURIComponent(req.params)
    try{
       await prisma.usuario.delete({
            where:{id: id}
        })
    }catch(erro){
        res.json({
            erro: "Erro ao deletar usuario, tente novamente"
        })
    }
});
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))

});
app.listen(port,() =>{
    console.log( `Servidor rodando: http//locallhost{port}`)
}) 