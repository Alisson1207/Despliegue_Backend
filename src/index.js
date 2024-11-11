const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configura Express para servir archivos estáticos desde una carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

const integrantes = [
    { id: 1, nombre: "Adrian", apellido: "Cadena", edad: 20 },
    { id: 2, nombre: "Walter", apellido: "Cobacango", edad: 20 },
    { id: 3, nombre: "Alisson", apellido: "Viteri", edad: 23 },
    { id: 4, nombre: "Ariel", apellido: "Asqui", edad: 22 },
    { id: 5, nombre: "Jonathan", apellido: "Ramirez", edad: 21 },
    { id: 6, nombre: "Francis", apellido: "Aconda", edad: 21 },
    { id: 7, nombre: "Evelyn", apellido: "Guachamin", edad: 27 }
];

// Ruta GET para la información del grupo
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Landing Page - Grupo #2</title>
            <link rel="stylesheet" href="/css/styles.css"> <!-- Asegúrate de que el archivo CSS esté en la carpeta public/css -->
        </head>
        <body>
            <div class="container">
                <h1>Bienvenido al Grupo #2</h1>
                <p>Esta es la landing page de nuestro proyecto.</p>
            </div>
        </body>
        </html>
    `);
});

// Ruta GET para la lista de integrantes del grupo
app.get('/integrantes', (req, res) => {
    res.json(integrantes);
});

// Ruta GET para obtener un integrante específico por ID
app.get('/integrantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const integrante = integrantes.find(i => i.id === id);
    if (integrante) {
        res.json(integrante);
    } else {
        res.status(404).send("Integrante no encontrado");
    }
});

// Ruta GET para mostrar un HTML con productos de computadores
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'productos/products.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
