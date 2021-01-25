import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const CriarNovo = ({ pagInicial }) => {
  const NOVO = "/processo";

  return pagInicial ? (
    <div className="criar-novo">
      <Typography>
        Você pode criar um novo processo{" "}
        <Link to={NOVO} className="primary-color">
          clicando aqui
        </Link>
        .
      </Typography>
    </div>
  ) : (
    <Button
      id="btnNovo"
      className="button-label"
      variant="contained"
      style={{
        backgroundColor: "#ffffff",
        padding: "8px 32px",
      }}
      component={Link}
      to={NOVO}
    >
      NOVO
    </Button>
  );
};

export default CriarNovo;
