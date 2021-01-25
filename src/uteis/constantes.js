import { useLocation } from "react-router-dom";

export const useQuery = () => {
  const query = new URLSearchParams(useLocation().search).get("q");
  return query || "";
};

export const PROCESSO_VAZIO = {
  numero: "",
  entrada: new Date().toLocaleDateString("pt-BR"),
  interessados: [],
  descricao: "",
  assunto: "",
};

// export const LISTA_PROCESSOS = [
//   {
//     nome: "Kihn-Schmitt",
//     data: "12/01/2020",
//     id: 1,
//   },
//   {
//     nome: "Monahan Inc",
//     data: "26/01/2021",
//     id: 2,
//   },
//   {
//     nome: "Hettinger and Sons",
//     data: "28/12/2020",
//     id: 3,
//   },
//   {
//     nome: "Harvey, Mann and Gaylord",
//     data: "16/01/2021",
//     id: 4,
//   },
//   {
//     nome: "Medhurst-Grady",
//     data: "01/12/2020",
//     id: 5,
//   },
//   {
//     nome: "Jacobi, Botsford and Morar",
//     data: "14/01/2021",
//     id: 6,
//   },
//   {
//     nome: "Okuneva, Considine and O'Kon",
//     data: "31/12/2020",
//     id: 7,
//   },
// ];
