import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"

//Criar função para agrupar todas rotas que podemos receber
const routes= (app) =>{
    //Trafegando string para url base
    app.route("/").get((req, res)=> res.status(200).send("Curso de Node.js")); // "/"" é a url de base localhost:3000

    app.use(express.json(), livros, autores);                //.use-> Middleware, usadas para ter acesso as requisições no momento que ocorrem e poderam fazer modificações nelas. Nesse caso express.json() vai ser realizado em todas as requisições que tenha como body um objeto que seja compatível com json,assim ele vai ser convertido para json, para que os dados não trafeguem como string

};

export default routes;