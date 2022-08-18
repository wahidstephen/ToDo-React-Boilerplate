import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actionTypes, actions } from './modules';
import { fetchSaga } from 'store/sagas';

const { LOAD_TODOS } = actionTypes;
const { loadFail, loadSuccess } = actions;

export function* loadTodos(request, action) {
  try {
    // mimic server
    yield delay(2000);
    if (action.error) {
      // noinspection ExceptionCaughtLocallyJS
      throw new Error('not working');
    }
    const todos = [
      { id: 1, name: 'Find the meaning of life', completed: true },
      { id: 2, name: 'Learn more about 6sense', completed: false },
      { id: 3, name: 'Meditate', completed: false },
      { id: 4, name: 'Take a barista class', completed: false },
      { id: 5, name: 'Take a bartender class', completed: true },
      { id: 6, name: 'Give to someone in need', completed: true },
      { id: 7, name: 'laugh as much as possible', completed: true },
      { id: 8, name: 'Tell Scott to follow pep8', completed: true },
      { id: 9, name: 'Improve product', completed: false },
      { id: 10, name: 'Zen', completed: false },
      { id: 11, name: 'Finish food', completed: false },
      { id: 12, name: 'Clean room', completed: false },
      { id: 13, name: 'Dance', completed: false },
      { id: 14, name: 'Find Dance Partner', completed: false },
      { id: 15, name: 'Call Doctor', completed: false },
      { id: 16, name: 'Call Dentist', completed: false },
      { id: 17, name: 'Call Mom', completed: false },
      { id: 18, name: 'Call Sister for birthday', completed: false },
      { id: 19, name: 'Organize secure docs', completed: false },
      { id: 20, name: 'Apply for jobs', completed: false },
    ];

    yield put(loadSuccess(todos));
  } catch (e) {
    yield put(loadFail(e));
  }
}

/**
 * Saga manages page-load calls
 */
export function* watchTodos(request) {
  yield takeLatest(LOAD_TODOS, loadTodos, request);
}


export default [
  fetchSaga(watchTodos),
];
