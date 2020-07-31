const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/todo';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); //Ter a compatibilidade com outros servidores mongo

module.exports = mongoose; //O arquivo por padrão, quando chamado, vai devolter a constante mongoose (conexão)