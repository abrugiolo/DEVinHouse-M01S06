import "../assets/css/guideline.css";
import "../assets/css/paginicial.css";
import Busca from "../components/Busca";
import CriarNovo from "../components/CriarNovo";

const PagInicial = () => {
  return (
    <div className="pag-inicial">
      <Busca pagInicial={true} />
      <CriarNovo pagInicial={true} />
    </div>
  );
};

export default PagInicial;
