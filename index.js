import express from 'express';
const app = express();
const PORT = 3000;

const alumnos = [
    {nombre: "Valentina Ortiz", matricula: "17003931"},
    {nombre: "Diego Alamilla", matricula: "21216409"},
    {nombre: "Fernando Joachin", matricula: "18000621"},
    {nombre: "José Carlos Leo", matricula: "21216389"},
    {nombre: "Carlos May", matricula: "18001347"}
];

const profesores = [
    {nombre: "Victor Menendez", numeroEmpleado: "001"},
    {nombre: "Eduardo Rodriguez", numeroEmpleado: "002"},
    {nombre: "Edwin Leon", numeroEmpleado: "003"},
    {nombre: "Luis Basto", numeroEmpleado: "004"}
];

app.get('/', (require, response) =>{
    response.send("Bienvenido a SICEI");
});

app.get('/alumnos', (require, response) => {
    response.json(alumnos);
});

app.get('/profesores', (require, response) => {
    response.json(profesores);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
