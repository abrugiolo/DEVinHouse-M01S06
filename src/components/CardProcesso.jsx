import { Avatar, Paper, Typography } from "@material-ui/core";

const CardProcesso = ({ processo, onClick, idAtual }) => {
  const cardAtual = idAtual === processo.id ? "2px #005b95 solid" : "1px #c4c4c4 solid";
  const primaryColor = idAtual === processo.id ? "primary-color" : "";

  return (
    <div className="card-processo" onClick={() => onClick(processo)}>
      <Paper elevation={3} square style={{ padding: "12px", border: cardAtual }}>
        {idAtual ? (
          <table>
            <tbody>
              <tr>
                <th>
                  <Typography className={`subtitle ${primaryColor}`}>Número</Typography>
                </th>
                <th>
                  <Typography className={`subtitle ${primaryColor}`}>Assunto</Typography>
                </th>
              </tr>
              <tr>
                <td>
                  <span className={`${primaryColor}`}>{processo.numero}</span>
                </td>
                <td>
                  <span className={`${primaryColor}`}>{processo.assunto}</span>
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                  <Typography className={`subtitle ${primaryColor}`}>
                    Interessado
                  </Typography>
                </th>
              </tr>
              <tr>
                <td colSpan="2">
                  <span className={`${primaryColor}`}>{processo.interessados[0]}</span>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table>
            <tbody>
              <tr>
                <th id="avatarListagem" rowSpan="2">
                  <Avatar className="avatar" variant="square" />
                </th>
                <th>
                  <Typography className="subtitle">Número</Typography>
                </th>
                <th>
                  <Typography className="subtitle">Assunto</Typography>
                </th>
                <th>
                  <Typography className="subtitle">Interessado</Typography>
                </th>
                <th>
                  <Typography className="subtitle">Descrição</Typography>
                </th>
              </tr>
              <tr>
                <td>{processo.numero}</td>
                <td>{processo.assunto}</td>
                <td>{processo.interessados[0]}</td>
                <td>{processo.descricao}</td>
              </tr>
            </tbody>
          </table>
        )}
      </Paper>
    </div>
  );
};

export default CardProcesso;
