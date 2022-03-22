// teste de versssssssssssssssssssão

// #Creat tables
const Postagem =sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING        
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
// Usuario.sync({force:true});
// Postagem.sync({force: true});

// Postagem.create({
//     titulo: "Bem vindo a vida de programador",
//     conteudo: "Estou muito feliz por voltar a programar"

// })

// Usuario.create({
//     nome: "Betho",
//     sobrenome: "COsta",
//     idade: 45,
//     email: "betho@gmail.com"

// })




// sequelize.authenticate().then(()=>{
//     console.log("Conexão ok");
// }).catch((erro)=>{
//     console.log('Erro na coneão' + erro);
// })