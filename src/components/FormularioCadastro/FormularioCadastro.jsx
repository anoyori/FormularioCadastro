import React from "react";
import { useState } from "react";

import { Typography } from "@material-ui/core";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  return <>{formularioAtual(etapaAtual)}</>;
}

function formularioAtual(etapa) {
  switch (etapa) {
    case 0:
      return <DadosUsuario />;
    case 1:
      return <DadosPessoais />;
    case 2:
      return <DadosEntrega />;
    default:
      return <Typography>Erro ao selecionar formulário</Typography>;
  }
}
//

export default FormularioCadastro;
