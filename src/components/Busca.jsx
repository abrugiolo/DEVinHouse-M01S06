import { useHistory } from "react-router-dom";
import { useQuery } from "../uteis/constantes";
import InputBusca from "./InputBusca";
import { Typography } from "@material-ui/core";

const Busca = ({ pagInicial }) => {
  const history = useHistory();
  const busca = useQuery();

  const handleChange = (event) => {
    const value = event.target.value;

    value //
      ? history.push(`/busca?q=${value}`)
      : history.push("/");
  };

  return (
    <div className="busca">
      <Typography
        variant={pagInicial ? "h5" : "subtitle2"}
        className={`title ${pagInicial ? "primary-color" : ""}`}
      >
        Busca de processos
      </Typography>
      <InputBusca value={busca} onChange={handleChange} />
    </div>
  );
};

export default Busca;
