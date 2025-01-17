
//Instalar: nodemon, postman, express, mongodb, mongoose, dotenv

import "dotenv/config";
import app from "./src/app.js"; //pelo método express

const PORT=3000;        //Definindo a porta



app.listen(PORT, ()=>{               //listen=>Evento tipo uma conexão, neste caso na porta 3000
    console.log("Servidor escutando!")
})