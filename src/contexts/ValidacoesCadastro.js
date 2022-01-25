import React from "react";

const ValidacoesCadasatro = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}
export default ValidacoesCadasatro;
