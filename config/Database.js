
const mongoose = require('mongoose');
const config = require('../config/Index');

class Database {
  constructor() {
    this.config = config;
    this.mongoose = mongoose;
    this.mongoose.Promise = global.Promise;
  }

  connect() {
    if (this.config.db) {
      this.mongoose.set('useCreateIndex', true);
      this.mongoose.connect(this.config.db.url, { useNewUrlParser: true })
        .then(() => {
          console.log(`Conectado com sucesso no banco de dados [${this.config.db.url}]`);
        })
        .catch((erro) => {
            console.log(`Erro ao conectar com banco de dados [${this.config.db.url}]`, erro);
        });

      this.mongoose.connection.on('close', () => {
        console.log(`A conexão com o banco de dados foi fechada [${this.config.db.url}]`);
      });
    }
  }

  mongooseConnection() {
    return this.mongoose.connection;
  }
}

module.exports = new Database();
