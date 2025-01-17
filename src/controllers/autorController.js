import {autor} from "../models/Autor.js";

//controller vai ser uma classe e dentro terão vários métodos

class AutorController {
    static async listarAutores (req, res) {          //static pra não precisar instanciar a classe
        try {
            const listaAutores=await autor.find({})      //.find é método do mongoose, vai buscar os dados usando o modelo livro
            res.status(200).json(listaAutores);          //Manda tipo json para que o navegador consiga interpretar o objeto
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    };

    static async listarAutorPorId (req, res) {          
        try {
            const id=req.params.id;
            const autorEncontrado=await autor.findById(id)      //.findById é método do mongoose, vai buscar os dados por ID
            res.status(200).json(autorEncontrado);          
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do autor`})
        }
    };

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor=await autor.create(req.body)                    //create() é método do mongoose
            res.status(201).json({message: "criado com sucesso", autor: novoAutor})
            
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor`})
        }
    };

    static async atualizarAutor (req, res) {          
        try {
            const id=req.params.id;
            await autor.findByIdAndUpdate(id, req.body)      //.findByIdAndUpdate é método do mongoose, vai buscar os dados por ID e atualizar
            res.status(200).json({message: "autor atualizado"});          
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização do autor`})
        }
    };

    static async excluirAutor (req, res) {
        try {
            const id=req.params.id;
            await autor.findByIdAndDelete(id)                 //.findByIdAndDelete é método do mongoose, vai buscar os dados por ID e deletar 
            res.status(200).json({message: "Autor deletado com sucesso"})
            
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao deletar autor`})
        }
    };
};

export default AutorController;