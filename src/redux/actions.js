import * as types from "./types";

export const buscarProcesso = (busca) => ({
  type: types.BUSCAR_PROCESSO,
  payload: busca,
});

export const buscarProcessoID = (id) => ({
  type: types.BUSCAR_PROCESSO_ID,
  payload: id,
});

export const adicionarProcesso = (processo) => ({
  type: types.ADICIONAR_PROCESSO,
  payload: processo,
});

export const atualizarProcesso = (processo) => ({
  type: types.ATUALIZAR_PROCESSO,
  payload: processo,
});

export const removerProcesso = (id) => ({
  type: types.REMOVER_PROCESSO,
  payload: id,
});
