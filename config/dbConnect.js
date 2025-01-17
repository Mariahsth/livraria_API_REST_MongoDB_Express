import mongoose from "mongoose";        //Importando o mongoose

async function conectaNaDatabase(){                 //função assíncrona
    mongoose.connect(process.env.DB_CONNECTION_STRING);    //string de conexão, alterando para o password definido no atlas e incluindo no caminho "...mongodb.net/livraria" Insalar dotenv para esconder a senha -> npm install dotenv


    return mongoose.connection;      //método interno do mongoose, vai retornar objeto com todas as infos que precisa pra conectar com o banco e fazer as operações
}


export default conectaNaDatabase;