//Definindo as rotas
import express from "express";
import LivroController from "../controllers/livroController.js";

const routes=express.Router();      //Router é um método do express

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;

//No express, é preciso ordenar as buscar por complexidade, por exemplo, se coloca a rota /livros/:id antes de /livros/busca, a pesquisa da busca da editora será feita pela rota do id