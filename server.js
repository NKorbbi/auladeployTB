import express from 'express';

const app = express();

app.get ('/',(req, res) => {
    res.send("servidor rodando na nuvem")
});
app.get ('/teste', (req, res) => {
    res.send("rota de teste funcionando")

});

const PORT = process.env.PORT || 3000

app.listen (PORT, ()=> {
    console.log("servidor rodando")
})