import PagInicial from "../pages/PagInicial";
import PagCadastro from "../pages/PagCadastro";
import PagResultado from "../pages/PagResultado";

const routes = [
  {
    path: "/busca",
    component: PagResultado,
  },
  {
    exact: true,
    path: "/processo",
    component: PagCadastro,
  },
  {
    path: "/processo/:id",
    component: PagCadastro,
  },
  {
    path: "/",
    component: PagInicial,
  },
];

export default routes;
