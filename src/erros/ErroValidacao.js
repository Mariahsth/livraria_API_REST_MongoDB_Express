/* eslint-disable linebreak-style */
import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagensErro=Object.values(erro.errors)          //Object.values() é um método do JS para iterar sobre objetos
      .map(erro => erro.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

export default ErroValidacao;