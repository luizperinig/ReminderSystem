const app = require('./config/express');

//Sincroniza o banco de dados
//Descomentar o trecho abaixo apenas quando forem feitas mudanças na estrutura do banco de dados (pasta model)
//(async () => {
//    const database = require('./config/database');
//    await database.sync({ alter: true });
//})();

const port = 3030;
app.listen(port, console.log('Server running on port ' + port));