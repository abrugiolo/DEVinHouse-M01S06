import "../assets/css/guideline.css";
import "../assets/css/pagresultado.css";
import "../assets/css/comp-listagem.css";
import "../assets/css/comp-detalhes.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { buscarProcesso, removerProcesso } from "../redux/actions";
import { selectProcessos } from "../redux/selectors";
import { useQuery } from "../uteis/constantes";
import Busca from "../components/Busca";
import CriarNovo from "../components/CriarNovo";
import Detalhes from "../components/Detalhes";
import Listagem from "../components/Listagem";
import Loading from "../components/Loading";

const PagResultado = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const busca = useQuery();
  const processos = useSelector(selectProcessos);
  const [idAtual, setIdAtual] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      setTimeout(() => {
        setLoading(false);
      }, 1500),
    []
  );

  useEffect(() => {
    if (busca) dispatch(buscarProcesso(busca));
  }, [dispatch, busca]);

  const handleClick = (processo) => {
    processo.id === idAtual //
      ? setIdAtual("")
      : setIdAtual(processo.id);
  };

  const handleEditar = () => {
    history.push(`/processo/${idAtual}`);
    handleFechar();
  };

  const handleRemover = () => {
    dispatch(removerProcesso(idAtual));
    handleFechar();
    alert("O processo foi removido com sucesso.");
  };

  const handleFechar = () => {
    setIdAtual("");
  };

  return (
    <>
      <div className="pag-resultado">
        <header>
          <Busca pagInicial={false} />
          <CriarNovo pagInicial={false} />
        </header>

        {loading ? (
          <Loading />
        ) : (
          <div className="conteudo">
            <Listagem idAtual={idAtual} processos={processos} onClick={handleClick} />

            {idAtual && (
              <Detalhes
                idAtual={idAtual}
                editar={handleEditar}
                remover={handleRemover}
                fechar={handleFechar}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PagResultado;
