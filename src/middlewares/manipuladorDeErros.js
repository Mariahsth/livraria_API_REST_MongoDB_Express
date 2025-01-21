/* eslint-disable linebreak-style */
import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

//middleware que será realizada em quase toda a requisição. Será utilizada para tratar os erros que forem lançados
// eslint-disable-next-line no-unused-vars
function manipuladorDeErros (erro, req, res, next){       
  if (erro instanceof mongoose.Error.CastError){  //Erro quando o dado mandado não era como o mongoose esperava (ex:quantidade de caracteres do id)
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError){     //Erro quando não coloca itens obrigatórios na requisição POST, ex: titulo do livro
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase) {         //Erro quando a página não é encontrada (ex: http://localhost:3000/livross)
    erro.enviarResposta(res);
  } else{
    new ErroBase().enviarResposta(res);
  } 
}
export default manipuladorDeErros;