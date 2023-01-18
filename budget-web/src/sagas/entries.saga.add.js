import { call, put, takeLatest } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";

export function* addEntrySaga() {
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb);
}

function* addEntryToDb({ payload }) {
  yield call(addEntry, payload);
  yield call(addEntryDetails, payload);
  yield put({ type: "ADD_ENTRY_RESULT", payload: payload });
}

async function addEntry({ id, description }) {
  await axios.post("http://localhost:3001/entries", { id, description });
}

async function addEntryDetails({ id, value, isExpense }) {
  await axios.post("http://localhost:3001/values", { id, value, isExpense });
}
