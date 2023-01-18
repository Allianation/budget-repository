import * as entriesSaga from "./entries.saga";
import * as entriesSagaDelete from "./entries.saga.delete";
import * as entriesSagaAdd from "./entries.saga.add";
import * as entriesSagaUpdate from "./entries.saga.update";

export function initSagas(sagaMiddleware) {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaDelete).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaUpdate).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
