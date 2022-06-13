import { all, call } from 'redux-saga/effects';

import { collectionSaga } from './collection/collection.saga';

export function* rootSaga() {
    yield all([call(collectionSaga)])
}