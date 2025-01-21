/* eslint-disable linebreak-style */
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";


async function paginar(req, res, next){
  try {
    //Definindo quantos livros por página serão buscados
    let { limite=5, pagina=1, ordenacao="_id:-1" } = req.query;   //Nesse caso está ordenado por ordem descrescente de criação da id

    let [campoOrdenacao, ordem]=ordenacao.split(":");
  
    limite=parseInt(limite);
    pagina=parseInt(pagina);
    ordem=parseInt(ordem);

    const resultado=req.resultado;
  
    if (limite>0 && pagina>0){
      const resultadoPaginado = await resultado.find()
        .sort({ [campoOrdenacao]:ordem })              //ordenando os arquivos por ordem descrescente (-1) ou crescente (1)
        .skip((pagina-1)*limite)      //definindo quantos livros serão pulados por página
        .limit(limite)
        .exec();
      res.status(200).json(resultadoPaginado);
    } else {
      next(new RequisicaoIncorreta());
    }
  } catch (erro) {
    next(erro);
  }
    

}

export default paginar;