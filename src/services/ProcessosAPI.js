import axios from "axios";
// import * as constants from "./constants";

// const BASE_URL = `${constants.DEVINHOUSE_API}`; // => /processo
const BASE_URL = "http://localhost:3002/processo";

class ProcessosAPI {
  /** POST http://localhost:3002/processo \
   *    -H 'accept: application/json' \
   *    -H 'content-type: application/json' \
   *    -d '{"descricao" : "Solicitação de licença-prêmio", "assunto" : "Licença", "interessados" : ["Edmilson Cherem"]}'
   */
  adicionar(processo) {
    return axios({
      method: "post",
      url: BASE_URL,
      data: {
        descricao: processo.descricao,
        assunto: processo.assunto,
        interessados: processo.interessados,
      },
    }).catch((error) => {
      throw error;
    });
  }
  // url: `${BASE_URL}/${processo.id}`,
  // atualizar(processo) {
  //   return axios({
  //     method: "post",
  //     url: BASE_URL,
  //     data: {
  //       id: processo.id,
  //       descricao: processo.descricao,
  //       assunto: processo.assunto,
  //       interessados: processo.interessados,
  //     },
  //   }).catch((error) => {
  //     throw error;
  //   });
  // }

  // atualizar(processo) {
  // return axios.put(BASE_URL, processo).catch((error) => {
  // throw error;
  // });
  // }

  /** GET http://localhost:3002/processo?q={query} */
  buscar(query) {
    const QUERY_URL = query ? `${BASE_URL}?q=${query}` : BASE_URL;
    return axios
      .get(QUERY_URL)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  // buscar(query) {
  //   return axios
  //     .get(`${BASE_URL}?q=${query}`)
  //     .then((response) => {
  //       if (query === "") return [];
  //
  //       return response.data.filter((proc) =>
  //         proc.nome.toLowerCase().search(query.toLowerCase()) > -1 ||
  //         proc.data.search(query) > -1
  //           ? proc
  //           : null
  //       );
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // }

  /** GET http://localhost:3002/processo/{id} */
  buscarID(id) {
    return axios
      .get(`${BASE_URL}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  // }buscarID(id) {
  //   return axios
  //     .get(`${BASE_URL}/${id}`)
  //     .then((response) => response.data)
  //     .catch((error) => {
  //       throw error;
  //     });
  // }

  /** DELETE http://localhost:3002/processo/{id} */
  remover(id) {
    return axios.delete(`${BASE_URL}/${id}`).catch((error) => {
      throw error;
    });
  }
  //   return axios.delete(`${BASE_URL}/${id}`).catch((error) => {
  //     throw error;
  //   });
  // }
}

export default new ProcessosAPI();
