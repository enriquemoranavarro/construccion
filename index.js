// server/index.js
const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");


const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server side!"});
});

// Endpoint 1: /acceso, using method GET
app.get('/acceso/:userId', (req, res) => {
    const userId = req.params.userId;
    const userExists = true; 
    if (userExists) {
      res.send(`Información de ${userId} Usuario`);
    } else {
      res.status(404).send(`${userId} usuario no existe`);
    }
  });
  
  // Endpoint 2: /rectificacion, using method PUT
  app.put('/rectificacion/:userId', (req, res) => {
    const userId = req.params.userId;
    const userData = req.body;
    const updated = true; 
    if (updated) {
      res.send(`Se han guardado los cambios solicitados por ${userId} usuario`);
    } else {
      res.status(500).send('Hubo un error al actualizar los datos, inténtalo de nuevo');
    }
  });
  
  // Endpoint 3: /cancelacion, using method DELETE
  app.delete('/cancelacion/:userId', (req, res) => {
    const userId = req.params.userId;
    const deleted = true; 
    if (deleted) {
      res.send(`Se ha eliminado la información de ${userId} usuario con éxito`);
    } else {
      res.status(500).send(`No es posible eliminar la información de ${userId} usuario`);
    }
  });
  
  // Endpoint 4: /oposicion, using method DELETE
  app.delete('/oposicion/:userId', (req, res) => {
    const userId = req.params.userId;
    const registered = true; 
    if (registered) {
      res.send(`Se ha registrado de manera exitosa la oposición de ${userId} usuario`);
    } else {
      res.status(500).send(`No es posible generar una oposición para los datos de ${userId} usuario`);
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});





