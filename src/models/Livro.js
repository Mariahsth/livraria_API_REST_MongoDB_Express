//Criar um modelo para cada livro que entre no banco
import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

//Criar Schema (objeto de configuração que define a estrutura e as propriedades de um documento)
const livroSchema=new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},     //Definindo o tipo de dado de cada parametro
    titulo:{type:String, require:true},             //required=obrigatório
    editora:{type:String},
    preco:{type: Number},
    paginas:{type:Number},
    autor: autorSchema              //Unindo autor e livro pelo método embedding
}, {versionKey: false} )            //se refere ao versionamento do mongodb

//defininfo o modelo "livro" (modelo é um objeto que representa uma coleção na base de dados, é uma interface)
const livro=mongoose.model("livros", livroSchema);           //"livros" se refere a coleção criado no atlas, e o 2o parametro se refere qual schema ele se refere

export default livro;