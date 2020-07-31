const express = require('express'); //Criando/chamando uma constante express com o módulo express
const cors = require('cors');
const server = express(); //Criando uma constante server que recebe o express como valor
server.use(cors());
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

server.listen(3333, () => {
    console.log('API ONLINE');
});