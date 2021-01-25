import { createServer, Model } from "miragejs";
import * as constants from "./constants";
import { LISTA_PROCESSOS } from "../uteis/constantes";

export function criarServidor({ enviroment = "test" } = {}) {
  const server = createServer({
    enviroment,

    models: {
      processo: Model,
    },

    seeds(server) {
      LISTA_PROCESSOS.forEach((processo) => server.create("processo", processo));
    },

    routes() {
      this.namespace = constants.DEVINHOUSE_API;

      this.get("", (schema) => schema.processos.all().models);

      this.get("/:id", (schema, request) => {
        return schema.processos.find(request.params.id).attrs;
      });

      this.get("", (schema, request) => {
        const busca = request.queryParams.busca;

        return busca
          ? schema.filmes.where(
              (proc) =>
                proc.assunto.includes(busca) || //
                proc.descricao.includes(busca)
            ).models
          : schema.processos.all().models;
      });

      this.post("", (schema, request) => {
        const dados = JSON.parse(request.requestBody);
        return schema.processos.create(dados);
      });

      this.put("", (schema, request) => {
        const dados = JSON.parse(request.requestBody);
        return schema.processos.create(dados);
      });

      this.delete("/:id", (schema, request) => {
        const id = request.params.id;
        return schema.processos.find(id).destroy();
      });
    },
  });

  return server;
}
