import { useSelector } from "react-redux";
import { selectProcessoPorID } from "../redux/selectors";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar, Button, IconButton, Paper, Typography } from "@material-ui/core";

const Detalhes = ({ idAtual, editar, remover, fechar }) => {
  const atual = useSelector(selectProcessoPorID(idAtual));

  return (
    <div className="detalhes">
      <Paper id="paperDetalhes" elevation={3} square>
        <header>
          <table>
            <tbody>
              <tr>
                <td rowSpan="4" id="avatarDetalhes">
                  <Avatar className="avatar" variant="square" />
                </td>
                <td>
                  <Typography variant="subtitle2" className="subtitle">
                    Processo
                  </Typography>
                </td>
                <td>
                  <Typography variant="subtitle2" className="subtitle">
                    Data
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>{atual.numero}</td>
                <td>{atual.entrada}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Typography variant="subtitle2" className="subtitle">
                    Assunto
                  </Typography>
                </td>
              </tr>
              <tr>
                <td colSpan="2">{atual.assunto}</td>
              </tr>
            </tbody>
          </table>
          <IconButton onClick={fechar}>
            <CloseIcon style={{ width: "1.5em", height: "1.5em" }} />
          </IconButton>
        </header>
        <div className="conteudo">
          <div className="interessados">
            <ul type="none">
              <Typography variant="subtitle2" className="subtitle">
                Interessados
              </Typography>
              {atual.interessados.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ul>
          </div>

          <div className="descricao">
            <Typography variant="subtitle2" className="subtitle">
              Descrição
            </Typography>
            {atual.descricao}
          </div>
        </div>
        <footer>
          <Button
            className="button-label"
            type="button"
            variant="contained"
            style={{
              backgroundColor: "#ffffff",
              color: "#757575",
              padding: "4px 24px",
            }}
            onClick={remover}
          >
            REMOVER
          </Button>
          <Button
            className="button-label"
            type="button"
            variant="contained"
            style={{
              backgroundColor: "#ffffff",
              color: "#005b95",
              padding: "4px 24px",
            }}
            onClick={editar}
          >
            EDITAR
          </Button>
        </footer>
      </Paper>
    </div>
  );
};

export default Detalhes;
