import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

//controller vai ser uma classe e dentro terão vários métodos

class LivroController {
    static async listarLivros (req, res) {          //static pra não precisar instanciar a classe
        try {
            const listaLivros=await livro.find({})      //.find é método do mongoose, vai buscar os dados usando o modelo livro
            res.status(200).json(listaLivros);          //Manda tipo json para que o navegador consiga interpretar o objeto
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    };

    static async listarLivroPorId (req, res) {          
        try {
            const id=req.params.id;
            const livroEncontrado=await livro.findById(id)      //.findById é método do mongoose, vai buscar os dados por ID
            res.status(200).json(livroEncontrado);          
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do livro`})
        }
    };

    static async cadastrarLivro (req, res) {
        const novoLivro=req.body;                    //create() é método do mongoose
        try {
            const autorEncontrado=await autor.findById(novoLivro.autor);
            const livroCompleto={...novoLivro, autor:{...autorEncontrado._doc}};
            const livroCriado=await livro.create(livroCompleto)
            res.status(201).json({message: "criado com sucesso", livro: novoLivro})
            
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
        }
    };

    static async atualizarLivro (req, res) {          
        try {
            const id=req.params.id;
            await livro.findByIdAndUpdate(id, req.body)      //.findByIdAndUpdate é método do mongoose, vai buscar os dados por ID e atualizar
            res.status(200).json({message: "livro atualizado"});          
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização do livro`})
        }
    };

    static async excluirLivro (req, res) {
        try {
            const id=req.params.id;
            await livro.findByIdAndDelete(id)                 //.findByIdAndDelete é método do mongoose, vai buscar os dados por ID e deletar 
            res.status(200).json({message: "Livro deletado com sucesso"})
            
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao deletar livro`})
        }
    };

    static async listarLivrosPorEditora (req, res) {
        const editora=req.query.editora;
        try {
            const livrosPorEditora= await livro.find({editora: editora})
            res.status(200).json(livrosPorEditora)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na busca`})
        }
    }
};

export default LivroController;