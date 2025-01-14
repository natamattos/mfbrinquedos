const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3001;

const db = new sqlite3.Database('./backend/database/mfbrinquedos.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Banco de dados conectado com sucesso!');
  }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
