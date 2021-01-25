// export const getReducer = (store) => store.reducer;
// export const getProcessos = (store) => store.reducer.processos;
export const selectProcessos = (store) => store.processos;
export const selectProcessoPorID = (id) => (store) =>
  store.processos.find((proc) => proc.id === id);
