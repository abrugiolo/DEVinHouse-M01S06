import "../assets/css/guideline.css";
import "../assets/css/pagcadastro.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Cadastro from "../components/Cadastro";
import {
  adicionarProcesso,
  atualizarProcesso,
  buscarProcesso,
  buscarProcessoID,
} from "../redux/actions";

const PagCadastro = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    id //
      ? dispatch(buscarProcessoID(id))
      : dispatch(buscarProcesso(""));
  }, [dispatch, id]);

  const adicionar = (processo) => {
    processo.id //
      ? dispatch(atualizarProcesso(processo)) //
      : dispatch(adicionarProcesso(processo));
    voltar();
  };

  const voltar = () => {
    history.push("/");
  };

  return (
    <div className="pag-cadastro">
      <Cadastro adicionar={adicionar} voltar={voltar} />
    </div>
  );
};

export default PagCadastro;
