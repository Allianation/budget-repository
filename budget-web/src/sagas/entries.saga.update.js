import { call, put, takeLatest } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";

export function* updateEntrySaga() {
  yield takeLatest(entriesTypes.UPDATE_ENTRY, updateEntryToDb);
}

function* updateEntryToDb({ payload }) {
  yield call(updateEntry, payload.id, payload.entry.description);
  yield call(
    updateEntryDetails,
    payload.id,
    payload.entry.value,
    payload.entry.isExpense
  );
  yield put({
    type: "UPDATE_ENTRY_RESULT",
    payload: { id: payload.id, entry: payload.entry },
  });
}

async function updateEntry(id, description) {
  await axios.put(`http://localhost:3001/entries/${id}`, { description });
}

async function updateEntryDetails(id, value, isExpense) {
  await axios.put(`http://localhost:3001/values/${id}`, { value, isExpense });
}
