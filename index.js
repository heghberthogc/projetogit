const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

  // Config
  // Template Enginer
    app.engine('handlebars', handlebars({defaultlayout:'main'}))
    app.set('view engine','handlebars')
    
    // // Conexão DB
    // const Sequelize = require('sequelize');
    // const sequelize = new Sequelize ('teste','root','senha123', {
    // host:"159.223.132.218", dialect: "mysql"
    // })


app.get("/cadastro",(req,res)=>{
  res.send('ok');
})    


app.get("*", (req, res) => { 
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h4>Isto (esta página) non ecziste!</h4>
        </body>
      </html>
    `);
});
  

app.listen(8080);
console.log('Servidor Rodando');