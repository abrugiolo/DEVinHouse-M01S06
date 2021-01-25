import { Typography } from "@material-ui/core";
import CardProcesso from "../components/CardProcesso";

const Listagem = ({ idAtual, processos, onClick }) => {
  return (
    <div className="listagem">
      {processos ? (
        processos.length === 0 ? (
          <Typography variant="subtitle1" style={{}}>
            Nenhum processo encontrado.
          </Typography>
        ) : processos.length > 0 ? (
          processos.map((processo, index) => (
            <CardProcesso
              key={index}
              processo={processo}
              onClick={onClick}
              idAtual={idAtual}
            />
          ))
        ) : null
      ) : null}
    </div>
  );
};

export default Listagem;
