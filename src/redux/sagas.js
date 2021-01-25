import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import ProcessosAPI from "../services/ProcessosAPI";
import * as types from "./types";

/**
 * WORKERS
 */
function* buscar(action) {
  const processos = yield call(ProcessosAPI.buscar, action.payload);
  yield put({ type: types.BUSCAR, payload: processos });
}

function* buscarID(action) {
  const atual = yield call(ProcessosAPI.buscarID, action.payload);
  yield put({ type: types.BUSCAR_ID, payload: atual });
}

function* adicionar(action) {
  yield call(ProcessosAPI.adicionar, action.payload);

  // const processos = yield call(ProcessosAPI.buscar, action.payload);
  // yield put({ type: types.BUSCAR, payload: processos });
}

function* atualizar(action) {
  yield call(ProcessosAPI.atualizar, action.payload);

  // const processos = yield call(ProcessosAPI.buscar, action.payload);
  // yield put({ type: types.BUSCAR, payload: processos });
}

function* remover(action) {
  yield call(ProcessosAPI.remover, action.payload);

  const processos = yield call(ProcessosAPI.buscar, "");
  yield put({ type: types.BUSCAR, payload: processos });
}

/**
 * WATCHERS
 */
function* watchBuscar() {
  yield takeLatest(types.BUSCAR_PROCESSO, buscar);
}

function* watchBuscarID() {
  yield takeLatest(types.BUSCAR_PROCESSO_ID, buscarID);
}

function* watchAdicionar() {
  yield takeEvery(types.ADICIONAR_PROCESSO, adicionar);
}

function* watchAtualizar() {
  yield takeEvery(types.ATUALIZAR_PROCESSO, atualizar);
}

function* watchRemover() {
  yield takeEvery(types.REMOVER_PROCESSO, remover);
}

/**
 * rootSaga()
 */
// export default function* rootSaga() {
export default function* rootSaga() {
  yield all([
    watchBuscar(),
    watchBuscarID(),
    watchAdicionar(),
    // takeEvery(types.ADICIONAR_PROCESSO, adicionar),
    watchAtualizar(),
    watchRemover(),
  ]);
}
